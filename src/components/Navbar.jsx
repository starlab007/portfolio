import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-[#39FF14] drop-shadow-[0_0_5px_#39FF14]"
        >
          Adrees Ahmad
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#39FF14] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300"
        >
          <li>
            <a href="#hero" className="block hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="block hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14] transition duration-300">Contact</a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
