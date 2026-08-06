"use client";

import BackToTop from "./BackToTop";

export default function FooterBottom() {
  return (
    <div className="mt-20">
      {/* Верхняя декоративная линия */}
      <div className="mx-auto flex max-w-5xl items-center">
        <div className="h-px flex-1 bg-white/10" />

        <div className="mx-4 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Нижняя часть */}
      <div className="relative mt-10 flex items-center">

        {/* Левая пустая область */}
        <div className="flex-1" />

        {/* Авторские права */}
        <div className="flex-1 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              IN TIME
            </span>{" "}
            • Все права защищены.
          </p>
        </div>

        {/* Кнопка Наверх */}
        <div className="flex flex-1 justify-end pr-4">
        <BackToTop />
        </div>

      </div>
    </div>
  );
}