"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleHelp, MessageCircle } from "lucide-react";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl">
              <CircleHelp
                size={58}
                className="text-cyan-400"
              />
            </div>
          </div>

          {/* Badge */}
          <p className="text-base font-bold uppercase tracking-[0.45em] text-cyan-400">
            FAQ
          </p>

          {/* Title */}
          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Часто задаваемые вопросы
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Мы собрали ответы на самые популярные вопросы наших клиентов.
            Если вы не нашли нужную информацию — свяжитесь с нами,
            и мы обязательно поможем.
          </p>
        </motion.div>

        {/* Questions */}
        <div className="mx-auto max-w-5xl space-y-6">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() =>
                setOpenId(openId === item.id ? null : item.id)
              }
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-12 text-center backdrop-blur-xl"
        >
          <MessageCircle
            size={56}
            className="mx-auto text-cyan-400"
          />

          <h3 className="mt-6 text-4xl font-bold text-white">
            Не нашли ответ?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-xl leading-9 text-slate-300">
            Наши специалисты готовы бесплатно проконсультировать вас,
            помочь с выбором услуги и рассчитать стоимость перевода.
          </p>

          <a
            href="https://wa.me/992902814477"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-2xl bg-cyan-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
          >
            Связаться через WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}