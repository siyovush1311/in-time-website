"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

const MAP_URL =
  "https://yandex.tj/maps/org/in_time/101270411249/?ll=68.786256%2C38.580686&z=16";

export default function ContactMap() {
  return (
    <section className="relative mt-16">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

          <MapPin
            size={18}
            className="text-cyan-400"
          />

          <span className="text-sm font-medium tracking-wide text-cyan-300">
            Наш офис
          </span>

        </div>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Как нас найти
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Мы всегда рады видеть вас в офисе
          <span className="font-semibold text-white">
            {" "}IN TIME{" "}
          </span>
          для консультации, оформления документов
          и профессионального перевода.
        </p>

      </motion.div>

      {/* Map Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        whileHover={{
          y: -4,
          transition: { duration: .25 }
        }}
        className="
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(6,182,212,.08)]
        "
      >

        {/* Top Strip */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-8
            py-5
          "
        >

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-cyan-500/10
            ">

              <Navigation
                className="text-cyan-400"
                size={22}
              />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-white">
                Офис IN TIME
              </h3>

              <p className="text-sm text-slate-400">
                Душанбе • ЦУМ • 3 этаж • офис 16К
              </p>

            </div>

          </div>

          <div
            className="
              hidden
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-500/10
              px-4
              py-2
              text-sm
              text-emerald-300
              md:block
            "
          >
            Сейчас открыто
          </div>

        </div>

        {/* MAP */}

        <div className="relative h-[720px] w-full">

          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=68.786256%2C38.580686&mode=search&oid=101270411249&z=16"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="border-0"
          />          {/* Overlay Gradient */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        </div>

        {/* Bottom Content */}

        <div className="flex flex-col items-center gap-8 px-8 py-10 text-center">

          <div className="max-w-2xl">

            <h4 className="mb-3 text-2xl font-bold text-white">
              Посетите наш офис
            </h4>

            <p className="leading-8 text-slate-400">
              Мы находимся в самом центре Душанбе —
              ЦУМ, 3 этаж, офис 16К.
              Наши специалисты помогут с переводом документов,
              нотариальным заверением, апостилем и другими услугами.
            </p>

          </div>

          <motion.a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .98,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-sky-500
              px-10
              py-5
              text-lg
              font-semibold
              text-slate-950
              shadow-[0_15px_40px_rgba(6,182,212,.35)]
              transition-all
            "
          >
            Построить маршрут

            <ArrowUpRight
              size={22}
            />

          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}