"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <GlowCard className="relative h-full p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,.18)]">

        {/* номер */}
        <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/30">
          {number}
        </div>

        {/* иконка */}
        <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20">
          <Icon className="text-cyan-400" size={30} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {description}
        </p>

      </GlowCard>
    </motion.div>
  );
}