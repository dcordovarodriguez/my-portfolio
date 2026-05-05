import { notFound } from "next/navigation";
import { DoorOpen, ExternalLink, LocateFixed, School } from "lucide-react";

import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { UCSD_BUILDINGS } from "@/data/buildings";
import { formatCoordinates, getGoogleMapsUrl } from "@/lib/utils";

type BuildingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return UCSD_BUILDINGS.map((building) => ({
    id: building.id,
  }));
}

export default async function BuildingDetailPage({
  params,
}: BuildingDetailPageProps) {
  const { id } = await params;
  const building = UCSD_BUILDINGS.find((entry) => entry.id === id);

  if (!building) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>{building.shortName}</Tag>
          <Tag>{building.area}</Tag>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_300px]">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                TritonNav building detail
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {building.name}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {building.image}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CTAButton
                href={getGoogleMapsUrl(
                  building.coords.lat,
                  building.coords.lng,
                  building.address,
                )}
                external
                className="gap-2"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="/tritonnav/buildings" variant="secondary">
                Back to building directory
              </CTAButton>
            </div>
          </div>

          <aside className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-6">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Address
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {building.address}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Coordinates
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {formatCoordinates(building.coords.lat, building.coords.lng)}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
          <SectionHeading
            eyebrow="Entrances"
            title="Recommended approach points"
            description="Each entrance is written like a wayfinding cue so the experience feels closer to a campus guide than a generic pin."
          />

          <div className="mt-6 space-y-4">
            {building.entrances.map((entrance) => (
              <article
                key={entrance.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <DoorOpen className="h-4 w-4" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {entrance.label}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {formatCoordinates(entrance.coords.lat, entrance.coords.lng)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
          <SectionHeading
            eyebrow="Rooms"
            title="Sample room-level hints"
            description="These notes show how TritonNav can layer in exact room guidance instead of stopping at the building shell."
          />

          <div className="mt-6 space-y-4">
            {building.rooms.map((room) => (
              <article
                key={room.roomNumber}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <School className="h-4 w-4" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-950">
                      Room {room.roomNumber}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {room.entranceHint}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <SectionHeading
          eyebrow="Why this page matters"
          title="This is the route-generated page that proves the app can scale."
          description="The building detail route is generated from data with generateStaticParams, which means the campus directory can grow from five sample buildings into many more without changing the routing architecture."
        />

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 text-sm leading-7 text-slate-600">
          <LocateFixed className="mt-1 h-4 w-4 flex-none text-sky-700" />
          <p>
            Each building can carry its own coordinates, entrance descriptions,
            room hints, and external navigation links while still using the same
            reusable page template.
          </p>
        </div>
      </section>
    </div>
  );
}
