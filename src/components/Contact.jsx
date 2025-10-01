import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-gray-300 px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#39FF14] drop-shadow-[0_0_8px_#39FF14] mb-12"
        >
          Get In Touch
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 bg-[#0a0a0a] p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-[0_0_20px_#39FF14] transition"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_#39FF14] transition"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_#39FF14] transition"
            />
          </div>
          <div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_#39FF14] transition"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 rounded-lg bg-[#39FF14] text-black font-bold shadow-lg hover:shadow-[0_0_15px_#39FF14] transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
