"use client";

import { motion } from "framer-motion";

const translators = [
  {
    name: "Переводчик 01",
    role: "Старший переводчик",
    languages: "Русский • Таджикский • Английский",
    education: "Высшее лингвистическое образование",
    status: "Демонстрационный профиль",
  },
  {
    name: "Переводчик 02",
    role: "Переводчик",
    languages: "Русский • Таджикский • Английский",
    education: "Высшее образование",
    status: "Демонстрационный профиль",
  },
  {
    name: "Переводчик 03",
    role: "Переводчик",
    languages: "Русский • Таджикский • Английский",
    education: "Высшее образование",
    status: "Демонстрационный профиль",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            О компании IN TIME
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Люди, которым можно доверить
            <span className="text-cyan-400"> ваши документы</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            IN TIME — современное бюро переводов, объединяющее
            профессиональных переводчиков и специалистов по работе
            с официальными документами.
          </p>
        </motion.div>

        {/* Основатель */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[380px_1fr]"
        >

          {/* Фото-заглушка */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/40 shadow-[0_0_60px_rgba(0,200,255,0.12)]">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-5xl">
                  👤
                </div>

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Фото основателя
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  Будет добавлено после получения фотографии
                </p>
              </div>
            </div>
          </div>

          {/* Информация */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Основатель и руководитель
            </span>

            <h3 className="mt-4 text-4xl font-bold text-white">
              Имя Фамилия
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Основатель IN TIME и руководитель команды переводчиков.
              Здесь будет размещена официальная информация об основателе,
              профессиональном опыте, образовании и направлениях деятельности.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-2xl">🎓</div>
                <h4 className="mt-3 font-semibold text-white">
                  Образование
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Информация будет добавлена
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-2xl">🌍</div>
                <h4 className="mt-3 font-semibold text-white">
                  Языки
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  Информация будет добавлена
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Команда */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Наша команда
            </span>

            <h3 className="mt-4 text-4xl font-bold text-white">
              Профессиональные переводчики
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              На странице будут представлены реальные специалисты IN TIME,
              их языковые направления, образование, дипломы и сертификаты.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {translators.map((translator, index) => (
              <motion.div
                key={translator.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,200,255,0.15)]"
              >

                {/* Фото */}
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/30">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-4xl">
                      👤
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                      Фото переводчика
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                    {translator.role}
                  </span>

                  <h4 className="mt-2 text-2xl font-bold text-white">
                    {translator.name}
                  </h4>

                  <div className="mt-5 space-y-4 text-sm">
                    <div>
                      <span className="text-slate-500">
                        🌍 Языки
                      </span>
                      <p className="mt-1 text-slate-300">
                        {translator.languages}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        🎓 Образование
                      </span>
                      <p className="mt-1 text-slate-300">
                        {translator.education}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500">
                        📄 Дипломы и сертификаты
                      </span>
                      <p className="mt-1 text-slate-300">
                        Будут добавлены
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3 text-xs text-cyan-300">
                    {translator.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
