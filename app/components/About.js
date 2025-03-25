"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingAnimation from "@/public/images/coding.json";
import AnimateButton from "./AnimateButton";
import { TypeAnimation } from "react-type-animation";
export default function About() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-900 text-white">
    <motion.div
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Lottie animationData={codingAnimation} loop />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-3xl font-extrabold mb-4 text-white">
          My Philosophy
        </h2>
        <p className="lg:text-lg text-md text-gray-300 leading-relaxed">
          I always strive to improve myself and push my boundaries. Whether
          it is learning a new programming language, refining my design skills,
          or exploring innovative tools, I am committed to staying ahead of
          the curve and delivering quality work.
        </p>
        <motion.p
          className="text-xl font-semibold mt-6 text-green-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         
         {/* Typing Effect */}
         <TypeAnimation
            sequence={[
              "Never Give Up!",
              2000, // Wait for 2 seconds
              "Keep Pushing Forward!",
              2000, // Wait for 2 seconds
            ]}
            speed={50} // Typing speed (in ms)
            repeat={Infinity} // Continuously repeat the animation
            className="lg:text-xl text-md lg:font-extrabold font-semibold py-5 text-green-400"
          />
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
  );
}
