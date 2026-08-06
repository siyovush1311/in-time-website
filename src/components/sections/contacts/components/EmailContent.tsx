"use client";

import { Mail, Check } from "lucide-react";
import ContactIcon from "./ContactIcon";
import ContactButton from "./ContactButton";

interface EmailContentProps {
  title: string;
  value: string;
  description?: string;
  features?: string[];
  button: string;
}

export default function EmailContent({
  title,
  value,
  description,
  features = [],
  button,
}: EmailContentProps) {
  return (
    <>
      <ContactIcon icon={Mail} />

      <h3 className="mt-8 text-center text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 break-all text-center text-lg font-medium text-cyan-300">
        {value}
      </p>

      {description && (
        <p className="mx-auto mt-5 max-w-xs text-center leading-7 text-slate-400">
          {description}
        </p>
      )}

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="space-y-5">
        {features.map((item) => (
          <div key={item} className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
              <Check size={18} />
            </div>

            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>

      <ContactButton text={button} />
    </>
  );
}