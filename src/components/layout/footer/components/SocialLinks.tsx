"use client";

import { motion } from "framer-motion";

import { socialLinks } from "../footerData";
import SocialButton from "./SocialButton";

export default function SocialLinks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Верхняя линия */}
        <div className="mx-auto mb-16 flex max-w-5xl items-center">
          <div className="h-px flex-1 bg-white/5" />

          <div className="mx-5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

          <div className="h-px flex-1 bg-white/5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Оставайтесь на связи
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Мы в социальных сетях
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <SocialButton social={social} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}