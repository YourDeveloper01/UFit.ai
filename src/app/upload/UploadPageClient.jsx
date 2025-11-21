// app/upload/UploadPageClient.jsx
"use client";

import ImageUpload from "@/app/components/ImageUpload";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UploadPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 relative overflow-hidden flex flex-col items-center justify-center px-6 py-16">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full filter blur-3xl opacity-40 animate-pulse z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-red-300 rounded-full filter blur-2xl opacity-30 animate-pulse z-0"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* Video Section */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white/30 backdrop-blur-sm">
            <video
              src="/body.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white/40 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-200"
        >
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
            Upload Your Gymwear Image
          </h1>
          <ImageUpload />
        </motion.div>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 relative z-10"
      >
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
          >
            ← Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
