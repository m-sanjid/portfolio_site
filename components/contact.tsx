"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ContactFormValidation from "@/components/contact-form-validation";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "johnwick@example.com",
      href: "mailto:contact@sanjid.in",
      ariaLabel: "Send an email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      ariaLabel: "Call phone number",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, California",
      href: "https://maps.google.com/?q=San+Francisco,+California",
      ariaLabel: "View on map",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-background to-background/95"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
            Contact Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I&apos;d love to hear from you and explore how we can create something
            amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/40 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels.
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <a
                      href={method.href}
                      className="flex items-start group"
                      aria-label={method.ariaLabel}
                      target={
                        method.title === "Location" ? "_blank" : undefined
                      }
                      rel={
                        method.title === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-300"></div>
                        <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 relative z-10">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200 flex items-center">
                          {method.value}
                          <motion.span
                            className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                            whileHover={{ x: 3 }}
                          >
                            <ArrowRight className="h-3 w-3" />
                          </motion.span>
                        </p>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center mt-8 pt-6 border-t border-border/30"
              >
                <p className="text-xs text-muted-foreground text-center">
                  I typically respond to all messages within 24-48 hours during
                  business days.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 bg-card rounded-xl p-6 border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <ContactFormValidation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
