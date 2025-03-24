"use client";

import { motion } from "framer-motion";

export default function AnimateButton() {
  return (
    <div>
    
      <motion.div className="relative px-6 py-3 text-white font-semibold bg-black rounded-lg overflow-hidden">
        {/* Moving Border (Only One Side) */}
        <motion.div
          className="absolute top-0 left-0 h-full w-1 border-l-2 border-white py-7"
          initial={{ top: "100%" }} // Start from Bottom
          animate={{
            left: ["100%", "75%", "50%", "25%"], // Move Up & Reset
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 5, // Starts after 5 seconds
          }}
        />
        <span className="relative z-10">Never Give Up</span>
      </motion.div>
    </div>
  
  );
}
