import { ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTAContent() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {/* Badge */}
      <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          IN TIME
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-tight">
        Ваши документы заслуживают
        <br />
        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          профессионального перевода
        </span>
      </h2>

      {/* Trust */}
      <div className="mt-7 flex items-center justify-center gap-2 text-amber-400">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
              className="text-amber-400"
            />
          ))}
        </div>

        <span className="ml-2 text-sm font-medium text-slate-300">
          Более <span className="font-bold text-white">50 000</span> довольных
          клиентов
        </span>
      </div>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
        Переводы документов, нотариальное заверение, апостиль и легализация.
        Быстро, официально и с гарантией качества.
      </p>

      {/* Advantages */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-cyan-400" />
          50+ языков
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-cyan-400" />
          Срочный перевод
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-cyan-400" />
          Нотариус
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 size={18} className="text-cyan-400" />
          Апостиль
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://wa.me/992902814477"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            leftIcon={<MessageCircle size={22} />}
            className="min-w-[240px]"
          >
            Написать в WhatsApp
          </Button>
        </a>

        <a href="#services">
          <Button
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            className="min-w-[240px]"
          >
            Заказать перевод
          </Button>
        </a>
      </div>
    </div>
  );
}