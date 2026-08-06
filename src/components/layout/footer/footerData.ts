import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    name: "Telegram",
    href: "https://t.me/perevodintime",
    icon: FaTelegramPlane,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/perevod_001?igsh=MTBrZWFwejRzZWlpNA==",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19GNizEcZY/",
    icon: FaFacebookF,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@user3709381055411?_r=1&_t=ZS-98b1DOP7og5",
    icon: FaTiktok,
  },
];