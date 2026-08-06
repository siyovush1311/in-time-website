import {
  Globe2,
  Clock3,
  FileCheck2,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export interface CTAFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ctaFeatures: CTAFeature[] = [
  {
    icon: Globe2,
    title: "50+ языков мира",
    description:
      "Письменный и устный перевод документов более чем на 50 языков мира.",
  },
  {
    icon: Clock3,
    title: "Срочный перевод",
    description:
      "Выполняем срочные переводы без потери качества и точности.",
  },
  {
    icon: FileCheck2,
    title: "Нотариальное заверение",
    description:
      "Подготовим документы для официальной подачи в государственные органы и консульства.",
  },
  {
    icon: ShieldCheck,
    title: "100% конфиденциальность",
    description:
      "Ваши документы защищены и никогда не передаются третьим лицам.",
  },
];
