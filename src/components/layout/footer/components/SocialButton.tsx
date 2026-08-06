"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SocialLink } from "../types";

interface SocialButtonProps {
  social: SocialLink;
}

export default function SocialButton({
  social,
}: SocialButtonProps) {
  const Icon = social.icon;

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <Link
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          h-16
          min-w-[255px]
          items-center
          justify-between
          overflow-hidden
          rounded-full
          border
          border-white/10
          bg-white/[5]
          px-7
          backdrop-blur-3xl
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-white/[5]
        "
      >
        {/* Cyan Glow */}
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
              h-44
              w-44
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/15
              blur-3xl
            "
          />
        </div>

        {/* Glass Highlight */}
        <div
          className="
            absolute
            left-4
            right-4
            top-1
            h-5
            rounded-full
            bg-gradient-to-b
            from-white/15
            to-transparent
          "
        />

        <div className="relative z-10 flex items-center gap-4">
          <Icon
            size={22}
            className="
              text-white/80
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:text-cyan-400
            "
          />

          <span
            className="
              text-[17px]
              font-medium
              tracking-wide
              text-white/80
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {social.name}
          </span>
        </div>

        {/* Arrow */}
        <ArrowUpRight
          size={18}
          className="
            relative
            z-10
            translate-x-2
            opacity-0
            text-cyan-400
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        />
      </Link>
    </motion.div>
  );
}