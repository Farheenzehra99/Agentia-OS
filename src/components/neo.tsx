"use client";

import { motion } from "framer-motion";
import { FaRobot, FaShieldAlt, FaNetworkWired, FaCogs } from "react-icons/fa";
import { useEffect, useState } from "react";

export function AgentiaOs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    { icon: FaRobot, title: "Autonomous AI", description: "AI that learns, adapts, and evolves for superior automation." },
    { icon: FaShieldAlt, title: "AI Security Core", description: "Advanced security layers to safeguard AI interactions." },
    { icon: FaNetworkWired, title: "AI-Powered Connectivity", description: "Seamless integration across networks and systems." },
    { icon: FaCogs, title: "Smart AI Processing", description: "Optimized AI processing for faster and smarter decisions." },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 191, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 60%)`,
        }}
      />

      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl py-12"
      >
      <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
      Welcome to <span>Agentia OS</span>
        </h2>
        <p className="text-gray-300 text-lg mt-6">
          Experience the next level of AI intelligence and automation.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 border border-cyan-500/30 rounded-xl shadow-xl hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-300">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}