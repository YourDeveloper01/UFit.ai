"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const float = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
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
    <section style={{ height: '650px' }} className="relative flex items-center justify-center px-6 py-10 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900">


      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[800px] h-[500px] bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>
<div className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[500px] bg-red-300 rounded-full filter blur-2xl opacity-25 animate-pulse z-0"></div>


      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Transform Your Fitness with{" "}
            <span className="text-red-600">BodyFit AI</span>
          </h1>

          <p className="text-gray-700 mb-6 max-w-md">
            Upload your gymwear image and let our AI help you plan your fitness goals and diet—effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 border border-gray-300 hover:from-gray-300 hover:to-gray-200 transition text-sm font-medium shadow"
              >
                📤 Upload Image
              </motion.div>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleAnalyze}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition text-sm font-medium shadow"
            >
              🚀 Analyze Now
            </motion.button>
          </div>

          {/* AI RESULT DISPLAY */}
          {result && (
            <div className="bg-white/60 backdrop-blur-md border border-gray-200 p-4 rounded-lg shadow-md text-sm mb-6 max-w-md">
              <p><strong>🏋️ Weight Goal:</strong> {result.weightGoal}</p>
              <p><strong>💪 Body Type:</strong> {result.bodyType}</p>
              <p><strong>📊 BMI:</strong> {result.estimatedBMI}</p>
              <p><strong>🥗 Diet Plan:</strong> {result.dietPlan}</p>
            </div>
          )}

          {/* Key Features */}
          <ul className="text-gray-700 space-y-2 text-sm mt-4 max-w-md">
            <li>✅ AI-generated weight goals</li>
            <li>✅ Personalized diet plan</li>
            <li>✅ Smart visual insights</li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE: Floating Image */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="flex justify-center"
        >
          
            <Image
              src="/xyzz.png"
              alt="Fitness AI Model"
              width={360}
              height={360}
            />

          </motion.div>
        
      </div>
    </section>
  );
}
