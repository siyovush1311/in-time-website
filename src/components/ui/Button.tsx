"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]",

    secondary:
      "border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:border-cyan-400/40 hover:bg-white/10",

    ghost: "text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-2xl font-semibold",
        "transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}