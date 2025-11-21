"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

export default function HeroSection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
      } else {
        alert("Analysis failed.");
      }
    } catch (err) {
      console.error("Analyze error:", err);
    }
  };

  return (
   <section
      className="relative w-full min-h-screen text-gray-900 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Red And Black ai.jpeg')", // your honeycomb texture
      }}
    >
      {/* Soft Depth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-red-900/30 mix-blend-multiply"></div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Background Glowing Blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-[400px] h-[350px] bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[350px] bg-red-300 rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-screen">
        
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug">
            Transform Your Fitness with{" "}
            <span className="text-red-400">BodyFit AI</span>
          </h1>

          <p className="text-gray-200 mb-6 text-lg sm:text-xl lg:text-2xl font-light max-w-lg">
            Upload your gymwear image and let our AI help you plan your fitness
            goals and diet — effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mb-6">
            <Link href="/login" className="w-40">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-gray-100/80 to-white/80 border border-gray-300 hover:from-gray-200 hover:to-gray-100 transition text-sm font-medium shadow text-gray-900 backdrop-blur"
              >
                📤 Upload Image
              </motion.div>
            </Link>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAnalyze}
              className="w-40 text-center px-5 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition text-sm font-medium shadow-lg"
            >
              🚀 Analyze Now
            </motion.button>
          </div>

          {/* AI RESULT DISPLAY */}
          {result && (
            <div className="bg-white/70 backdrop-blur border border-gray-200 p-4 rounded-lg shadow-sm text-sm mb-5 space-y-1 text-gray-900">
              <p>
                <strong>🏋️ Weight Goal:</strong> {result.weightGoal}
              </p>
              <p>
                <strong>💪 Body Type:</strong> {result.bodyType}
              </p>
              <p>
                <strong>📊 BMI:</strong> {result.estimatedBMI}
              </p>
              <p>
                <strong>🥗 Diet Plan:</strong> {result.dietPlan}
              </p>
            </div>
          )}

          {/* Key Features */}
          <ul className="text-gray-200 space-y-1 font-serif text-lg sm:text-xl">
            <li>✅ AI-generated weight goals</li>
            <li>✅ Personalized diet plan</li>
            <li>✅ Smart visual insights</li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE: Image */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="flex justify-center md:justify-end"
        >
          <div className="px-6 py-12 flex justify-end">
            <Image
              src="/xyzz.png"
              alt="Fitness AI Model"
              width={500}
              height={500}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
