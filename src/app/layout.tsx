import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/lib/language";
import { LANG_COOKIE, type Language } from "@/lib/language-constants";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "POSTATO — Human-Powered Advertising Network",
  description:
    "Turn real people and social networks into your advertising power. POSTATO helps businesses promote their brands through real people and social networks.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const saved = cookieStore.get(LANG_COOKIE)?.value;
  const lang: Language = saved === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";

  return (
    <html
      lang={lang}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} dark h-full antialiased ${isArabic ? "font-arabic" : ""}`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
