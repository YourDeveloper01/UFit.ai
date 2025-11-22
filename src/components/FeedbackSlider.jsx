"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  {
    name: "Hulk",
    role: "Fitness Enthusiast",
    feedback:
      "BodyFit AI ne mere liye perfect diet plan banaya! 2 mahine me 6kg kam ho gaya.",
    img: "/lockpic.jpg",
  },
  {
    name: "Ritesh kumar",
    role: "Yoga Instructor",
    feedback:
      "AI analysis kaafi accurate hai. BMI aur diet suggestions bahut helpful rahe.",
    img: "/ritu.jpg",
  },
  {
    name: "Raj singh",
    role: "Gym Trainer",
    feedback:
      "App ka interface simple aur fast hai. Clients ke liye recommended!",
    img: "/raj.jpg",
  },
  {
    name: "Abhishek",
    role: "Working Professional",
    feedback: "Ghar baithe accurate fitness plan mil gaya. Highly recommended!",
    img: "/abhi.jpg",
  },
  {
    name: "Vicky",
    role: "personal trainer",
    feedback:
      "Mere weight gain ke liye perfect meal plan suggest kiya. Result visible hai.",
    img: "/vicky.jpg",
  },
];

export default function FeedbackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Users Feedback
      </h2>
      <div className="max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-300 to-white border-gray-200 rounded-2xl p-8 text-center shadow-lg">
            <img
              src={feedbacks[currentIndex].img}
              alt={feedbacks[currentIndex].name}
              className="w-20 h-20 mx-auto rounded-full border-2 border-pink-400 shadow-md mb-4"/>
            <p className="text-gray-600 italic mb-4 text-lg leading-relaxed">
              "{feedbacks[currentIndex].feedback}"
            </p>
            <h4 className="font-semibold text-gray-800 text-xl">
              {feedbacks[currentIndex].name}
            </h4>
            <span className="text-pink-500 text-sm">
              {feedbacks[currentIndex].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {feedbacks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-red-500 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
