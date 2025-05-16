"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors"
      whileTap={{ rotate: 90, scale: 0.9 }}
    >
      {!mounted ? (
        <Sun className="h-5 w-5" />
      ) : theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggleButton;
