"use client";

import { motion } from "framer-motion";

export default function ContactsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}
      <div className="mb-8 flex justify-center">
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-500/30
            bg-cyan-500/10
            px-8
            py-4
            backdrop-blur-xl
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.45em]
              text-cyan-300
              lg:text-base
            "
          >
            Contact Center
          </span>
        </div>
      </div>

      {/* Title */}
      <h2
        className="
          text-5xl
          font-bold
          leading-tight
          tracking-tight
          text-white
          md:text-6xl
        "
      >
        Свяжитесь с нами{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          уже сегодня
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-slate-400
        "
      >
        Мы готовы помочь с переводом документов, нотариальным заверением,
        апостилем, легализацией и другими услугами. Свяжитесь с нами любым
        удобным способом — мы ответим максимально быстро.
      </p>
    </motion.div>
  );
}