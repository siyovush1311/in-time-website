"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  icon?: ReactNode;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  icon,
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "mb-16",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={clsx(
            "inline-flex items-center gap-2 rounded-full",
            "border border-cyan-400/20",
            "bg-cyan-400/10",
            "backdrop-blur-xl",
            "px-4 py-2",
            "text-sm font-medium tracking-wide",
            "text-cyan-300"
          )}
        >
          {icon}

          <span>{badge}</span>
        </div>
      )}

      <h2
        className={clsx(
          "mt-6",
          "text-4xl md:text-5xl",
          "font-bold",
          "tracking-tight",
          "leading-tight",
          "text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "mt-6",
            "text-lg",
            "leading-8",
            "text-slate-400",
            isCenter && "mx-auto max-w-3xl",
            !isCenter && "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}