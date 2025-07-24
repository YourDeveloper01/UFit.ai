import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UFit AI Analysis",
  description: "Upload your gymwear image and let AI analyze your weight & diet goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <Navbar />
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} UFit. All rights reserved <span className="text-red-600">|</span>  Created with ❤️ by <span className="test-black font-semibold">Vikash Mandal</span>
        </footer>
      </body>
    </html>
  );
}
