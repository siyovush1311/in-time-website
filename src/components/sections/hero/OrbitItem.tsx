"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OrbitItemProps {
  label: string;
  flag?: string;
  icon?: LucideIcon;
}

export default function OrbitItem({
  flag,
  icon: Icon,
  label,
}: OrbitItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      className="
        flex
        items-center
        gap-2.5
        rounded-full
        border
        border-cyan-400/20
        bg-[#071526]/85
        px-4
        py-2.5
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(0,190,255,0.10)]
        transition-all
        duration-300
        hover:border-cyan-400/60
        hover:bg-[#0a1d31]/95
        hover:shadow-[0_0_35px_rgba(0,210,255,0.28)]
      "
    >
      {flag ? (
        <span
          className="text-[20px] leading-none"
          role="img"
          aria-label={label}
        >
          {flag}
        </span>
      ) : Icon ? (
        <Icon
          size={18}
          className="text-cyan-400"
        />
      ) : null}

      <span className="whitespace-nowrap text-sm font-semibold text-white">
        {label}
      </span>
    </motion.div>
  );
}