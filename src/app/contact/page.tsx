"use client";

import { motion } from "framer-motion";
import { useState, FormEvent, ChangeEvent } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const dataToSend = {
      ...formData,
      access_key: "915adfad-feb9-457b-85ff-064fcee681c7",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({ title: "Error!", text: "Message sending failed.", icon: "error" });
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-blue-700 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
      Get in Touch
      </h2>
      <p className="text-lg text-gray-300 mt-4 max-w-3xl text-center">
        {`We’re here to help! Send us a message, and we’ll get in touch with you shortly.`}
      </p>
      
      <motion.form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-3xl bg-gray-900/50 border border-blue-500/30 rounded-2xl p-10 shadow-xl backdrop-blur-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-4 bg-gray-800/70 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md" placeholder="Your Name" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-4 bg-gray-800/70 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md" placeholder="Your Email" />
        </div>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-4 bg-gray-800/70 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md mt-6" placeholder="Subject" />
        <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-4 bg-gray-800/70 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-36 resize-none shadow-md mt-6" placeholder="Your Message"></textarea>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-blue-700 to-pink-500 text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}