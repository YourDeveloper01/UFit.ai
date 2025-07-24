"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Transform Your Fitness with{" "}
            <span className="text-red-600">BodyFit AI</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Upload your gymwear image and let AI analyze your weight & diet
            goals.
          </p>
          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button className="bg-white border border-gray-400 px-5 py-2 rounded-lg font-medium">
              Upload Image
            </button>
            <button className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium">
              Analyze Now
            </button>
          </motion.div>
          <motion.ul
            className="text-gray-700 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <li>• AI-based weight goal</li>
            <li>• Personalized diet plan</li>
          </motion.ul>
        </motion.div>

        {/* Right Image with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/xyz.png"
            alt="AI Fitness Character"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
