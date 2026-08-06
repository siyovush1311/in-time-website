"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import HeroOrbit from "@/components/sections/hero/HeroOrbit";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-28 lg:pt-40 lg:pb-36 scroll-mt-24"
    >
      {/* Фоновое свечение */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Левая колонка */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              🌍 Международное бюро переводов
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
              Переводы
              <br />
              на более чем
              <br />
              <span className="text-cyan-400">
                50 языков мира
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              Письменные и устные переводы, нотариальное заверение,
              апостиль, легализация документов и медицинская страховка
              для оформления виз.
            </p>
          </motion.div>

          {/* Правая колонка */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <HeroOrbit />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}