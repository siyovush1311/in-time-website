"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export default function GlowBorder({
  children,
  className,
  active = false,
}: GlowBorderProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        className
      )}
    >
      {/* Glow */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      >
        <div
          className="
            absolute
            -top-24
            left-1/2
            h-56
            w-56
            -translate-x-1/2
            rounded-full
            bg-cyan-400/15
            blur-3xl
          "
        />
      </div>

      {/* Gradient Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          p-px
        "
      >
        <div
          className={clsx(
            "h-full w-full rounded-3xl bg-gradient-to-br transition-opacity duration-500",
            active
              ? "from-cyan-400/50 via-transparent to-cyan-300/20 opacity-100"
              : "from-cyan-400/40 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100"
          )}
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}