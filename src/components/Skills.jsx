import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Git & GitHub",
    "UI/UX Design"
  ];

  return (
    <section id="skills" className="relative py-20 bg-black text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[rgba(57,255,20,0.12)] blur-[200px] rounded-full mt-20" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-[#39FF14] drop-shadow-[0_0_15px_#39FF14]"
      >
        Skills
      </motion.h2>

      <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-6 py-4 bg-black border border-[#39FF14] rounded-lg shadow-[0_0_20px_#39FF14] text-[#39FF14] font-semibold hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
