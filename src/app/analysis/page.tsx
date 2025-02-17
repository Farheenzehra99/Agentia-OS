"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const AIInsights = () => {
  return (
    <div
      id="ai-insights"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden px-6 py-32"
    >
      {/* Animated Title Section */}
      <motion.h2 
        className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI Performance Metrics
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Explore real-time AI usage trends and performance statistics with an interactive visualization.
      </motion.p>

      {/* Line Chart Container */}
      <motion.div 
        className="mt-10 w-full max-w-6xl h-[500px] bg-gray-800/40 border border-cyan-500/30 rounded-xl shadow-2xl p-6 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B0082" />
            <XAxis dataKey="month" stroke="#22D3EE" tick={{ fill: "#22D3EE" }} tickSize={10} />
            <YAxis stroke="#22D3EE" tick={{ fill: "#22D3EE" }} domain={[0, 7000]} />
            <Tooltip contentStyle={{ backgroundColor: "#1F1B24", borderColor: "#22D3EE" }} />
            <Line type="monotone" dataKey="groq" stroke="#00FF7F" strokeWidth={4} dot={{ r: 6, fill: "#00FF7F" }} />
            <Line type="monotone" dataKey="openAI" stroke="#FF1493" strokeWidth={4} dot={{ r: 6, fill: "#FF1493" }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default AIInsights;

const chartData = [
  { month: "Jan", groq: 900, openAI: 700 },
  { month: "Feb", groq: 1600, openAI: 1200 },
  { month: "Mar", groq: 2300, openAI: 1900 },
  { month: "Apr", groq: 3100, openAI: 2500 },
  { month: "May", groq: 4200, openAI: 3300 },
  { month: "Jun", groq: 5400, openAI: 4000 },
  { month: "Jul", groq: 6200, openAI: 5000 },
];