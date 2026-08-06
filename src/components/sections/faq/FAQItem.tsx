"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem as FAQType } from "./faqData";

interface Props {
  item: FAQType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  item,
  isOpen,
  onToggle,
}: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 p-8 text-left"
      >
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <Icon size={30} />
          </div>

          <h3 className="text-2xl font-bold leading-snug text-white">
            {item.question}
          </h3>
        </div>

        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <Plus
            size={32}
            className="text-cyan-400"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="border-t border-white/10 px-8 pb-8 pt-6">
              <p className="text-xl leading-9 text-slate-300">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}