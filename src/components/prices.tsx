"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-700/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-600/40 rounded-full blur-[120px]" />
      
      {/* Header Section */}
      <motion.header
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h1 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
      Neon AI Pricing
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the best plan to power your AI-driven transformation.
        </p>
      </motion.header>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {["Starter", "Elite", "Titan"].map((plan, index) => (
          <motion.div
            key={index}
            className="relative p-10 rounded-2xl shadow-lg border border-blue-500/40 bg-gray-900/50 backdrop-blur-xl overflow-hidden transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-3xl"></div>
            <h2 className="relative text-3xl font-bold text-blue-300">{plan}</h2>
            <p className="relative mt-2 text-gray-400">
              {plan === "Starter" && "Begin your AI adventure with essential features."}
              {plan === "Elite" && "Upgrade to superior AI intelligence and performance."}
              {plan === "Titan" && "Unleash the full potential of AI for enterprise-scale innovation."}
            </p>
            <p className="relative mt-4 text-5xl font-bold text-white">
              {plan === "Starter" ? "$0" : plan === "Elite" ? "$49" : "Custom"}
              <span className="text-lg text-gray-400">{plan !== "Titan" ? "/month" : ""}</span>
            </p>
            <ul className="relative mt-6 space-y-3 text-gray-300">
              {plan === "Starter" && (
                <>
                  <li>✓ Access to Core AI Assistant</li>
                  <li>✓ Basic Query Limit</li>
                  <li>✓ Standard Support</li>
                </>
              )}
              {plan === "Elite" && (
                <>
                  <li>✓ Advanced AI Features</li>
                  <li>✓ Unlimited Queries</li>
                  <li>✓ Priority Assistance</li>
                  <li>✓ Custom AI Algorithms</li>
                </>
              )}
              {plan === "Titan" && (
                <>
                  <li>✓ AI-Powered Business Solutions</li>
                  <li>✓ Custom Integrations & APIs</li>
                  <li>✓ 24/7 VIP Support</li>
                  <li>✓ Scalable Enterprise Deployment</li>
                </>
              )}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              {plan === "Starter" ? "Get Started" : plan === "Elite" ? "Upgrade Now" : "Contact Us"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;