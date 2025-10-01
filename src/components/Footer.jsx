import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold text-[#39FF14] drop-shadow-[0_0_6px_#39FF14] mb-6 md:mb-0"
        >
          Adrees Ahmad
        </motion.a>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Adrees Ahmad. All rights reserved.
      </motion.p>
    </footer>
  );
}
