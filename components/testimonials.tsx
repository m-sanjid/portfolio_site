"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef(null);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: `-${testimonials.length * 25}%`,
        transition: {
          duration: testimonials.length * (isPaused ? 10 : 5),
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAnimation();

    return () => controls.stop();
  }, [isPaused, controls]);

  return (
    <section className="py-12 w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center"
        >
          People love my work
        </motion.h2>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="h-full top-0 left-0 w-10 bg-gradient-to-r from-secondary/60 via-secondary/20 to-transparent absolute z-10" />
          <div className="h-full top-0 right-0 w-10 bg-gradient-to-l from-secondary/60 via-secondary/20 to-transparent absolute z-10" />
          <div className="flex">
            <TestimonialStrip isPaused={isPaused} />
            <TestimonialStrip isPaused={isPaused} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialStrip({ isPaused }: { isPaused: boolean }) {
  return (
    <motion.div
      className="flex mx-2 gap-4"
      animate={{
        x: "-100%",
      }}
      transition={{
        ease: "linear",
        duration: isPaused ? 30 : 15,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className="w-[280px] sm:w-[22rem] bg-secondary/20 backdrop-blur-md rounded-xl shadow-sm p-4 sm:p-6 border flex flex-col justify-between"
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
            {testimonial.text}
          </p>
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-muted/80 mr-3 flex items-center justify-center text-xs text-muted-foreground font-medium">
              {testimonial.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                {testimonial.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
