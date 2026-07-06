import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteChrome } from "@/components/SiteChrome";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dashi Sushi Prototype | Hillcrest San Diego",
    template: "%s | Dashi Sushi Prototype",
  },
  description:
    "Presentable mobile-first Dashi Sushi website prototype with menu, walk-in guidance, real photos, reviews, and visit details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen text-slate-900">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
