"use client";

import { FaDocker, FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

export default function Technologies() {
  const technologies = [
    { icon: FaDocker, title: "Docker", description: "Seamless containerized deployment for modern scalability." },
    { icon: SiFastapi, title: "FastAPI", description: "Blazing-fast, asynchronous backend for optimal performance." },
    { icon: FaPython, title: "Python", description: "Versatile and powerful scripting for AI-driven solutions." },
  ];

  return (
    <div
      id="technology"
      className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-6 py-32 md:py-40 relative"
    >
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] opacity-60 blur-2xl"></div>

      <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
        Technologies We Use
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 mt-4 max-w-3xl text-center">
        Powering Agentia World with cutting-edge tools to build AI-driven innovations.
      </p>

      {/* Technology Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
        {technologies.map((tech, index) => (
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

            <tech.icon className="w-16 h-16 text-blue-600 drop-shadow-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-300">{tech.title}</h3>
            <p className="text-gray-300 mt-2">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}