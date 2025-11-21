"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-40"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        📜 Terms & Conditions
      </h1>
      <p className="text-gray-600 mb-6">
        Please read these terms carefully before using our services.
      </p>

      <div className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <FileText className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Agreement</h2>
          <p className="text-gray-500">
            By using our platform, you agree to follow these rules and policies.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <Users className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">User Conduct</h2>
          <p className="text-gray-500">
            Respect other members and do not engage in harmful activities.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <CheckCircle className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Compliance</h2>
          <p className="text-gray-500">
            You must comply with applicable laws and our platform’s guidelines.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
