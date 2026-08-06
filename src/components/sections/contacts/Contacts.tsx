"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";

import ContactsHeader from "./ContactsHeader";
import ContactGrid from "./ContactGrid";
import ContactMap from "./ContactMap";

export default function Contacts() {
  return (
    <Section
      id="contacts"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 xl:px-10">
        {/* Header */}
        <ContactsHeader />

        {/* Contact Cards */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactGrid />
        </motion.div>

        {/* Map */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactMap />
        </motion.div>
      </div>
    </Section>
  );
}