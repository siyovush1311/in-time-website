"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative bg-[#050816] px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-white">
            {t.services.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            {t.services.subtitle}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {t.services.items.map((service) => (
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