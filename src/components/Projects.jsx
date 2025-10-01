import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React and TailwindCSS.",
    img: "https://via.placeholder.com/400x250.png?text=Project+1",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce frontend with product filtering and cart.",
    img: "https://via.placeholder.com/400x250.png?text=Project+2",
    link: "#",
  },
  {
    title: "To-Do App",
    description: "A simple yet powerful task management app with localStorage.",
    img: "https://via.placeholder.com/400x250.png?text=Project+3",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-gray-300 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#39FF14] drop-shadow-[0_0_8px_#39FF14] mb-12"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-[0_0_15px_#39FF14] transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#39FF14] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 rounded-md bg-[#39FF14] text-black font-bold hover:scale-105 hover:shadow-[0_0_10px_#39FF14] transition-transform"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
