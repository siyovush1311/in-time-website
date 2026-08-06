"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Briefcase } from "lucide-react";
import type { Testimonial } from "./testimonialsData";

interface Props {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 text-lg font-bold text-white shadow-lg">
          {testimonial.initials}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            {testimonial.name}
          </h3>

          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review */}
      <p className="relative mt-6 leading-7 text-slate-300">
        “{testimonial.review}”
      </p>

      {/* Footer */}
      <div className="relative mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-cyan-400" />
          <span>{testimonial.service}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-cyan-400" />
          <span>{testimonial.location}</span>
        </div>
      </div>
    </motion.div>
  );
}