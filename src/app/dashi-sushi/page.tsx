import type { Metadata } from "next";

import { DashiSite } from "@/components/dashi/DashiSite";

export const metadata: Metadata = {
  metadataBase: new URL("https://diegocordova.github.io/my-portfolio"),
  title: "Dashi Sushi | Modern Japanese Cuisine in Hillcrest San Diego",
  description:
    "Explore Dashi Sushi in Hillcrest, San Diego: modern Japanese cuisine, chef specialties, sashimi, nigiri, and approachable premium dining on University Avenue.",
  openGraph: {
    title: "Dashi Sushi | Modern Japanese Cuisine in Hillcrest San Diego",
    description:
      "Real Dashi Sushi menu, photos, walk-in guidance, reviews, and visit details for Hillcrest, San Diego.",
    images: [
      {
        url: "/images/dashi/hero/dragon-mural.jpg",
        width: 1200,
        height: 1600,
        alt: "Dashi Sushi dragon mural dining room in Hillcrest",
      },
    ],
  },
};

export default function DashiSushiPage() {
  return <DashiSite />;
}
