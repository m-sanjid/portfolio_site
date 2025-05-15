"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SearchBlog from "@/components/search-blog"
import { AllBlogPosts } from "@/lib/constants"



export default function Blog() {
  const [blogPosts, setBlogPosts] = useState(AllBlogPosts.slice(0, 3))
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)

  const handleSearch = (query: string) => {
    if (!query) {
      setBlogPosts(showAll ? AllBlogPosts : AllBlogPosts.slice(0, 3))
      return
    }

    const filtered = AllBlogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
    )

    setBlogPosts(filtered)
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    setBlogPosts(showAll ? AllBlogPosts.slice(0, 3) : AllBlogPosts)
  }

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Thoughts, insights, and tutorials on web development and technology.</p>
        </motion.div>

        <SearchBlog onSearch={handleSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post: any, index: any) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="relative h-48">
                    <Image 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-muted-foreground mb-3 text-sm">
                      <motion.div 
                        className="flex items-center mr-4"
                        whileHover={{ x: 5 }}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag: string) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs hover:bg-secondary/80 transition-colors duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div 
                      className="flex items-center text-primary font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </Link>
              </motion.article>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-muted-foreground">No articles found matching your search criteria.</p>
            </motion.div>
          )}
        </div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={toggleShowAll}
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {showAll ? "Show Less" : "View All Articles"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

