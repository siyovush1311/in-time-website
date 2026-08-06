"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

import CTAContent from "./CTAContent";
import CTAFeatures from "./CTAFeatures";

export default function CTA() {
  return (
    <Section id="cta">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border border-cyan-400/15
          bg-gradient-to-br
          from-slate-900/95
          via-slate-900/85
          to-slate-950/95
          p-8
          shadow-[0_0_80px_rgba(34,211,238,0.08)]
          backdrop-blur-2xl
          md:p-14
        "
      >
        {/* Background Glow */}
        <div className="absolute -top-36 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[180px]" />

        {/* Inner Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-b from-cyan-400/5 via-transparent to-transparent" />

        {/* Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

        {/* Border Highlight */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[35px] border border-white/5" />

        {/* Content */}
        <div className="relative z-10 space-y-14">
          <CTAContent />
          <CTAFeatures />
        </div>
      </motion.div>
    </Section>
  );
}