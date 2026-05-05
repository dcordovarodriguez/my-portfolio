import { GitBranch, Globe, Mail, Phone, Users } from "lucide-react";

import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
};

const contactItems = [
  {
    label: "GitHub",
    value: "github.com/dcordovarodriguez",
    href: "https://github.com/dcordovarodriguez",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/diegocordova2003",
    href: "https://www.linkedin.com/in/diegocordova2003/",
    icon: Users,
  },
  {
    label: "Email",
    value: "dcordova0221@gmail.com",
    href: "mailto:dcordova0221@gmail.com",
    icon: Mail,
  },
  {
    label: "Domain",
    value: "diegocordova.net",
    href: "https://www.diegocordova.net/",
    icon: Globe,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about product design, TritonNav, or future collaborations."
        description="This page keeps the contact surface simple and class-submission friendly while still supporting the long-term portfolio migration."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="grid gap-6 md:grid-cols-2">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                {label}
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-950">{value}</p>
            </a>
          ))}
        </section>

        <aside className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Portfolio note
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              This Next.js build is designed to replace the current Wix Studio version over time.
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              For class submission, the main deliverables are the GitHub source
              link and a hosted deployment. For long-term use, this structure is
              set up so Vercel can become the primary home of diegocordova.net.
            </p>
            <div className="pt-2">
              <CTAButton href="/projects" variant="secondary">
                Review project pages
              </CTAButton>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-slate-900">Additional info</p>
              <p className="mt-2 inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-700" />
                650-630-1245
              </p>
              <p className="mt-2">UCSD Cognitive Science, Design & Interaction</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
