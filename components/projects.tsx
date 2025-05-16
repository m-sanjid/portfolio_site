"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Github, ExternalLink, ArrowRight, X, Search, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com",
    longDescription: "This comprehensive e-commerce solution includes user authentication, product catalog management, shopping cart functionality, secure checkout with Stripe, order history, and an admin dashboard. Built with React for the frontend and Node.js with Express for the backend API, the platform uses MongoDB for data storage and features responsive design for all device types."
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Frontend",
    github: "https://github.com/johndoe/taskmanager",
    demo: "https://taskmanager-demo.com",
    longDescription: "This Kanban-style task management app allows teams to organize workflows efficiently with intuitive drag-and-drop interfaces. Users can create boards, lists, and tasks, assign team members, set due dates, add labels, and track progress. Built with Next.js and TypeScript for type safety, it uses Supabase for backend services and real-time collaboration features."
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with private chats, group conversations, and media sharing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/johndoe/chatapp",
    demo: "https://chatapp-demo.com",
    longDescription: "This real-time chat application enables instant messaging between users with features like private conversations, group chats, read receipts, and media sharing. Using Socket.io for real-time communication, the app maintains persistent connections for immediate message delivery. The React frontend provides a responsive and intuitive interface, while the Express backend handles authentication and message storage in MongoDB."
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather forecasting application with location search, interactive maps, and detailed weather information.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com/johndoe/weather",
    demo: "https://weather-demo.com",
    longDescription: "This weather dashboard provides current conditions and 7-day forecasts for any location worldwide. Features include interactive maps with Leaflet.js, location search, temperature graphs, precipitation probabilities, wind information, and UV index warnings. The app integrates with the OpenWeather API and uses local storage to remember user's preferred locations."
  },
  {
    id: 5,
    title: "Content Management System",
    description: "A headless CMS with a user-friendly admin interface, content modeling, and API endpoints.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    category: "Backend",
    github: "https://github.com/johndoe/cms",
    demo: "https://cms-demo.com",
    longDescription: "This headless CMS empowers content creators with flexible content modeling capabilities while providing developers with robust API endpoints. The system features a React-based admin interface for content creation and management, role-based access control, media library with image optimization, content versioning, and comprehensive API documentation. The Node.js and Express backend uses MongoDB for scalable content storage."
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description:
      "A financial management tool for tracking expenses, setting budgets, and visualizing spending patterns.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    github: "https://github.com/johndoe/finance",
    demo: "https://finance-demo.com",
    longDescription: "This personal finance application helps users manage their finances with expense tracking, income recording, budget setting, and savings goals. The dashboard presents spending patterns through interactive Chart.js visualizations, including pie charts for category breakdowns and line charts for trend analysis. Built with Next.js and PostgreSQL with Prisma ORM, the app includes data export functionality and bank account synchronization options."
  },
]

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  longDescription: string;
}

const categories = ["All", "Frontend", "Backend", "Full Stack"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-10%" })

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
    setActiveCategory("All")
  }

  const filterProjects = () => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === null || project.tags.includes(selectedTag)
      
      return matchesCategory && matchesSearch && matchesTag
    })
  }

  const filteredProjects = filterProjects()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))]

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 relative transition-all duration-700 max-w-5xl mx-auto",
        isSectionInView ? "bg-muted/30" : "bg-muted/10"
      )}
    >
      <div className=" max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4"
            initial={{ backgroundPosition: "0%" }}
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore my portfolio of projects showcasing my skills and experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                layout
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(category)
                    setSelectedTag(null)
                  }}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    activeCategory === category 
                      ? "shadow-md shadow-primary/20" 
                      : "hover:shadow-sm"
                  )}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 rounded-full border-primary/20 focus:border-primary transition-all duration-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
            <AnimatePresence mode="popLayout">
              {allTags.slice(0, 6).map((tag) => (
                <motion.div
                  key={tag}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge 
                    variant={selectedTag === tag ? "default" : "outline"}
                    onClick={() => handleTagClick(tag)}
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      selectedTag === tag 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted"
                    )}
                  >
                    {tag}
                    {selectedTag === tag && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border/40 h-96 animate-pulse">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-4"></div>
                  <div className="h-4 bg-muted rounded w-5/6 mb-4"></div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 bg-muted rounded-full w-16"></div>
                    <div className="h-6 bg-muted rounded-full w-20"></div>
                    <div className="h-6 bg-muted rounded-full w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg">No projects match your filters. Try adjusting your search criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveCategory("All")
                    setSearchTerm("")
                    setSelectedTag(null)
                  }}
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      layout
                      key={project.id}
                      variants={projectVariants}
                      className="group relative"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className={cn(
                          "bg-card rounded-lg overflow-hidden border transition-all duration-500",
                          hoveredProject === project.id 
                            ? "border-primary shadow-lg shadow-primary/10" 
                            : "border-border/40 shadow-sm"
                        )}
                        initial={false}
                        animate={{
                          borderColor: hoveredProject === project.id ? "hsl(var(--primary))" : "hsl(var(--border) / 0.4)"
                        }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image 
                            src={project.image || "/placeholder.svg"} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-all duration-700 ease-out" 
                            style={{
                              transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)"
                            }}
                          />
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300",
                            hoveredProject === project.id ? "opacity-80" : "opacity-0"
                          )} />
                          
                          <motion.div 
                            className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: hoveredProject === project.id ? 1 : 0,
                              y: hoveredProject === project.id ? 0 : 20
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge className="bg-primary/80 backdrop-blur-sm">{project.category}</Badge>
                            <Link href={`/projects/${project.id}`}> 
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="backdrop-blur-sm"
                            >
                              Details <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                            </Link>
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                            </div>
                            <div className="flex space-x-1">
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  asChild
                                  className="rounded-full hover:bg-muted transition-colors duration-200"
                                >
                                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  asChild
                                  className="rounded-full hover:bg-muted transition-colors duration-200"
                                >
                                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <motion.div
                                key={tag}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTagClick(tag);
                                }}
                              >
                                <span 
                                  className={cn(
                                    "px-3 py-1 bg-muted text-xs rounded-full cursor-pointer transition-all duration-200",
                                    "border hover:border-primary/60",
                                    selectedTag === tag 
                                      ? "border-primary/60 text-foreground" 
                                      : "border-border/40 text-muted-foreground"
                                  )}
                                >
                                  {tag}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}