import {
  BrainCircuit,
  Compass,
  DatabaseZap,
  GraduationCap,
  MapPinned,
  Microscope,
  Sparkles,
  Users,
} from "lucide-react";

import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { UCSD_BUILDINGS } from "@/data/buildings";
import { PROJECTS } from "@/data/projects";

const featuredProjects = PROJECTS.filter((project) => project.featured);

const focusAreas = [
  {
    title: "UI/UX + visual systems",
    description:
      "Designing flows, interfaces, and high-fidelity prototypes that make technical products feel clear and usable.",
    icon: Sparkles,
  },
  {
    title: "Neural signal processing",
    description:
      "Applying EEG analysis, feature extraction, and classification techniques to brain-computer interaction concepts.",
    icon: BrainCircuit,
  },
  {
    title: "Data + analytics",
    description:
      "Working across structured data, dashboards, and decision-support framing to turn messy inputs into usable insight.",
    icon: DatabaseZap,
  },
  {
    title: "Human-centered research",
    description:
      "Bringing cognitive science and HCI thinking into products that need both technical depth and better user understanding.",
    icon: Microscope,
  },
];

const experienceHighlights = [
  {
    role: "Research Assistant",
    organization: "Bilingualism in Context Lab",
    timeframe: "2025",
    summary:
      "Supported bilingual verbal-description datasets through annotation cleanup, language tagging, and collaborative QA across multiple researchers.",
  },
  {
    role: "Accounting Intern",
    organization: "Quick Taxes Inc.",
    timeframe: "2025",
    summary:
      "Worked with payroll and financial reporting data, helping turn operational numbers into clearer reporting and business analysis.",
  },
  {
    role: "Web Design Intern",
    organization: "Quick Taxes Inc.",
    timeframe: "2025",
    summary:
      "Designed business websites and scheduling flows, translating client needs into cleaner digital experiences for real users.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero
        eyebrow="Diego Cordova Rodriguez"
        title="Designing human-centered products, intelligent tools, and clearer paths through complexity."
        description="I’m a UCSD Cognitive Science Design/HCI student building a code-based portfolio that highlights product design, machine learning, BCI work, and TritonNav, a campus navigation MVP for helping people find the exact building, entrance, and room they need."
        actions={[
          { label: "View Projects", href: "/projects" },
          { label: "Explore TritonNav", href: "/tritonnav", variant: "secondary" },
          { label: "Contact Me", href: "/contact", variant: "ghost" },
        ]}
        stats={[
          { label: "Primary lens", value: "Product design + HCI systems thinking" },
          { label: "Technical interests", value: "Data science, ML, BCI, and deployable frontend apps" },
          { label: "Current build", value: "Migrating diegocordova.net from Wix to Next.js" },
        ]}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Who TritonNav helps"
          title="Built for the people most likely to get lost at UCSD."
          description="The MVP centers on the users who need room-level guidance the most: first-years learning campus, transfers piecing together multiple college spaces, and visitors trying to get somewhere exact without campus context."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={GraduationCap}
            title="First-years"
            description="Help students move beyond “near the building” and toward exact entrances, lecture rooms, and clearer campus mental models."
          />
          <FeatureCard
            icon={Users}
            title="Transfers"
            description="Reduce the friction of learning a large campus quickly, especially when classes span unfamiliar colleges and circulation paths."
          />
          <FeatureCard
            icon={MapPinned}
            title="Visitors"
            description="Offer a faster, lower-stress way to reach departments, events, and public spaces without knowing UCSD’s internal geography."
          />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Core strengths"
          title="A portfolio built around product thinking with technical range."
          description="The current Wix site highlights design, BCI, analytics, and research. This Next.js version keeps that same interdisciplinary story, but packages it in a cleaner system that is easier to grow over time."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ title, description, icon: Icon }) => (
            <FeatureCard
              key={title}
              icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that connect interaction design with technical depth."
          description="This site is designed to satisfy a Next.js class assignment, but the structure also supports a real professional portfolio with reusable project pages and route-generated case study details."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[36px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Experience"
            title="Recent work across research, analytics, and client-facing design."
            description="I want the new portfolio to reflect both the systems side of my work and the practical experience behind it, from research operations to web design and business analysis."
          />

          <div className="grid gap-4">
            {experienceHighlights.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-5"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{item.role}</p>
                    <p className="text-sm font-medium text-sky-700">
                      {item.organization}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">{item.timeframe}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
            Current direction
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            Design products that make complex systems easier to navigate.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            That theme shows up in different ways across my work: a navigation
            app for UCSD, BCI interaction experiments, research data workflows,
            and portfolio systems that are easier to maintain in code.
          </p>
          <div className="mt-6">
            <CTAButton href="/about" variant="secondary" className="w-full">
              Read more about my background
            </CTAButton>
          </div>
        </aside>
      </section>

      <section className="grid gap-8 rounded-[36px] border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            <Compass className="h-4 w-4" />
            TritonNav spotlight
          </div>

          <div className="space-y-4">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A campus navigation concept designed around the last mile.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              TritonNav focuses on the exact details that matter when someone is
              late, new to campus, or walking into an unfamiliar space: which
              building is correct, where to enter, and how to find the right room.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <BrainCircuit className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-lg font-semibold">Exact entrances</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Go beyond broad building pins.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <MapPinned className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-lg font-semibold">Room hints</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Offer directional cues that help the final approach.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-lg font-semibold">Scalable MVP</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Built to expand from sample data into a real navigation product.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
            Sample campus data
          </p>
          <div className="mt-5 space-y-4">
            {UCSD_BUILDINGS.slice(0, 3).map((building) => (
              <div
                key={building.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold text-white">{building.name}</p>
                <p className="mt-1 text-sm text-slate-300">
                  {building.shortName} • {building.area}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <CTAButton href="/tritonnav" variant="secondary" className="w-full">
              Explore the product page
            </CTAButton>
          </div>
        </aside>
      </section>
    </div>
  );
}
