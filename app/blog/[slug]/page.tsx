"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Bookmark,
  BookmarkCheck,
  Eye,
  MessageSquare,
  ThumbsUp,
  Tags,
} from "lucide-react";
import { BlogPosts } from "@/lib/constants";

export default function BlogDetailPage({
  slug = "building-scalable-web-applications",
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Find the post by slug
  const post = BlogPosts.find((p) => p.slug === slug);

  const relatedPosts = post?.relatedPosts
    ? post.relatedPosts
        .map((id) => BlogPosts.find((p) => p.id === id))
        .filter(Boolean)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <button className="px-4 py-2 bg-primary text-secondary rounded-md hover:bg-primary/80">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // For the demo, pre-set the likes count
  if (likesCount === 0 && post.likes) {
    setLikesCount(post.likes);
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero section with image */}
      <div className="w-full h-96 relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-75"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <button className="flex items-center text-sm mb-4 hover:underline">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to all articles
              </button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            {/* Author & metadata */}
            <div className="flex items-center justify-between flex-wrap gap-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views?.toLocaleString() || "0"} views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 mt-4 relative">
        <div className="rounded-xl shadow-lg p-8 bg-black/5 dark:bg-white/5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="flex items-center mr-2">
              <Tags className="h-4 w-4 mr-1 text-muted-foreground" />
            </div>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary text-secondary rounded-full text-sm hover:bg-primary/80 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article intro */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              {post.excerpt}
            </p>
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Action bar */}
          <div className="border-t border-b py-6 my-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <button
                className="flex items-center gap-2 hover:text-primary dark:hover:text-primary/80 transition-colors"
                onClick={() => setLikesCount((prev) => prev + 1)}
              >
                <ThumbsUp
                  className={`h-5 w-5 ${
                    likesCount > post.likes
                      ? "fill-primary text-primary dark:fill-primary dark:text-primary"
                      : ""
                  }`}
                />
                <span>{likesCount}</span>
              </button>

              <button className="flex items-center gap-2 hover:text-primary dark:hover:text-primary/80 transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span>{post.comments}</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2 hover:text-primary dark:hover:text-primary/80 transition-colors"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="h-5 w-5 fill-primary text-primary dark:fill-primary dark:text-primary" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
                <span className="sr-only md:not-sr-only">
                  {isBookmarked ? "Bookmarked" : "Bookmark"}
                </span>
              </button>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <div
                    key={related?.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={
                          related?.image ??
                          "/placeholder.svg?height=300&width=500"
                        }
                        alt={related?.title ?? ""}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {related?.title ?? ""}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {related?.excerpt ?? ""}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {related?.date ?? ""}
                        </div>
                        <Link href={`/blog/${related?.slug ?? ""}`}>
                          <button className="text-primary dark:text-primary/80 text-sm hover:underline">
                            Read more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-accent dark:bg-muted/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="text-muted-foreground dark:text-muted-foreground/30 mb-6">
            Get the latest articles and resources sent straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md border bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-primary/80 text-secondary px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
