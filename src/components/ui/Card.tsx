"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",

        glow &&
          "hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]",

        className
      )}
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -top-20
            left-1/2
            h-48
            w-48
            -translate-x-1/2
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />
      </div>

      {/* Top Gradient */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/60
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}