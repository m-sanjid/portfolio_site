"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectDetails } from "@/lib/constants"

export default function ProjectDetailsPage() {
  const params = useParams()
  const project = projectDetails

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="mb-8 hover:bg-muted transition-colors duration-200"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-border/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="whitespace-pre-line text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Challenges</h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start text-muted-foreground">
                              <span className="mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Solutions</h3>
                        <ul className="space-y-2">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start text-muted-foreground">
                              <span className="mr-2">•</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 border border-border/40">
                  <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs border border-border/40 hover:border-border hover:text-foreground transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 