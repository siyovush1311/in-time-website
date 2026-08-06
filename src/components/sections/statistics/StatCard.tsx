"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  title: string;
  description: string;
};

export default function StatCard({
  icon: Icon,
  value,
  suffix,
  title,
  description,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
          <Icon size={32} />
        </div>

        {/* Number */}
        <div className="mb-3 text-5xl font-bold tracking-tight text-white">
          <CountUp end={value} duration={2.5} enableScrollSpy />
          {suffix}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}