import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX - 15, y: e.clientY - 15 }); // keep glow centered
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      animate={{ left: position.x, top: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="pointer-events-none fixed w-[30px] h-[30px] rounded-full z-50
           bg-[radial-gradient(circle,rgba(57,255,20,0.8)_0%,rgba(57,255,20,0.2)_100%)]
           shadow-[0_0_30px_rgba(57,255,20,1)] mix-blend-screen"

      style={{ position: "fixed" }}
    />
  );
}
