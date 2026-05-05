import { BuildingDirectory } from "@/components/BuildingDirectory";
import { SectionHeading } from "@/components/SectionHeading";
import { UCSD_BUILDINGS } from "@/data/buildings";

export const metadata = {
  title: "TritonNav Buildings",
};

export default function TritonNavBuildingsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Building directory"
        title="Search UCSD buildings by name, abbreviation, or area."
        description="This route turns a simple building dataset into a campus browsing experience. Each card links to a route-generated detail page with coordinates, entrances, rooms, and a Google Maps handoff."
      />

      <BuildingDirectory buildings={UCSD_BUILDINGS} />
    </div>
  );
}
