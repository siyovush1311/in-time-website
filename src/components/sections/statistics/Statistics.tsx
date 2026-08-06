"use client";

import { stats } from "./stats";
import StatCard from "./StatCard";

export default function Statistics() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-cyan-400 font-semibold tracking-[0.3em] uppercase">
            IN TIME
          </p>

          <h2 className="text-4xl font-bold text-white">
            Нам доверяют цифры
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            За годы работы мы помогли тысячам клиентов оформить документы быстро,
            качественно и точно.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}