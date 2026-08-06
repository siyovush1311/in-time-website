"use client";

import { motion } from "framer-motion";

import ContactCard from "./components/ContactCard";
import PhoneContent from "./components/PhoneContent";
import EmailContent from "./components/EmailContent";
import ScheduleContent from "./components/ScheduleContent";

import { contactCards } from "./contactsData";

export default function ContactGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        2xl:gap-10
      "
    >
      {contactCards.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className="flex"
        >
          <ContactCard href={item.href}>
            {item.id === "phone" ? (
              <PhoneContent {...item} />
            ) : item.id === "email" ? (
              <EmailContent {...item} />
            ) : (
              <ScheduleContent {...item} />
            )}
          </ContactCard>
        </motion.div>
      ))}
    </motion.div>
  );
}