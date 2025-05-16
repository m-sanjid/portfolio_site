import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="rounded-full p-1 bg-primary text-secondary shadow-lg"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-sm font-semibold p-1"
        >
          JW
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Logo;
