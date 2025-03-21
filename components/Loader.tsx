"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center "
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        {/* Outer Circle */}
        <motion.div
          className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Inner Circle */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Text */}
      </motion.div>
      <span className="absolute text-lg font-semibold">Loading...</span>
    </div>
  );
}
