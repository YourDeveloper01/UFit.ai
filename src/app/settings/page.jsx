"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-40"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        ⚙️ Account Settings
      </h1>
      <p className="text-gray-600 mb-6">
        Customize your profile, enhance your security, and adjust preferences for a better experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-6 border hover:border-pink-500 transition"
        >
          <User className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <p className="text-gray-500 mb-4">
            Update your name, profile picture, and contact details.
          </p>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Edit Profile
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-6 border hover:border-pink-500 transition"
        >
          <Shield className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <p className="text-gray-500 mb-4">
            Change your password and enable two-factor authentication.
          </p>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Update Security
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-lg p-6 border hover:border-pink-500 transition"
        >
          <Bell className="w-8 h-8 text-pink-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-500 mb-4">
            Control how and when we send you updates.
          </p>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Manage Notifications
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
