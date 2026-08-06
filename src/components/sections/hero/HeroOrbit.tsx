"use client";

import GlobeScene from "@/components/three/GlobeScene";
import OrbitItem from "./OrbitItem";
import { orbitItems } from "./orbitData";

export default function HeroOrbit() {
  return (
    <div className="relative hidden h-[700px] w-[700px] lg:block">

      {/* Большое мягкое свечение */}
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Орбитальное кольцо 1 */}
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      {/* Орбитальное кольцо 2 */}
      <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      {/* Орбитальное кольцо 3 */}
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />

      {/* Глобус */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="glass relative h-full w-full overflow-hidden rounded-full border border-white/10">
          <GlobeScene />
        </div>
      </div>

      {/* Карточки */}
      {orbitItems.map((item) => (
        <div
          key={item.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          <OrbitItem
            icon={item.icon}
            label={item.label}
          />
        </div>
      ))}

    </div>
  );
}