import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

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
    default: "Diego Cordova Rodriguez | TritonNav Portfolio",
    template: "%s | Diego Cordova Rodriguez",
  },
  description:
    "A Next.js portfolio for Diego Cordova Rodriguez featuring TritonNav, BCI work, research, and product-focused UI/UX projects.",
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
        <Navbar />
        <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <main className="flex-1 py-10 sm:py-14">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
