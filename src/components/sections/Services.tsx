"use client";

const services = [
  {
    icon: "🌐",
    title: "Письменный перевод",
    description: "Перевод документов более чем на 50 языков мира.",
  },
  {
    icon: "🎤",
    title: "Устный перевод",
    description: "Сопровождение переговоров, конференций и встреч.",
  },
  {
    icon: "📜",
    title: "Нотариальное заверение",
    description: "Официальное заверение переводов и документов.",
  },
  {
    icon: "🌍",
    title: "Апостиль",
    description:
      "Помощь в оформлении апостиля для международного использования.",
  },
  {
    icon: "⚖️",
    title: "Легализация",
    description:
      "Подготовка документов для иностранных государств.",
  },
  {
    icon: "🛡️",
    title: "Медицинская страховка",
    description:
      "Страхование для оформления виз и поездок за границу.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#050816] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white">
            Наши услуги
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Полный спектр переводческих услуг для физических лиц,
            бизнеса и международных компаний.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/50
                hover:shadow-[0_0_40px_rgba(0,200,255,0.25)]
              "
            >
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}