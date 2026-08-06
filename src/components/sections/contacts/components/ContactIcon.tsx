"use client";

import { LucideIcon } from "lucide-react";

interface ContactIconProps {
  icon: LucideIcon;
}

export default function ContactIcon({
  icon: Icon,
}: ContactIconProps) {
  return (
    <div className="flex justify-center">
      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300
          shadow-[0_0_45px_rgba(34,211,238,0.18)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:border-cyan-400/40
          group-hover:bg-cyan-500/15
          group-hover:shadow-[0_0_70px_rgba(34,211,238,0.35)]
        "
      >
        <Icon size={42} strokeWidth={1.8} />
      </div>
    </div>
  );
}