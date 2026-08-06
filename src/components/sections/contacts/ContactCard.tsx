"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  href?: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  description,
  href,
}: ContactCardProps) {
  const Card = (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.28,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-full
        min-h-[250px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* Arrow */}
      <ArrowUpRight
        className="
          absolute
          right-6
          top-6
          h-5
          w-5
          text-slate-500
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:rotate-45
          group-hover:text-cyan-300
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
          text-cyan-300
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-cyan-500/20
        "
      >
        <Icon size={30} />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-7 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p
          className="
            mt-3
            break-words
            text-[17px]
            font-semibold
            leading-7
            text-cyan-300
          "
        >
          {value}
        </p>

        <p
          className="
            mt-auto
            pt-5
            text-[15px]
            leading-7
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        className="block h-full"
      >
        {Card}
      </Link>
    );
  }

  return Card;
}