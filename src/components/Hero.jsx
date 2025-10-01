import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[rgba(57,255,20,0.12)] blur-[200px] rounded-full mt-20" />
      </div>

      {/* Left Side: Text */}
      <div className="flex-1 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl pt-16 sm:pt-20 md:pt-28 
               font-extrabold text-[#39FF14] 
               drop-shadow-[0_0_10px_#39FF14]"
        >
          Hi, I’m Adrees Ahmad
        </motion.h1>

        <motion.div
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <ReactTyped
            strings={["Frontend Developer", "React Enthusiast", "UI/UX Lover"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-neon text-black font-bold shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          View My Work
        </motion.a>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-8 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img
          src="profile.jpg"
          alt="Profile"
          className="rounded-full border-2 border-[#39FF14] shadow-[0_0_20px_#39FF14] w-72 md:w-80 object-cover"
        />
      </motion.div>
    </section>
  );
}
