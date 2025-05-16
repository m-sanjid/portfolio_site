"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import ThemeToggleButton from "./theme-toggle";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <header
      className={`sticky ${
        isScrolled ? "top-3 border rounded-lg max-w-5xl mx-auto" : "top-0 max-w-6xl mx-auto"
      } px-10 z-50 w-full backdrop-blur bg-background/60 duration-300 easeInOut`}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Desktop Nav */}
        <nav
          onMouseLeave={() => setHoveredIndex(null)}
          className="hidden md:flex space-x-6 items-center"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`gap-2 relative p-2 flex items-center z-10`}
            >
              <span className="text-sm">{item.label}</span>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hover"
                  className="absolute inset-0 z-20 bg-black/10 dark:bg-white/10 h-full w-full rounded-lg"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggleButton/>  

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-background/80 backdrop-blur-md border-t border-border/40"
          >
            <div className="flex flex-col space-y-2 px-4 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
