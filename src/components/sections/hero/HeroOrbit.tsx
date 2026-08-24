"use client";

import GlobeScene from "@/components/three/GlobeScene";
import OrbitItem from "./OrbitItem";
import { orbitItems } from "./orbitData";

export default function HeroOrbit() {
  return (
    <div className="relative h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] lg:h-[700px] lg:w-[700px]">

      {/* Мягкое свечение */}
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[110px] lg:h-[620px] lg:w-[620px] lg:blur-[140px]" />

      {/* Орбитальное кольцо 1 */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 sm:h-[390px] sm:w-[390px] lg:h-[560px] lg:w-[560px]" />

      {/* Орбитальное кольцо 2 */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 sm:h-[330px] sm:w-[330px] lg:h-[470px] lg:w-[470px]" />

      {/* Орбитальное кольцо 3 */}
      <div className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 sm:h-[270px] sm:w-[270px] lg:h-[380px] lg:w-[380px]" />

      {/* Глобус */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 sm:h-[330px] sm:w-[330px] lg:h-[500px] lg:w-[500px]">
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl sm:blur-3xl" />

        <div className="glass relative h-full w-full overflow-hidden rounded-full border border-white/10">
          <GlobeScene />
        </div>
      </div>

      {/* Карточки вокруг глобуса */}
      {orbitItems.map((item) => (
        <div
          key={item.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          <div className="scale-75 sm:scale-90 lg:scale-100">
            <OrbitItem
              icon={item.icon}
              label={item.label}
            />
          </div>
        </div>
      ))}

    </div>
  );
}
