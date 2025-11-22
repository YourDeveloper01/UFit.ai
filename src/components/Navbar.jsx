"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const profileRef = useRef(null);

  const email = "Login";

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-200 shadow-md fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/new gym-logo.png"
              alt="UFit Logo"
              width={140}
              height={90}
              className="h-[90px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-red-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setShowContact(true)}
              className="text-black hover:text-red-600 transition"
            >
              Contact
            </button>

{/* Profile Section */}
<div className="relative" ref={profileRef}>
  {email === "Login" ? (
    // 🔹 Agar login nahi hai to Signup button dikhayenge
    <button
      onClick={() => router.push("/signup")}
      className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:opacity-90 transition"
    >
      Signup
    </button>
  ) : (
    // 🔹 Agar login hai to Profile icon dikhayenge
    <button
      onClick={() => setShowProfile((prev) => !prev)}
      className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold flex items-center justify-center shadow-md hover:opacity-90 transition"
      title="Profile"
    >
      {email[0].toUpperCase()}
    </button>
  )}

  {/* Dropdown Menu agar login hai */}
  {showProfile && email !== "Login" && (
    <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 border-b">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center text-xl font-bold">
            {email[0].toUpperCase()}
          </div>
          <div>
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold text-gray-800 break-all">
              {email}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-2">
        {[
          { name: "Settings", path: "/settings" },
          { name: "Privacy", path: "/privacy" },
          { name: "Terms & Conditions", path: "/terms" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => {
              router.push(item.path);
              setShowProfile(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white transition font-medium"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="border-t">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 transition font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  )}
</div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="bg-white shadow-md md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-medium text-black hover:text-red-600"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setShowContact(true)}
                className="block text-lg font-medium text-black hover:text-red-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl relative p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-2xl transition-colors"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-8">
              Contact Information
            </h2>

            {/* Info List */}
            <div className="space-y-5 text-gray-700 text-lg">
              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:vikas8700@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  vikas8700@gmail.com
                </a>
              </p>
              <p>
                📱 <strong>Phone:</strong>{" "}
                <a href="tel:+9187xxxx2019" className="hover:text-blue-600">
                  +91 87xxxx2019
                </a>
              </p>
              <p>
                💼 <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/vikas-mandal-661aa82b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  linkedin.com/in/vikas-mandal
                </a>
              </p>
              <p>
                🖥 <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/YourDeveloper01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  github.com/YourDeveloper01
                </a>
              </p>
              <p>
                📍 <strong>Location:</strong> Noida, India
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:vikas8700@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
