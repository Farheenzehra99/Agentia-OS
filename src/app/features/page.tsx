"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

export default function NeuralCapabilities() {
  const capabilities = [
    {
      icon: FaBrain,
      title: "Autonomous Learning",
      description: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    },
    {
      icon: FaRobot,
      title: "Multi-Modal Intelligence",
      description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    },
    {
      icon: FaNetworkWired,
      title: "Cognitive Integration",
      description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    },
    {
      icon: FaShieldAlt,
      title: "Ethical AI Framework",
      description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    },
  ];

  return (
    <div id="neural-capabilities" className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-6 py-32 md:py-40 relative">
      
      {/* Background Neon Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] opacity-60 blur-2xl"></div>

      <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
        Neural Capabilities
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 mt-4 max-w-3xl text-center">
        Powered by next-generation artificial intelligence
      </p>

      {/* Capability Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl relative z-10">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900/50 border border-blue-600/40 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-xl flex flex-col items-center text-center hover:bg-gray-800/60 transition-all duration-300 relative"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 40px rgba(59, 130, 246, 0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 120 }}
          >
            {/* Neon glow effect behind icons */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>

            <capability.icon className="w-16 h-16 text-blue-600 drop-shadow-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-300">{capability.title}</h3>
            <p className="text-gray-300 mt-2">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}