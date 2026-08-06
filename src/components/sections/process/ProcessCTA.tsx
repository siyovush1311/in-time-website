"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProcessCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-28"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-cyan-400/20 bg-[#111827] px-8 py-16 lg:px-16">

        {/* Фоновое свечение */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <MessageCircle size={16} />
            Бесплатная консультация
          </div>

          {/* Заголовок */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Нужен срочный перевод?
          </h2>

          {/* Текст */}
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            Отправьте документ в WhatsApp — мы бесплатно рассчитаем стоимость,
            сроки выполнения и предложим оптимальное решение.
          </p>

          {/* Кнопка */}
          <a
            href="https://wa.me/992902814477?text=Здравствуйте!%20Меня%20интересуют%20услуги%20бюро%20переводов%20IN%20TIME."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 w-full max-w-[620px]"
          >
            <div
              className="
                flex
                h-[72px]
                items-center
                justify-center
                rounded-2xl
                border
                border-green-400/30
                bg-gradient-to-r
                from-[#25D366]
                to-[#1EBE5D]
                px-8
                shadow-[0_15px_45px_rgba(37,211,102,.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-[0_20px_60px_rgba(37,211,102,.45)]
                active:scale-[0.98]
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <FaWhatsapp
                    size={28}
                    className="text-white"
                  />
                </div>

                <span className="text-2xl font-semibold text-white">
                  Написать в WhatsApp
                </span>
              </div>
            </div>
          </a>

          {/* Нижняя строка */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={16}
                className="text-cyan-400"
              />
              Без обязательств
            </div>

            <span className="hidden sm:block">•</span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Обычно отвечаем в течение 5 минут
            </div>

            <span className="hidden sm:block">•</span>

            <div>
              Конфиденциально
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}