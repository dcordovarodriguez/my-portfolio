"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPinned } from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/tritonnav", label: "TritonNav" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-slate-950/85 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/20 text-sky-300">
            <MapPinned className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.22em] text-sky-200">
              DIEGO CORDOVA RODRIGUEZ
            </span>
            <span className="block text-sm text-slate-300">
              Portfolio + TritonNav MVP
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 font-medium transition hover:bg-white/10",
                  isActive ? "bg-white/10 text-white" : "text-slate-300",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
