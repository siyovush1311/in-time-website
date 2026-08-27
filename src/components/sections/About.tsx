"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-16 scroll-mt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            О компании IN TIME
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            Люди, которым можно доверить{" "}
            <span className="text-cyan-400">ваши документы</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            IN TIME — современное бюро переводов с профессиональным
            подходом к переводам и работе с официальными документами.
          </p>
        </motion.div>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/[0.035]
            p-5
            shadow-[0_0_60px_rgba(0,200,255,0.06)]
            backdrop-blur-xl
            md:p-7
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative grid items-center gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[310px_1fr]">

            {/* Founder photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-[310px]"
            >
              <div className="absolute -inset-2 rounded-[1.5rem] bg-cyan-400/10 blur-xl" />

              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-cyan-400/25
                  bg-[#0b1629]
                  shadow-[0_0_40px_rgba(0,200,255,0.12)]
                "
              >
                <Image
                  src="/founder.jpg"
                  alt="Бобоев Шаҳзодҷон Комилҷонович — основатель IN TIME"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 310px"
                  className="object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/50 via-transparent to-transparent" />
              </div>

              {/* Badge */}
              <div
                className="
                  absolute
                  -bottom-3
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-[#071426]/95
                  px-4
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-cyan-300
                  shadow-[0_0_20px_rgba(0,200,255,0.15)]
                  backdrop-blur-xl
                "
              >
                Основатель IN TIME
              </div>
            </motion.div>

            {/* Founder information */}
            <div className="min-w-0">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Основатель и руководитель
              </span>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
                Бобоев Шаҳзодҷон
                <br className="hidden sm:block" />
                Комилҷонович
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Профессиональная деятельность связана с лингвистикой,
                переводом и организацией работы бюро переводов.
                Наша миссия — помогать людям понимать друг друга, преодолевая языковые и культурные границы.
              </p>

              {/* Main information */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {/* Degree */}
                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    transition
                    duration-300
                    hover:border-cyan-400/30
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">🎓</div>

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Степень
                      </h4>

                      <p className="mt-1 text-sm text-slate-400">
                        Магистр
                      </p>
                    </div>
                  </div>
                </div>

                {/* Qualification */}
                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    transition
                    duration-300
                    hover:border-cyan-400/30
                  "
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl">🌍</div>

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Квалификация
                      </h4>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        Языковед, переводчик с английского языка
                        на таджикский язык
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Education */}
              <div
                className="
                  mt-3
                  rounded-xl
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.035]
                  p-4
                "
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-lg">
                    📚
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Образование и специализация
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      Степень магистра по направлению{" "}
                      <span className="font-medium text-slate-200">
                        «Лингвистические науки»
                      </span>
                      , специальность{" "}
                      <span className="font-medium text-slate-200">
                        «Современные иностранные языки»
                      </span>
                      .
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}