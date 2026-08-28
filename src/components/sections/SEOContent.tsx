export default function SEOContent() {
  return (
    <section
      id="seo-content"
      className="mx-auto max-w-6xl px-6 py-16"
      aria-labelledby="seo-content-title"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          IN TIME • Душанбе • Таджикистан
        </p>

        <h2
          id="seo-content-title"
          className="mb-5 text-2xl font-bold text-white md:text-3xl"
        >
          Бюро переводов IN TIME в Душанбе
        </h2>

        <div className="space-y-4 text-base leading-7 text-slate-300">
          <p>
            IN TIME — современное бюро переводов в Душанбе, специализирующееся
            на профессиональном переводе документов, текстов и официальных
            материалов.
          </p>

          <p>
            Мы выполняем письменные и устные переводы, переводим паспорта,
            свидетельства, дипломы, медицинские и юридические документы, а также
            оказываем услуги нотариального заверения, апостиля и легализации
            документов.
          </p>

          <p>
            Перевод выполняется с учётом языковых, юридических и профессиональных
            требований. Мы работаем с русским, таджикским, английским и другими
            распространёнными языками мира.
          </p>

          <p>
            Наш офис находится в центре Душанбе: проспект Рудаки, 83,
            ЦУМ, 3 этаж, офис 16к. Клиенты могут обратиться в IN TIME
            для консультации и оформления перевода документов.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "бюро переводов Душанбе",
            "перевод документов Душанбе",
            "переводчик Душанбе",
            "перевод документов",
            "нотариальный перевод",
            "апостиль Душанбе",
            "тарҷума Душанбе",
            "маркази тарҷума",
          ].map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-xs text-slate-400"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
