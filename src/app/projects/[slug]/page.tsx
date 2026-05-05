import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { PROJECTS } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {project.category}
            </span>
            <span className="text-sm text-slate-500">{project.year}</span>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-9 text-slate-600">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links?.map((link) => (
              <CTAButton
                key={link.label}
                href={link.href}
                external={link.external}
                variant={link.external ? "secondary" : "primary"}
                className="gap-2"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </CTAButton>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_320px]">
        <section className="space-y-10">
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <SectionHeading eyebrow="Problem" title="What needed solving" />
            <p className="mt-6 text-base leading-8 text-slate-600">
              {project.problem}
            </p>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <SectionHeading
              eyebrow="Process"
              title="How the work came together"
            />
            <ol className="mt-6 space-y-4">
              {project.process.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <SectionHeading eyebrow="Outcome" title="What the project produced" />
            <p className="mt-6 text-base leading-8 text-slate-600">
              {project.outcome}
            </p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Role
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              {project.role}
            </p>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Tools
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Future improvements
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {project.futureImprovements.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50/80 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
