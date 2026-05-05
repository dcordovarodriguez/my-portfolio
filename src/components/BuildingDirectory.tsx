"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { UcsdBuilding } from "@/data/buildings";
import { BuildingCard } from "@/components/BuildingCard";

type BuildingDirectoryProps = {
  buildings: UcsdBuilding[];
};

export function BuildingDirectory({ buildings }: BuildingDirectoryProps) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All areas");
  const deferredQuery = useDeferredValue(query);

  const areas = useMemo(
    () => ["All areas", ...new Set(buildings.map((building) => building.area))],
    [buildings],
  );

  const filteredBuildings = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return buildings.filter((building) => {
      const matchesArea = area === "All areas" || building.area === area;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        building.name.toLowerCase().includes(normalizedQuery) ||
        building.shortName.toLowerCase().includes(normalizedQuery) ||
        building.area.toLowerCase().includes(normalizedQuery);

      return matchesArea && matchesQuery;
    });
  }, [area, buildings, deferredQuery]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] md:grid-cols-[minmax(0,1fr)_220px]">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by building, abbreviation, or area"
            className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>

        <label className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Area
          </span>
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none"
          >
            {areas.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-950">
            {filteredBuildings.length}
          </span>{" "}
          building{filteredBuildings.length === 1 ? "" : "s"}.
        </p>
      </div>

      {filteredBuildings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBuildings.map((building) => (
            <BuildingCard
              key={building.id}
              building={building}
              href={`/tritonnav/buildings/${building.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-sky-200 bg-white/80 p-10 text-center">
          <h3 className="text-xl font-semibold text-slate-950">
            No buildings match that search yet.
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Try a building abbreviation like CSB or GEISEL, or switch back to
            all areas.
          </p>
        </div>
      )}
    </div>
  );
}
