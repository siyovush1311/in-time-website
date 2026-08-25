"use client";

import TimeClock from "./TimeClock";

export default function HeroOrbit() {
  return (
    <div className="relative flex w-full items-center justify-center">

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* Clock */}
      <div className="relative w-full max-w-[700px]">
        <TimeClock />
      </div>

    </div>
  );
}