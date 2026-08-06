"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OrbitItemProps {
  icon: LucideIcon;
  label: string;
}

export default function OrbitItem({
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
        y: -6,
      }}
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,180,255,0.08)]
        transition-all
        duration-300
        hover:border-cyan-400/50
        hover:bg-white/10
        hover:shadow-[0_0_35px_rgba(0,200,255,0.25)]
      "
    >
      <Icon
        size={18}
        className="text-cyan-400"
      />

      <span className="whitespace-nowrap text-sm font-medium text-white">
        {label}
      </span>
    </motion.div>
  );
}