import { ArrowRight, Compass, Mail } from "lucide-react";

import { CTAButton } from "@/components/CTAButton";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions: HeroAction[];
  stats: Array<{ label: string; value: string }>;
};

export function Hero({ eyebrow, title, description, actions, stats }: HeroProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
          <Compass className="h-4 w-4" />
          {eyebrow}
        </div>
        <div className="space-y-6">
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {actions.map((action, index) => (
            <CTAButton
              key={action.href}
              href={action.href}
              variant={action.variant ?? (index === 0 ? "primary" : "secondary")}
              className="gap-2"
            >
              {action.label}
              {action.href === "/contact" ? (
                <Mail className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </CTAButton>
          ))}
        </div>
      </div>

      <aside className="rounded-[32px] border border-white/70 bg-white/85 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.09)] backdrop-blur">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
              Focus areas
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              Product, cognition, and technical systems.
            </h2>
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
