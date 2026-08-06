"use client";

import { Clock3, CalendarDays } from "lucide-react";
import ContactIcon from "./ContactIcon";
import ContactButton from "./ContactButton";

interface ScheduleItem {
  days: string;
  hours: string;
}

interface ScheduleContentProps {
  title: string;
  schedule: ScheduleItem[];
  note?: string;
  button: string;
}

export default function ScheduleContent({
  title,
  schedule,
  note,
  button,
}: ScheduleContentProps) {
  return (
    <>
      <ContactIcon icon={Clock3} />

      <h3 className="mt-8 text-center text-3xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-8 space-y-4">
        {schedule.map((item) => (
          <div
            key={item.days}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <CalendarDays
                size={18}
                className="text-cyan-300"
              />

              <span className="text-slate-200">
                {item.days}
              </span>
            </div>

            <span className="font-semibold text-white">
              {item.hours}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <p className="leading-7 text-slate-300">
              {note}
            </p>
          </div>
        </div>
      )}

      <ContactButton text={button} />
    </>
  );
}