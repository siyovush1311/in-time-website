import { LucideIcon } from "lucide-react";

export interface ScheduleItem {
  days: string;
  hours: string;
}

export interface PhoneContactItem {
  id: "phone";

  icon: LucideIcon;

  title: string;

  value: string;

  description?: string;

  features: string[];

  button: string;

  href: string;
}

export interface EmailContactItem {
  id: "email";

  icon: LucideIcon;

  title: string;

  value: string;

  description?: string;

  features: string[];

  button: string;

  href: string;
}

export interface ScheduleContactItem {
  id: "schedule";

  icon: LucideIcon;

  title: string;

  schedule: ScheduleItem[];

  note?: string;

  button: string;

  href: string;
}

export type ContactItem =
  | PhoneContactItem
  | EmailContactItem
  | ScheduleContactItem;