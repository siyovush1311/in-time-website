"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={scrollTop}
      aria-label="Наверх"
      className="
        group
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/[0.08]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-24
            w-24
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/20
            blur-3xl
          "
        />
      </div>

      <ArrowUp
        size={18}
        className="
          relative
          z-10
          text-white/80
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:text-cyan-400
        "
      />
    </motion.button>
  );
}