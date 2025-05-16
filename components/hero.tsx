"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "motion/react";
import { Download, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Name from "./name";
import SocialShare from "./social-share";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const positions = [
    "Software Engineer",
    "Design Engineer",
    "Fullstack Developer",
    "UI/UX Enthusiast",
  ];
  const [currentPosition, setCurrentPosition] = useState(0);
  const controls = useAnimation();
  const imageControls = useAnimation();

  // Ref for the scroll indicator
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Start the position rotation
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [positions.length]);

  // Pulse animation for the scroll indicator
  useEffect(() => {
    const pulseAnimation = async () => {
      await controls.start({
        y: [0, 10, 0],
        transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
      });
    };

    pulseAnimation();
  }, [controls]);

  // Floating animation for profile image
  useEffect(() => {
    const floatAnimation = async () => {
      await imageControls.start({
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      });
    };

    floatAnimation();
  }, [imageControls]);

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection =
      document.querySelector("#about") || document.querySelector("#projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-4 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm sm:text-base"
            >
              <span className="inline-block animate-pulse mr-2">👋</span> Hello,
              I&apos;m
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <Name isHero={true} />
              </motion.div>
              <div className="h-10 sm:h-12 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPosition}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
                  >
                    {positions[currentPosition]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              className="text-muted-foreground max-w-lg text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              I craft elegant, user-friendly web applications with modern
              technologies. Passionate about creating seamless digital
              experiences that solve real-world problems and bring ideas to
              life.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden w-full sm:w-auto"
                asChild
              >
                <Link href="#contact">
                  <span className="relative z-10 flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden w-full sm:w-auto"
                asChild
              >
                <a href="/resume.pdf" download>
                  <span className="relative z-10 flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1 duration-300" />
                    Download Resume
                  </span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>

            <SocialShare />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative mx-auto lg:ml-auto mt-8 lg:mt-0"
          >
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
              animate={imageControls}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/hero.jpeg"
                alt="John Wick"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3 sm:p-4 border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="font-medium flex items-center text-sm sm:text-base">
                <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                5+ Years Experience
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-2 -left-2 bg-background rounded-lg shadow-lg p-2 sm:p-3 border border-border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-medium text-xs sm:text-sm flex items-center">
                Available for work
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        ref={scrollRef}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={controls}
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-muted-foreground mb-2">
            Scroll Down
          </span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
      </motion.div>
    </section>
  );
}