"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import Name from "./name";
import SocialShare from "./social-share";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <footer className="bg-muted/30 pt-6 px-2 mx-auto md:pt-8 md:px-8 border border-dashed">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 bg-accent dark:bg-[#111111] rounded-t-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <Name isMain={true} />
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md">
              Building elegant solutions to complex problems with clean,
              efficient code.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-foreground">
              Quick Links
            </h3>
            <ul
              onMouseLeave={() => setHoveredIndex(null)}
              className="space-y-2"
            >
              {footerLinks.map((link, index) => (
                <li onMouseEnter={() => setHoveredIndex(index)} key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out flex items-center"
                  >
                    {hoveredIndex === index && (
                      <motion.span
                        className="mr-1 h-3 sm:h-4 rounded-r-lg bg-black dark:bg-white w-1 text-primary"
                        layoutId="arrow"
                      ></motion.span>
                    )}
                    <motion.span
                      className={`transition-all duration-200 ease-in-out ${
                        hoveredIndex === index ? "translate-x-1" : ""
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4 text-foreground">
              Connect
            </h3>
            <SocialShare />
          </div>
        </div>
        <div className="mt-8 py-6 sm:py-8 border-t">
          <p className="text-center text-sm sm:text-base text-muted-foreground">
            © {new Date().getFullYear()} <Name />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
