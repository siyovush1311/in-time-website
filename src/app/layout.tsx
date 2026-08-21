import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "IN TIME — Бюро переводов",
  description:
    "Профессиональное бюро переводов IN TIME в Таджикистане. Переводы на 50+ языков мира, нотариальное заверение, апостиль, легализация документов и медицинская страховка для виз.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050816]">
        {children}
      </body>
    </html>
  );
}
