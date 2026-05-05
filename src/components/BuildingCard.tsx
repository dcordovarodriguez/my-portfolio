import Link from "next/link";
import { ArrowRight, Building2, MapPinned } from "lucide-react";

import type { UcsdBuilding } from "@/data/buildings";
import { Tag } from "@/components/Tag";

type BuildingCardProps = {
  building: UcsdBuilding;
  href: string;
};

export function BuildingCard({ building, href }: BuildingCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(14,24,45,0.12)]">
      <div className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.75),_transparent_40%),linear-gradient(135deg,_#0f172a_0%,_#1e3a8a_50%,_#38bdf8_100%)] p-6 text-white">
        <div className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] backdrop-blur">
          {building.shortName}
        </div>
        <div className="max-w-xs space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-sky-100">
              {building.area}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {building.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap gap-2">
          <Tag>{building.shortName}</Tag>
          <Tag>{building.area}</Tag>
        </div>

        <div className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <MapPinned className="mt-0.5 h-4 w-4 flex-none text-sky-700" />
          <p>{building.address}</p>
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
        >
          View details
          <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
