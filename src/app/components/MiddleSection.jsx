"use client";

import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MiddleSection() {
  return (
    <section className="w-full min-h-screen flex items-center px-6 py-16 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT: VIDEO */}
        <motion.div
          variants={fadeLeft}
          className="w-full overflow-hidden rounded-3xl shadow-2xl md:h-[500px] h-[300px]"
        >
          <video
            src="/ai.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT: TEXT INFO */}
        <motion.div variants={fadeRight}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Achieve Peak Fitness with AI-Driven Precision
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            <strong className="text-red-600">BodyFit AI</strong> is not just a
            fitness app — it’s a next-generation personal coach. Leveraging
            advanced body analysis and adaptive algorithms, we design fitness
            and nutrition programs that evolve with you, ensuring maximum
            efficiency and lasting results.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            What Sets BodyFit AI Apart
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
            <li>
              <strong className="text-red-600">Advanced Body Analysis:</strong>{" "}
              Instantly evaluates your body composition, muscle symmetry, and
              health metrics.
            </li>
            <li>
              <strong className="text-red-600">Precision Nutrition:</strong>{" "}
              AI-crafted meal plans based on calorie targets, taste preferences,
              and lifestyle.
            </li>
            <li>
              <strong className="text-red-600">Tailored Workouts:</strong>{" "}
              Custom training for fat loss, muscle gain, or holistic wellness.
            </li>
            <li>
              <strong className="text-red-600">
                Data-Driven Progress Tracking:
              </strong>{" "}
              Real-time insights into strength, endurance, and transformation
              milestones.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
