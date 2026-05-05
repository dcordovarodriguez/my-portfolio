import { Compass, DoorOpen, MapPinned, Route, School, Users } from "lucide-react";

import { BuildingCard } from "@/components/BuildingCard";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { UCSD_BUILDINGS } from "@/data/buildings";

export const metadata = {
  title: "TritonNav",
};

export default function TritonNavPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1.1fr)_320px]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
            <Compass className="h-4 w-4" />
            TritonNav MVP
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              A campus navigation product built around exact places, not vague proximity.
            </h1>
            <p className="max-w-3xl text-lg leading-9 text-slate-600">
              TritonNav is designed for first-years, transfers, and visitors who
              need better than “you’ve arrived near the building.” The product
              focuses on buildings, entrances, lecture rooms, and college areas
              so the final few minutes of navigation feel much less confusing.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <CTAButton href="/tritonnav/buildings" className="gap-2">
              Explore building directory
            </CTAButton>
            <CTAButton href="/projects/tritonnav" variant="secondary">
              Read project case study
            </CTAButton>
          </div>
        </div>

        <aside className="rounded-[32px] border border-slate-100 bg-slate-50/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Core product insight
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            The “last 100 feet” of campus navigation is where people still get lost.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            TritonNav treats entrances, room hints, and area context as primary
            interface objects, not afterthoughts.
          </p>
        </aside>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Why it matters"
          title="Designed for the campus moments when Google Maps stops being enough."
          description="The UX is centered on transitional users who have the highest cognitive load on campus: they are time-sensitive, unfamiliar with the environment, and often making sense of confusing building layouts in real time."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={School}
            title="First-year onboarding"
            description="Support students who are still building a mental model of colleges, walkways, and building names."
          />
          <FeatureCard
            icon={Users}
            title="Transfer confidence"
            description="Help transfer students orient faster across multiple colleges and course locations."
          />
          <FeatureCard
            icon={Route}
            title="Visitor clarity"
            description="Reduce campus stress for family members, event guests, and anyone without UCSD context."
          />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="MVP features"
          title="The first release focuses on the pieces that create the biggest wayfinding win."
          description="Instead of trying to replicate a full mapping platform, the MVP narrows scope to the information students actually ask each other for."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            icon={MapPinned}
            title="Building directory"
            description="Searchable campus building cards with abbreviations, area labels, and direct paths into details."
          />
          <FeatureCard
            icon={DoorOpen}
            title="Entrance-level guidance"
            description="Multiple labeled entrances per building help people approach from the right side the first time."
          />
          <FeatureCard
            icon={Compass}
            title="Room-level hints"
            description="Lecture halls and rooms include short directional descriptions that support the final approach."
          />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Sample buildings"
          title="A small starter dataset that demonstrates the navigation model."
          description="These examples are enough to prove the product direction, the route structure, and the searchable building flow."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {UCSD_BUILDINGS.slice(0, 3).map((building) => (
            <BuildingCard
              key={building.id}
              building={building}
              href={`/tritonnav/buildings/${building.id}`}
            />
          ))}
        </div>

        <div>
          <CTAButton href="/tritonnav/buildings" variant="secondary">
            View full building directory
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
