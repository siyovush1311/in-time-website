"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface IconBoxProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

export default function IconBox({
  children,
  className,
  size = "md",
  variant = "primary",
}: IconBoxProps) {
  const sizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-14 w-14 text-xl",
    lg: "h-16 w-16 text-2xl",
  };

  const variants = {
    primary:
      "bg-cyan-500/10 border-cyan-400/20 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-300/40 group-hover:text-cyan-200",

    secondary:
      "bg-white/5 border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20",
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "rounded-2xl",
        "border",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "shadow-lg",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}