"use client";

import { motion } from "framer-motion";
import { Lock, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-40"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        🔒 Privacy Policy
      </h1>
      <p className="text-gray-600 mb-6">
        Your privacy is important to us. Here’s how we handle your personal information.
      </p>

      <div className="space-y-6">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <Lock className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
          <p className="text-gray-500">
            We encrypt your personal data and never share it with unauthorized parties.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <Eye className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Transparency</h2>
          <p className="text-gray-500">
            You have full control over what information you share and can request deletion at any time.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow p-6 rounded-lg border hover:border-pink-500">
          <Database className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Data Usage</h2>
          <p className="text-gray-500">
            Your data is used only to improve our services and personalize your experience.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
