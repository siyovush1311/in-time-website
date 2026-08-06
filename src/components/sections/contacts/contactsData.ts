import { ContactItem } from "./types";
import {
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const contactCards: ContactItem[] = [
  {
    id: "phone",

    icon: Phone,

    title: "Телефон",

    value: "+992 90 281 44 77",

    description:
      "Позвоните нам — мы ответим максимально быстро и бесплатно проконсультируем.",

    features: [
      "Бесплатная консультация",
      "Ответ за несколько минут",
      "WhatsApp всегда доступен",
    ],

    button: "Позвонить сейчас",

    href: "tel:+992902814477",
  },

  {
    id: "email",

    icon: Mail,

    title: "Email",

    value:
      "intime.translationagency4623@gmail.com",

    description:
      "Отправьте документы, запрос на перевод или предложение о сотрудничестве.",

    features: [
      "Перевод документов",
      "Коммерческие предложения",
      "Сотрудничество",
    ],

    button: "Написать письмо",

    href:
      "mailto:intime.translationagency4623@gmail.com",
  },

  {
    id: "schedule",

    icon: Clock,

    title: "Режим работы",

    schedule: [
      {
        days: "Понедельник — Пятница",
        hours: "09:00 — 17:00",
      },

      {
        days: "Суббота",
        hours: "09:00 — 14:00",
      },

      {
        days: "Воскресенье",
        hours: "Выходной",
      },
    ],

    note:
      "Работаем без перерыва на обед. Всегда рады видеть вас в офисе IN TIME.",

    button: "Мы открыты",

    href: "#map",
  },
];