"use client";

import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import Name from "./name";

const socialLinks = [
  {
    href: "https://github.com/m_sanjid",
    icon: <IconBrandGithub className="h-5 w-5" />,
  },
  {
    href: "https://linkedin.com/in/muhammedsanjid1",
    icon: <IconBrandLinkedin className="h-5 w-5" />,
  },
  {
    href: "https://x.com/dev_sanjid",
    icon: <IconBrandX className="h-5 w-5" />,
  },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <footer className="bg-muted/30 pt-6 px-6 md:pt-8 md:px-8 border border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 bg-accent dark:bg-[#111111] rounded-t-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Name isMain={true} />
            <p className="mt-4 text-muted-foreground">
              Building elegant solutions to complex problems with clean,
              efficient code.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">
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
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center"
                  >
                    {hoveredIndex === index && (
                      <motion.span
                        className="mr-1 h-4 rounded-r-lg bg-black w-1 text-primary"
                        layoutId="arrow"
                      ></motion.span>
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 py-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} <Name />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
