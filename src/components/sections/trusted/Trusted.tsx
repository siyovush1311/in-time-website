"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import LogoMarquee from "./LogoMarquee";

export default function Trusted() {
  return (
    <section
      id="trusted"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/10
            blur-[160px]
          "
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <SectionTitle
            title="Нам доверяют"
            subtitle="Компании и организации, которые выбирают IN TIME для профессионального перевода документов."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <LogoMarquee />
        </motion.div>
      </Container>
    </section>
  );
}