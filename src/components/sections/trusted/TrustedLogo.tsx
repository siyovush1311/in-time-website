"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import { Partner } from "./partners";

interface TrustedLogoProps {
  partner: Partner;
}

export default function TrustedLogo({ partner }: TrustedLogoProps) {
  const imageClass =
    partner.name === "Agentstva.TJ"
      ? "h-16 w-auto max-w-[190px]"
      : partner.name === "TGEM"
      ? "h-16 w-auto max-w-[200px]"
      : "h-14 w-auto max-w-[180px]";

  return (
    <a
      href={partner.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block flex-shrink-0"
    >
      <Card
        className="
          relative
          flex
          h-32
          w-64
          items-center
          justify-center
          overflow-hidden
          rounded-[28px]
          border
          border-white/20
          bg-gradient-to-b
          from-white
          to-gray-50
          p-0

          shadow-lg
          shadow-black/10

          transition-all
          duration-500

          hover:-translate-y-1
          hover:scale-[1.03]
          hover:border-cyan-400/70
          hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]
        "
      >
        {/* Голубое свечение */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-r
            from-cyan-500/5
            via-cyan-400/10
            to-cyan-500/5
          "
        />

        {/* Блик */}
        <div
          className="
            absolute
            -left-20
            top-0
            h-full
            w-20
            -skew-x-12
            bg-white/40
            blur-xl
            transition-all
            duration-700
            group-hover:left-[120%]
          "
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-10">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={220}
            height={80}
            className={`${imageClass} object-contain transition-transform duration-500 group-hover:scale-105`}
          />
        </div>
      </Card>
    </a>
  );
}