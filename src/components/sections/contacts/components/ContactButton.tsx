"use client";

import { ArrowRight } from "lucide-react";

interface ContactButtonProps {
  text: string;
}

export default function ContactButton({
  text,
}: ContactButtonProps) {
  return (
    <button
      className="
        group/button
        mt-auto
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-cyan-400
        font-semibold
        text-slate-950
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]
        active:scale-[0.98]
      "
    >
      {text}

      <ArrowRight
        size={18}
        className="
          transition-transform
          duration-300
          group-hover/button:translate-x-1
        "
      />
    </button>
  );
}