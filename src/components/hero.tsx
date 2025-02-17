"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-black text-center">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80" />
      <div className="absolute -top-32 left-1/4 w-80 h-80 bg-blue-700/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-700/30 rounded-full blur-[120px]" />

      {/* Animated Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Power Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 text-cyan-400 font-medium"
      >
        <Sparkles className="w-5 h-5" />
        <span>POWERED BY NEXT-GEN AI</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold text-white mt-4 leading-tight"
      >
        Elevate with{" "}
        <span className="bg-gradient-to-r from-pink-400 to-blue-600 text-transparent bg-clip-text">
          AI Innovation
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-lg text-gray-300 mt-4 max-w-lg"
      >
        Unlock the potential of AI to transform your business and automate your workflows.
      </motion.p>

      {/* AI Assistance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex items-center p-5 bg-gray-900/50 border border-blue-500/40 rounded-lg shadow-lg backdrop-blur-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black p-4 rounded-full"
        >
              <img
                src="/ai-icon.png"
                alt="Agentia AI"
                className="w-8 h-8 object-contain"
              />
        </motion.div>
        <p className="text-cyan-200 ml-4 text-lg font-medium">
          Let AI supercharge your productivity.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Get Started
      </motion.a>
    </section>
  );
}