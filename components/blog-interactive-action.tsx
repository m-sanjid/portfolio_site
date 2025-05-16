"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, MessageSquare, ThumbsUp } from "lucide-react";

interface BlogInteractiveActionsProps {
  initialLikes: number;
  commentCount: number;
}

export default function BlogInteractiveActions({
  initialLikes,
  commentCount,
}: BlogInteractiveActionsProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  return (
    <div className="border-t border-b py-6 my-8 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <button
          className="flex items-center gap-2 hover:text-primary dark:hover:text-primary/80 transition-colors"
          onClick={() => setLikesCount((prev) => prev + 1)}
        >
          <ThumbsUp
            className={`h-5 w-5 ${
              likesCount > initialLikes
                ? "fill-primary text-primary dark:fill-primary dark:text-primary"
                : ""
            }`}
          />
          <span>{likesCount}</span>
        </button>

        <button className="flex items-center gap-2 hover:text-primary dark:hover:text-primary/80 transition-colors">
          <MessageSquare className="h-5 w-5" />
          <span>{commentCount}</span>
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
  );
}