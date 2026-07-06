"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isPrototypeRoute = pathname === "/" || pathname.startsWith("/dashi-sushi");

  if (isPrototypeRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <main className="flex-1 py-10 sm:py-14">{children}</main>
      </div>
      <Footer />
    </>
  );
}
