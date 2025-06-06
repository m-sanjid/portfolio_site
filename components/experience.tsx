"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { experiences } from "@/lib/constants";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-8 max-w-5xl mx-auto"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-muted mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the pleasure to
            work with.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="bg-accent dark:bg-[#111111] rounded-lg p-4 sm:p-6 border transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <h4 className="text-base sm:text-lg font-medium text-muted-foreground transition-colors duration-300">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground gap-2 sm:gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-xs sm:text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-xs sm:text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.2 * index + 0.1 * i,
                      }}
                      className="flex items-start text-sm sm:text-base text-muted-foreground group-hover:text-neutral-600 group-hover:dark:text-neutral-300 transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
