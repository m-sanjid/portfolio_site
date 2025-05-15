import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import ProjectCarousel from "@/components/project-carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <section className="w-full py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Check out some of my best work showcased in this interactive carousel.</p>
          <ProjectCarousel />
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <BackToTop />
    </main>
  )
}

