"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Country = {
  code: string;
  name: string;
  wiki: string;
  angle: number;
};

const countries: Country[] = [
  {
    code: "TJ",
    name: "Таджикистан",
    wiki: "Tajikistan",
    angle: 0,
  },
  {
    code: "GB",
    name: "United Kingdom",
    wiki: "United_Kingdom",
    angle: 30,
  },
  {
    code: "RU",
    name: "Россия",
    wiki: "Russia",
    angle: 60,
  },
  {
    code: "FR",
    name: "France",
    wiki: "France",
    angle: 90,
  },
  {
    code: "DE",
    name: "Deutschland",
    wiki: "Germany",
    angle: 120,
  },
  {
    code: "CN",
    name: "中国",
    wiki: "China",
    angle: 150,
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    wiki: "United_Arab_Emirates",
    angle: 180,
  },
  {
    code: "ES",
    name: "España",
    wiki: "Spain",
    angle: 210,
  },
  {
    code: "TR",
    name: "Türkiye",
    wiki: "Turkey",
    angle: 240,
  },
  {
    code: "UZ",
    name: "O'zbekiston",
    wiki: "Uzbekistan",
    angle: 270,
  },
  {
    code: "IT",
    name: "Italia",
    wiki: "Italy",
    angle: 300,
  },
  {
    code: "US",
    name: "United States",
    wiki: "United_States",
    angle: 330,
  },
];

function getTimeParts(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const hourAngle =
    ((hours % 12) + minutes / 60 + seconds / 3600) * 30;

  const minuteAngle =
    (minutes + seconds / 60 + milliseconds / 60000) * 6;

  const secondAngle =
    (seconds + milliseconds / 1000) * 6;

  return {
    hourAngle,
    minuteAngle,
    secondAngle,
  };
}

export default function TimeClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setNow(new Date());
    };

    updateTime();

    const interval = window.setInterval(updateTime, 50);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  if (!now) {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-[600px]" />
    );
  }

  const time = getTimeParts(now);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px] select-none">

      {/* ========================================================= */}
      {/* MAIN GLOW */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[3%]
          rounded-full
          bg-cyan-400/10
          blur-[70px]
        "
      />

      {/* ========================================================= */}
      {/* CLOCK BODY */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-[6%]
          rounded-full
          border
          border-white/20
          bg-[#071426]
          shadow-[0_0_80px_rgba(0,200,255,0.18)]
        "
      >

        {/* Outer metallic ring */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[1.5%]
            rounded-full
            border-[3px]
            border-cyan-300/30
            shadow-[inset_0_0_30px_rgba(0,200,255,0.12)]
          "
        />

        {/* ======================================================= */}
        {/* INNER CLOCK FACE */}
        {/* ======================================================= */}

        <div
          className="
            absolute
            inset-[5%]
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-[radial-gradient(circle_at_50%_42%,rgba(18,52,82,0.95),rgba(2,12,28,1)_72%)]
          "
        >

          {/* Glass reflection */}
          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              top-[7%]
              h-[35%]
              w-[45%]
              rotate-[-25deg]
              rounded-full
              bg-white/[0.035]
              blur-2xl
            "
          />

          {/* ===================================================== */}
          {/* MINUTE MARKS */}
          {/* ===================================================== */}

          {Array.from({ length: 60 }).map((_, index) => {
            const angle = index * 6;
            const isMajor = index % 5 === 0;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <div
                  className={`
                    absolute
                    left-1/2
                    top-[1.8%]
                    -translate-x-1/2
                    rounded-full
                    ${
                      isMajor
                        ? "h-[4%] w-[2px] bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                        : "h-[1.5%] w-[1px] bg-white/25"
                    }
                  `}
                />
              </div>
            );
          })}

          {/* ===================================================== */}
          {/* COUNTRY FLAGS */}
          {/* ===================================================== */}

          {countries.map((country) => {
            const radius = 38;

            const radians =
              ((country.angle - 90) * Math.PI) / 180;

            const x =
              50 + Math.cos(radians) * radius;

            const y =
              50 + Math.sin(radians) * radius;

            const wikipediaUrl =
              `https://en.wikipedia.org/wiki/${country.wiki}`;

            return (
              <a
                key={country.code}
                href={wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть Wikipedia: ${country.name}`}
                title={`${country.code} — ${country.name}`}
                className="absolute z-20"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: (country.angle / 360) * 0.4,
                    duration: 0.45,
                  }}
                >
                  <div
                    className="
                      group
                      flex
                      h-10
                      w-10
                      cursor-pointer
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-white/20
                      bg-[#0a1c31]
                      shadow-[0_0_14px_rgba(0,190,255,0.12)]
                      transition-all
                      duration-300
                      hover:scale-125
                      hover:border-cyan-300/80
                      hover:shadow-[0_0_28px_rgba(0,210,255,0.55)]
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <img
                      src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                      alt={country.name}
                      draggable={false}
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-cover
                      "
                    />
                  </div>
                </motion.div>
              </a>
            );
          })}

          {/* ===================================================== */}
          {/* HOUR HAND */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              h-[25%]
              w-[7px]
              origin-bottom
              rounded-full
              bg-gradient-to-t
              from-cyan-300
              to-white
              shadow-[0_0_12px_rgba(34,211,238,0.5)]
            "
            style={{
              transform:
                `translate(-50%, -100%) rotate(${time.hourAngle}deg)`,
            }}
          />

          {/* ===================================================== */}
          {/* MINUTE HAND */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              h-[34%]
              w-[5px]
              origin-bottom
              rounded-full
              bg-gradient-to-t
              from-blue-400
              to-white
              shadow-[0_0_15px_rgba(34,211,238,0.55)]
            "
            style={{
              transform:
                `translate(-50%, -100%) rotate(${time.minuteAngle}deg)`,
            }}
          />

          {/* ===================================================== */}
          {/* SECOND HAND */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-40
              h-[39%]
              w-[2px]
              origin-bottom
              rounded-full
              bg-cyan-300
              shadow-[0_0_12px_rgba(0,210,255,0.9)]
            "
            style={{
              transform:
                `translate(-50%, -100%) rotate(${time.secondAngle}deg)`,
            }}
          />

          {/* Second hand counterweight */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-40
              h-[9%]
              w-[2px]
              origin-top
              rounded-full
              bg-cyan-300/70
            "
            style={{
              transform:
                `translate(-50%, 0) rotate(${time.secondAngle}deg)`,
            }}
          />

          {/* ===================================================== */}
          {/* CENTER PIN */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-50
              h-5
              w-5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-2
              border-white
              bg-cyan-400
              shadow-[0_0_18px_rgba(34,211,238,0.9)]
            "
          />

          {/* ===================================================== */}
          {/* IN TIME BRAND */}
          {/* ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[61%]
              z-20
              -translate-x-1/2
              text-center
            "
          >
            <div
              className="
                whitespace-nowrap
                text-[clamp(18px,3vw,28px)]
                font-black
                tracking-[0.18em]
                text-white
              "
            >
              IN{" "}
              <span className="text-cyan-400">
                TIME
              </span>
            </div>

            <div
              className="
                mt-1
                whitespace-nowrap
                text-[7px]
                font-semibold
                tracking-[0.35em]
                text-white/40
                sm:text-[9px]
              "
            >
              TRANSLATION AGENCY
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}