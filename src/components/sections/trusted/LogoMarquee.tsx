"use client";

import TrustedLogo from "./TrustedLogo";
import { partners } from "./partners";

const marqueePartners = [...partners, ...partners];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-10">

      {/* Левый градиент */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-40 bg-gradient-to-r from-[#050816] via-[#050816]/95 to-transparent" />

      {/* Правый градиент */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-40 bg-gradient-to-l from-[#050816] via-[#050816]/95 to-transparent" />

      {/* Светящаяся линия */}
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-400/10 blur-sm" />

      <div className="group overflow-hidden">
        <div
          className="
            flex
            w-max
            items-center
            gap-12
            px-12
            animate-[marquee_38s_linear_infinite]
            group-hover:[animation-play-state:paused]
            will-change-transform
          "
        >
          {marqueePartners.map((partner, index) => (
            <TrustedLogo
              key={`${partner.id}-${index}`}
              partner={partner}
            />
          ))}
        </div>
      </div>
    </div>
  );
}