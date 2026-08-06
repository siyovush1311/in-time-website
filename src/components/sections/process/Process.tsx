"use client";

import {
  FileUp,
  Calculator,
  Languages,
  CheckCircle2,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessStep from "./ProcessStep";
import ProcessCTA from "./ProcessCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: FileUp,
    title: "Отправьте документы",
    description:
      "Пришлите документы через WhatsApp, Telegram, Email или принесите их в наш офис.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Получите расчёт",
    description:
      "Мы быстро проверим документы, сообщим стоимость и точные сроки выполнения.",
  },
  {
    number: "03",
    icon: Languages,
    title: "Мы выполняем перевод",
    description:
      "Профессиональный перевод, нотариальное заверение, апостиль или легализация документов.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Получите готовые документы",
    description:
      "Заберите документы лично, получите их по электронной почте или курьерской доставкой.",
  },
];

export default function Process() {
  return (
    <Section id="process">
      <AnimatedSection>
        <SectionTitle
          title="Как мы работаем"
          subtitle="Всего четыре простых шага — и ваши документы будут готовы."
        />
      </AnimatedSection>

      {/* Линия процесса */}
      <div className="relative mt-20">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 lg:block" />

        <div className="grid gap-12 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>

      <ProcessCTA />
    </Section>
  );
}