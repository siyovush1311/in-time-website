"use client";

import {
  ShieldCheck,
  Globe2,
  Zap,
  BadgeCheck,
} from "lucide-react";

import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    icon: Globe2,
    title: "50+ языков мира",
    text: "Письменный и устный перевод документов практически на все популярные языки.",
  },
  {
    icon: Zap,
    title: "Срочный перевод",
    text: "Оперативное выполнение заказов без потери качества.",
  },
  {
    icon: ShieldCheck,
    title: "Конфиденциальность",
    text: "Ваши документы находятся под полной защитой и не передаются третьим лицам.",
  },
  {
    icon: BadgeCheck,
    title: "Нотариальное заверение",
    text: "Полный комплекс услуг: перевод, нотариус, апостиль и легализация.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-700/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-white">
            Почему выбирают IN TIME
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-8">
            Мы объединяем современные технологии,
            профессиональных переводчиков и международные
            стандарты качества, чтобы каждый клиент получил
            быстрый, точный и безопасный перевод.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <GlowCard
                key={item.title}
                className="p-8"
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-cyan-500/10
                    border
                    border-cyan-400/20
                    group-hover:bg-cyan-500/20
                    transition-all
                  "
                >
                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {item.text}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}