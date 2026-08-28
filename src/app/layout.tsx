import type { Metadata } from "next";

import "./globals.css";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://intime.tj"),

  title: {
    default: "IN TIME — Бюро переводов в Душанбе | Таджикистан",
    template: "%s | IN TIME — Бюро переводов",
  },

  description:
    "IN TIME — бюро переводов в Душанбе, Таджикистан. Перевод документов, нотариальное заверение, апостиль, легализация, устный и письменный перевод на основные языки мира.",

  keywords: [
    "бюро переводов",
    "бюро переводов Душанбе",
    "бюро переводов Таджикистан",
    "перевод документов",
    "перевод документов Душанбе",
    "перевод Душанбе",
    "перевод Таджикистан",
    "нотариальный перевод",
    "нотариальное заверение",
    "апостиль Душанбе",
    "легализация документов",
    "срочный перевод",
    "перевод паспорта",
    "перевод диплома",
    "перевод свидетельства",
    "перевод для визы",
    "маркази тарҷума",
    "маркази тарҷума Душанбе",
    "тарҷумаи ҳуҷҷатҳо",
    "тарҷума Душанбе",
    "тарҷумаи ҳуҷҷатҳо ба русӣ",
    "тарҷумаи ҳуҷҷатҳо ба англисӣ",
    "IN TIME",
  ],

  applicationName: "IN TIME",

  authors: [
    {
      name: "IN TIME",
      url: "https://intime.tj",
    },
  ],

  creator: "IN TIME — Бюро переводов",
  publisher: "IN TIME — Бюро переводов",

  alternates: {
    canonical: "https://intime.tj/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://intime.tj/",
    siteName: "IN TIME — Бюро переводов",
    title: "IN TIME — Бюро переводов в Душанбе",
    description:
      "Профессиональный перевод документов в Душанбе. Нотариальное заверение, апостиль, легализация и перевод на основные языки мира.",
  },

  twitter: {
    card: "summary_large_image",
    title: "IN TIME — Бюро переводов в Душанбе",
    description:
      "Бюро переводов IN TIME в Душанбе. Перевод документов, нотариальное заверение, апостиль и легализация.",
  },

  category: "translation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050816]">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
