"use client";

import Link from "next/link";

const menu = [
  {
    title: "Главная",
    href: "#hero",
  },
  {
    title: "Услуги",
    href: "#services",
  },
  {
    title: "Как мы работаем",
    href: "#process",
  },
  {
    title: "Отзывы",
    href: "#testimonials",
  },
  {
    title: "Контакты",
    href: "#contacts",
  },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Логотип */}
        <Link
          href="#hero"
          className="text-3xl font-black tracking-widest text-white transition duration-300 hover:opacity-90"
        >
          IN <span className="text-cyan-400">TIME</span>
        </Link>

        {/* Меню */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                relative
                py-2
                text-white/75
                transition-colors
                duration-300
                hover:text-cyan-400
              "
            >
              {item.title}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center">
          <a
            href="https://wa.me/992902814477?text=Здравствуйте!%20Меня%20интересуют%20услуги%20бюро%20переводов%20IN%20TIME."
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-[#25D366]
              px-6
              py-2.5
              font-semibold
              text-white
              shadow-[0_0_30px_rgba(37,211,102,.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:scale-105
              hover:bg-[#1EBE5D]
              hover:shadow-[0_0_45px_rgba(37,211,102,.45)]
            "
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}