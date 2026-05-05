import { BrainCircuit, Microscope, Orbit, Sparkles } from "lucide-react";

import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-10">
        <SectionHeading
          eyebrow="About Diego"
          title="Cognitive science, design/HCI, and technical systems thinking."
          description="I’m Diego Cordova Rodriguez, a UCSD Cognitive Science student focused on Design & Interaction. My work sits at the intersection of product design, machine learning, data, BCI, and human-centered technology."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_320px]">
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I’m especially interested in building products that translate
              technical systems into experiences people can actually understand
              and use. That can look like a campus navigation MVP, a brain-computer
              interface experiment, or a portfolio migration that turns a no-code
              site into a maintainable engineering project.
            </p>
            <p>
              Long term, I want to work where design, data, and meaningful
              real-world impact overlap. That includes product design, ML-enabled
              tools, biotech and medicine-adjacent systems, and other forms of
              human-centered technology that reduce friction for real users.
            </p>
          </div>

          <aside className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Mission
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              Build tools that help people feel more capable inside complex systems.
            </p>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[32px] border border-white/70 bg-white/90 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Academic background
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            UCSD Cognitive Science, Design & Interaction
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            My academic work sits at the intersection of cognition, interface
            design, and technical implementation. I’m especially drawn to
            products where behavior, information architecture, and system logic
            all influence the user experience.
          </p>
        </article>

        <article className="rounded-[32px] border border-white/70 bg-white/90 p-7 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Career interests
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            Product, ML, biotech, and human-centered technology
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            I’m interested in roles and projects where product strategy,
            machine learning, data, and human impact overlap. That includes
            healthcare-adjacent systems, research tooling, analytics products,
            and interfaces that reduce friction in high-stakes environments.
          </p>
        </article>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard
          icon={Sparkles}
          title="Product design"
          description="Designing flows, interfaces, and narratives that make useful technology easier to trust and adopt."
        />
        <FeatureCard
          icon={BrainCircuit}
          title="BCI + ML"
          description="Exploring neural signal processing, machine learning, and interaction design through EEG-based prototypes."
        />
        <FeatureCard
          icon={Microscope}
          title="Biotech + medicine"
          description="Interested in technology that supports health, research, and better decision-making in complex scientific spaces."
        />
        <FeatureCard
          icon={Orbit}
          title="Human-centered systems"
          description="I like projects where cognition, behavior, and technical engineering all need to work together."
        />
      </div>
    </div>
  );
}
