"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

// Function to count up
const useCountUp = (end, startWhenVisible) => {
  const [count, setCount] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    if (!startWhenVisible) return;
    const target = parseFloat(end.replace(/[^\d.-]/g, ""));
    const isK = /k/i.test(end);
    const isPlus = /\+/.test(end);

    const finalValue = isK ? target * 1000 : target;

    const step = (timestamp) => {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / 1500, 1); // 1.5s duration
      setCount(Math.floor(progress * finalValue));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, startWhenVisible]);

  // Format display
  let display = count.toLocaleString();
  if (/k/i.test(end)) display = (count / 1000).toFixed(1) + "K";
  if (/\+/.test(end)) display += "+";

  return display;
};

export default function Statistics() {
  const stats = [
    { value: "2.7K", label: "Users" },
    { value: "1.8K", label: "Subscribes" },
    { value: "3K", label: "Downloads" },
    { value: "4+", label: "Ratings" },
  ];

  return (
    <section className="relative text-gray-600 body-font bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-pink-300 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-red-300 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container px-5 mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full mb-12 text-center"
        >
          <h1 className="sm:text-4xl text-5xl font-extrabold title-font text-gray-900 tracking-wide">
            📊 Statistics
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-500 rounded mt-4"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center -m-4 text-center">
          {stats.map((stat, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
            const displayValue = useCountUp(stat.value, inView);

            return (
              <motion.div
                ref={ref}
                key={stat.label}
                className="p-4 sm:w-1/4 w-1/2"
                custom={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                    {displayValue}
                  </h2>
                  <p className="leading-relaxed text-gray-100 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
