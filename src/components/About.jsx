import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black px-6 py-20 text-gray-300"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image / Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="profile.jpg"
            alt="Profile"
            className="rounded-2xl border-2 border-[#39FF14] shadow-[0_0_20px_#39FF14] w-72 md:w-80 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#39FF14] drop-shadow-[0_0_8px_#39FF14] mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-[#39FF14] font-semibold">Adrees Ahmad</span>, a passionate{" "}
            <span className="text-[#39FF14]">Frontend Developer</span> with a love
            for creating sleek, modern, and responsive user interfaces.
            I specialize in <span className="text-[#39FF14]">React.js</span> and{" "}
            <span className="text-[#39FF14]">TailwindCSS</span>, and I enjoy
            bringing designs to life with smooth animations and glowing effects.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-lg bg-[#39FF14] text-black font-bold shadow-lg hover:scale-105 hover:shadow-[0_0_15px_#39FF14] transition-transform"
          >
            View My Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
