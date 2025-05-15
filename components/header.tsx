"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(true);
  const { scrollY } = useScroll();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <header
      className={`sticky ${
        isScrolled ? "top-3 border rounded-lg max-w-6xl mx-auto" : "top-0"
      } px-10 z-50 w-full backdrop-blur bg-background/60 duration-300 easeInOut`}
    >
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full p-1 bg-primary text-white shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-lg font-bold px-2 py-1"
            >
              ak
            </motion.div>
          </motion.div>
        </Link>

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
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            whileTap={{ rotate: 90, scale: 0.9 }}
          >
            {theme === "dark" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.button>

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
              {navItems.map((item) => (
                <motion.a
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
