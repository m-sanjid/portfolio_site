"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { CheckCircle } from "lucide-react";

const traits = [
  "Problem Solver",
  "Clean Code Advocate",
  "User-Focused Design",
  "Continuous Learner",
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
];

const stats = [
  {
    name: "Projects Completed",
    value: "100+",
  },
  {
    name: "Years of Experience",
    value: "5+",
  },
  {
    name: "GitHub Stars",
    value: "10K+",
  },
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pb-20">
      <div className="space-y-16">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Learn more about my background, what I do, and what drives me as a
            developer.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image + Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="relative border-4 h-[400px] max-w-[400px] rounded-xl overflow-hidden border-secondary hover:border-primary transition-all duration-300 shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer working"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  whileHover={{
                    scale: 1.05,
                    style: { boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-5 py-4 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-200"
                >
                  <p className="font-bold text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm opacity-90">{stat.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio + Traits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Full Stack Developer based in San Francisco, CA
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              I’m a developer with over 5 years of experience building web
              applications that are intuitive, performant, and user-centric. My
              love for technology began at age 15 and has since evolved into a
              career focused on solving real-world problems.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I graduated with a Computer Science degree from Stanford and have
              worked at startups and enterprises alike, delivering impactful
              features and robust systems in cross-functional teams.
            </p>

            {/* Traits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {traits.map((trait) => (
                <div key={trait} className="group flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary transition-transform duration-200" />
                  <span className="text-muted-foreground group-hover:translate-x-2 group-hover:text-primary transition-all duration-200">
                    {trait}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h4 className="text-xl font-semibold text-foreground">Tech Stack</h4>
          <div
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-wrap justify-center gap-3 text-sm md:text-base"
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="relative bg-muted text-foreground px-3 py-1.5 rounded-full border border-border hover:border-primary transition-all duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {tech}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="hover"
                    className="absolute inset-0 z-20 bg-black/10 dark:bg-white/10 h-full w-full rounded-full"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
