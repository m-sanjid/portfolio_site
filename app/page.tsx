import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import FeaturedProjects from "@/components/featured-projects"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col bg-accent dark:bg-[#111111] max-w-5xl mx-auto border border-dashed overflow-hidden rounded-[12px]">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <BackToTop />
    </main>
  )
}

