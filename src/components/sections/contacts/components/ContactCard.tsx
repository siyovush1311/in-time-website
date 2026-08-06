"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ContactCardProps {
  children: ReactNode;
  href?: string;
}

export default function ContactCard({
  children,
  href,
}: ContactCardProps) {
  const card = (
    <motion.article
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-full
        min-h-[620px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/40
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>

      {/* Gradient Border */}
      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-br
          from-cyan-400/5
          via-transparent
          to-cyan-500/10
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Arrow */}
      <div
        className="
          absolute
          right-7
          top-7
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          transition-all
          duration-300
          group-hover:border-cyan-400/30
          group-hover:bg-cyan-500/10
        "
      >
        <ArrowUpRight
          className="
            h-5
            w-5
            text-slate-400
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:text-cyan-300
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col p-9">
        {children}
      </div>
    </motion.article>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="block h-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      {card}
    </Link>
  );
}