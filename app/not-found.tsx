"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]  text-white">
      {/* Animated 404 Text */}
      <motion.h1
        className="text-9xl font-bold text-gray-800"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-xl mt-4 text-gray-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {/* Hover Effect Button */}
      <Link href="/">
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go Back Home
        </motion.button>
      </Link>

      {/* Floating Animated Elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-gray-900 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-10 top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-green-900 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-pink-500 rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
}
