"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-2xl">
                ★
              </span>
            ))}
          </div>

          <p className="text-cyan-400 font-semibold uppercase tracking-[0.35em] text-sm">
            Более 50 000 довольных клиентов
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Что говорят наши клиенты
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            За годы работы мы помогли тысячам клиентов перевести документы,
            оформить апостиль, нотариальное заверение, визовые документы и
            медицинское страхование. Вот лишь небольшая часть отзывов наших
            клиентов.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}