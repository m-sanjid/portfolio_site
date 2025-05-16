"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/m_sanjid",
    label: "GitHub",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/muhammedsanjid1",
    label: "LinkedIn",
  },
  {
    icon: IconBrandX,
    href: "https://x.com/dev_sanjid",
    label: "Twitter",
  },
];

const SocialShare = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <motion.div
      className="flex space-x-5 pt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.7 }}
    >
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
          aria-label={social.label}
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-background border border-border p-3 rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
          >
            <social.icon className="h-5 w-5" />
          </motion.div>

          {/* Tooltip */}
          {isHovered === index && (
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 mt-2 text-xs text-muted-foreground bg-background/90 backdrop-blur border border-border shadow-md px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50"
            >
              {social.label}
            </motion.span>
          )}
        </Link>
      ))}
    </motion.div>
  );
};

export default SocialShare;
