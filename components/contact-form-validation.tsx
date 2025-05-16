"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion, AnimatePresence } from "motion/react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactFormValidation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formProgress, setFormProgress] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const formValues = form.watch();

  useEffect(() => {
    const { name, email, subject, message } = formValues;
    const fields = [
      { value: name, isValid: name.length >= 2 },
      { value: email, isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) },
      { value: subject, isValid: subject.length >= 5 },
      { value: message, isValid: message.length >= 10 },
    ];

    const filledFields = fields.filter((field) => field.isValid).length;
    setFormProgress((filledFields / fields.length) * 100);
  }, [formValues]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Simulate form submission
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 95% chance of success for demo purposes
          if (Math.random() > 0.05) {
            resolve(true);
          } else {
            reject(new Error("Network error"));
          }
        }, 1500);
      });

      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      form.reset();
      setFormProgress(0);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmitError(true);

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  // Input field animation variants
  const inputVariants = {
    focused: {
      scale: 1.01,
      boxShadow: "0 0 0 2px rgba(var(--primary-rgb), 0.25)",
      transition: { duration: 0.2 },
    },
    unfocused: {
      scale: 1,
      boxShadow: "none",
      transition: { duration: 0.2 },
    },
  };

  // Alert animation variants
  const alertVariants = {
    hidden: { opacity: 0, y: 20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Form progress indicator */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${formProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium flex items-center">
                  Your Name
                  {form.formState.dirtyFields.name &&
                    !form.formState.errors.name && (
                      <CheckCircle className="ml-2 h-3 w-3 text-green-500" />
                    )}
                </FormLabel>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "name" ? "focused" : "unfocused"}
                >
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="transition-all duration-200 focus:border-primary"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormControl>
                </motion.div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium flex items-center">
                  Your Email
                  {form.formState.dirtyFields.email &&
                    !form.formState.errors.email && (
                      <CheckCircle className="ml-2 h-3 w-3 text-green-500" />
                    )}
                </FormLabel>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "email" ? "focused" : "unfocused"}
                >
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      className="transition-all duration-200 focus:border-primary"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormControl>
                </motion.div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center">
                Subject
                {form.formState.dirtyFields.subject &&
                  !form.formState.errors.subject && (
                    <CheckCircle className="ml-2 h-3 w-3 text-green-500" />
                  )}
              </FormLabel>
              <motion.div
                variants={inputVariants}
                animate={focusedField === "subject" ? "focused" : "unfocused"}
              >
                <FormControl>
                  <Input
                    placeholder="Project Inquiry"
                    {...field}
                    className="transition-all duration-200 focus:border-primary"
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                  />
                </FormControl>
              </motion.div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium flex items-center">
                Message
                {form.formState.dirtyFields.message &&
                  !form.formState.errors.message && (
                    <CheckCircle className="ml-2 h-3 w-3 text-green-500" />
                  )}
              </FormLabel>
              <motion.div
                variants={inputVariants}
                animate={focusedField === "message" ? "focused" : "unfocused"}
              >
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    {...field}
                    className="resize-none transition-all duration-200 focus:border-primary"
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </FormControl>
              </motion.div>
              <FormMessage />
              {form.formState.dirtyFields.message && field.value && (
                <div className="flex justify-end mt-1">
                  <span
                    className={`text-xs ${
                      field.value.length < 10
                        ? "text-red-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {field.value.length} / 10+ characters
                  </span>
                </div>
              )}
            </FormItem>
          )}
        />

        <motion.div
          whileHover={{ scale: formProgress === 100 ? 1.02 : 1 }}
          whileTap={{ scale: formProgress === 100 ? 0.98 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            type="submit"
            className={`w-full relative overflow-hidden ${
              formProgress === 100
                ? "bg-primary hover:bg-primary/90"
                : "bg-primary/70"
            }`}
            disabled={isSubmitting || formProgress !== 100}
          >
            <span className="relative z-10 flex items-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${formProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>

        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md flex justify-between items-center"
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setSubmitSuccess(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {submitError && (
            <motion.div
              className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md flex justify-between items-center"
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center">
                <X className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Something went wrong. Please try again later.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setSubmitError(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Form>
  );
}
