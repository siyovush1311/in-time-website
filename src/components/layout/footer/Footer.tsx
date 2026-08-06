"use client";

import SocialLinks from "./components/SocialLinks";
import FooterBottom from "./components/FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] py-24">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SocialLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}