"use client";

import { useState } from "react";
import Link from "next/link";

const menu = [
  { title: "Главная", href: "#hero" },
  { title: "О компании", href: "#about" },
  { title: "Услуги", href: "#services" },
  { title: "Как мы работаем", href: "#process" },
  { title: "Отзывы", href: "#testimonials" },
  { title: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Логотип */}
        <Link
          href="#hero"
          onClick={closeMenu}
          className="text-2xl font-black tracking-widest text-white transition hover:opacity-90 sm:text-3xl"
        >
          IN <span className="text-cyan-400">TIME</span>
        </Link>

        {/* Desktop меню */}
        <nav className="hidden items-center gap-6 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-cyan-400"
            >
              {item.title}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-3">

          {/* WhatsApp */}
          <a
            href="https://wa.me/992902814477?text=Здравствуйте!%20Меня%20интересуют%20услуги%20бюро%20переводов%20IN%20TIME"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,211,102,.25)] transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D] hover:shadow-[0_0_45px_rgba(37,211,102,.45)] sm:px-5"
          >
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile меню */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex flex-col">
            {menu.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-base font-medium text-white/80 transition hover:text-cyan-400"
              >
                <span className="mr-3 text-xs text-cyan-400">
                  0{index + 1}
                </span>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}