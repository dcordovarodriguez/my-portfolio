import { GitBranch, Globe, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dcordovarodriguez",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diegocordova2003/",
    icon: Globe,
  },
  {
    label: "Email",
    href: "mailto:dcordova0221@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            TritonNav x DiegoCordova.net
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Built with Next.js as a portfolio foundation and a design-class MVP
            that can keep growing on GitHub and Vercel.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-slate-950"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
