export type DashiImage = {
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
};

export const dashiHeroImages: DashiImage[] = [
  {
    src: "/images/dashi/hero/dragon-mural.jpg",
    alt: "Dashi Sushi dining room with a colorful dragon mural above wood tables",
    caption: "Dragon mural dining room",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/restaurant/dining-table-spread.jpg",
    alt: "Sunlit Dashi table with sashimi, yakisoba, nigiri, and blue glassware",
    caption: "Sunlit table spread",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/restaurant/exterior-day.jpg",
    alt: "Dashi Sushi storefront on University Avenue in Hillcrest",
    caption: "University Avenue storefront",
    aspect: "portrait",
  },
];

export const dashiGalleryImages: DashiImage[] = [
  ...dashiHeroImages,
  {
    src: "/images/dashi/dishes/salmon-carpaccio.jpg",
    alt: "Salmon carpaccio with lemon miso reduction, ikura, chive oil, and micros",
    caption: "Salmon carpaccio",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/dishes/sashimi-flight.jpg",
    alt: "Fresh sashimi served in a ceramic bowl with shiso and flower garnish",
    caption: "Sashimi flight",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/dishes/yakisoba.jpg",
    alt: "Yakisoba topped with a sunny-side-up egg, bonito flakes, and vegetables",
    caption: "Yakisoba",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/dishes/salmon-crispy-rice.jpg",
    alt: "Salmon crispy rice topped with spicy salmon, sauce, caviar, and chives",
    caption: "Salmon crispy rice",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/team/full-team.jpg",
    alt: "Dashi Sushi team standing together in the dining room",
    caption: "Dashi team",
    aspect: "portrait",
  },
];

export const dashiTeamImages: DashiImage[] = [
  {
    src: "/images/dashi/team/chef-trio.jpg",
    alt: "Three Dashi chefs standing in the dining room",
    caption: "Kitchen team",
    aspect: "portrait",
  },
  {
    src: "/images/dashi/team/full-team.jpg",
    alt: "Full Dashi Sushi staff portrait inside the restaurant",
    caption: "Front and back of house",
    aspect: "portrait",
  },
];
