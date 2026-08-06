"use client";

import { Stars as DreiStars } from "@react-three/drei";

export default function Stars() {
  return (
    <>
      {/* Дальний фон */}
      <DreiStars
        radius={220}
        depth={120}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={0.08}
      />

      {/* Средний слой */}
      <DreiStars
        radius={120}
        depth={70}
        count={1800}
        factor={2}
        saturation={0}
        fade
        speed={0.18}
      />

      {/* Ближний слой */}
      <DreiStars
        radius={70}
        depth={30}
        count={450}
        factor={6}
        saturation={0}
        fade
        speed={0.35}
      />
    </>
  );
}