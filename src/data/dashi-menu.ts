export type DashiMenuCategory =
  | "Starters"
  | "Chef Specialties"
  | "Entrees"
  | "Nigiri / Sashimi / Temaki";

export type DashiMenuItem = {
  category: DashiMenuCategory;
  name: string;
  price: string;
  description: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

export const dashiMenuCategories: DashiMenuCategory[] = [
  "Starters",
  "Chef Specialties",
  "Entrees",
  "Nigiri / Sashimi / Temaki",
];

export const dashiMenuItems: DashiMenuItem[] = [
  {
    category: "Starters",
    name: "Mango Coconut Ceviche",
    price: "$14",
    description: "Sesame shrimp crackers.",
    image: "/images/dashi/dishes/sashimi-salad.jpg",
    imageAlt: "Colorful seafood salad with sesame shrimp cracker",
  },
  {
    category: "Starters",
    name: "Salmon Crispy Rice",
    price: "$14",
    description: "Spicy salmon tartare, wasabi mayo, pickled onion.",
    image: "/images/dashi/dishes/salmon-crispy-rice.jpg",
    imageAlt: "Salmon crispy rice topped with spicy salmon and wasabi mayo",
    featured: true,
  },
  {
    category: "Starters",
    name: "Chicken Karaage",
    price: "$10",
    description: "Japanese fried chicken, kewpie mayo, yuzu salt.",
    image: "/images/dashi/dishes/chicken-karaage.jpg",
    imageAlt: "Chicken karaage with kewpie mayo and lemon wedge",
  },
  {
    category: "Starters",
    name: "Miso Butter Mac & Cheese",
    price: "$15",
    description: "Sauteed mushrooms, corn.",
    image: "/images/dashi/dishes/miso-butter-mac.jpg",
    imageAlt: "Miso butter mac and cheese in a ceramic bowl",
  },
  {
    category: "Starters",
    name: "Grilled Wagyu Skewer 2pc",
    price: "$16",
    description: "Yuzu kosho.",
    image: "/images/dashi/dishes/wagyu.jpg",
    imageAlt: "Wagyu dish plated with crisp garnish and greens",
  },
  {
    category: "Starters",
    name: "Geso Calamari",
    price: "$13",
    description: "Fried squid tentacles, lotus root chip, Japanese-style tartar sauce.",
  },
  {
    category: "Starters",
    name: "Edamame",
    price: "$7",
    description: "Salted or garlic yuzu.",
  },
  {
    category: "Starters",
    name: "Akadashi Miso Soup",
    price: "$5",
    description: "Red miso paste, green onion, wakame, tofu.",
  },
  {
    category: "Starters",
    name: "Sunomono Salad",
    price: "$7",
    description: "Pickled Japanese cucumbers, wakame, ponzu.",
  },
  {
    category: "Starters",
    name: "House Salad",
    price: "$6",
    description: "Baby arugula, green apple, red onion, citrus sesame dressing.",
  },
  {
    category: "Starters",
    name: "Pan Fried Gyoza 6pc",
    price: "$8",
    description: "Wagyu ginger soy vinaigrette.",
  },
  {
    category: "Chef Specialties",
    name: "Salmon Carpaccio",
    price: "$18",
    description: "Lemon miso reduction, chive oil, ikura, micros.",
    image: "/images/dashi/dishes/salmon-carpaccio.jpg",
    imageAlt: "Salmon carpaccio with lemon miso reduction and ikura",
    featured: true,
  },
  {
    category: "Chef Specialties",
    name: "Halibut Crudo",
    price: "$18",
    description: "Raspberry vinaigrette, sea salt, lime zest, micros.",
    image: "/images/dashi/dishes/halibut-crudo.jpg",
    imageAlt: "Halibut crudo with raspberry vinaigrette in a dark ceramic bowl",
  },
  {
    category: "Chef Specialties",
    name: "Tuna Tataki",
    price: "$18",
    description: "Sesame-garlic emulsion, truffle aioli, crispy potato threads.",
    image: "/images/dashi/dishes/wagyu.jpg",
    imageAlt: "Tataki-style plated fish with crispy threads and greens",
  },
  {
    category: "Chef Specialties",
    name: "Sashimi Flight",
    price: "$25",
    description: "12pc of our daily freshest fish.",
    image: "/images/dashi/dishes/sashimi-flight.jpg",
    imageAlt: "Sashimi flight served in a blue ceramic bowl",
    featured: true,
  },
  {
    category: "Chef Specialties",
    name: "Omakase Sashimi",
    price: "$58",
    description: "21pc chef's choice premium platter.",
  },
  {
    category: "Chef Specialties",
    name: "Classic Nigiri Set",
    price: "$25",
    description: "6pc essentials: salmon, tuna, albacore, ebi, 2 chef's daily picks.",
  },
  {
    category: "Chef Specialties",
    name: "Tokusen Nigiri",
    price: "$45",
    description: "10pc chef's choice signature set.",
  },
  {
    category: "Entrees",
    name: "Sashimi Salad",
    price: "$25",
    description:
      "Baby arugula topped with variety of fish, cherry tomato, burdock chips, green apple, citrus sesame dressing.",
    image: "/images/dashi/dishes/sashimi-salad.jpg",
    imageAlt: "Sashimi salad with crisp cracker, greens, and diced fish",
  },
  {
    category: "Entrees",
    name: "Kama",
    price: "$18",
    description: "Grilled salmon or yellowtail collar served with rice, house salad.",
  },
  {
    category: "Entrees",
    name: "Chicken Teriyaki Bowl",
    price: "$17",
    description: "Served with seasoned veggies, white rice.",
    image: "/images/dashi/dishes/chicken-teriyaki-bowl.jpg",
    imageAlt: "Chicken teriyaki bowl with vegetables in a ceramic bowl",
  },
  {
    category: "Entrees",
    name: "Yakisoba",
    price: "$16",
    description:
      "Stir-fried soba noodles tossed in sweet sauce with veggies, seafood, sunny-side-up egg, kewpie mayo, aonori, bonito flakes, pickled ginger.",
    image: "/images/dashi/dishes/yakisoba.jpg",
    imageAlt: "Yakisoba with seafood, vegetables, and sunny-side-up egg",
    featured: true,
  },
  {
    category: "Entrees",
    name: "Kalbi",
    price: "$25",
    description:
      "Sake-infused grilled BBQ short ribs served with Chinese broccoli, white rice, house salad.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Salmon / Sake",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
    image: "/images/dashi/dishes/salmon-sake.jpg",
    imageAlt: "Salmon sake sashimi with shiso and flower garnish",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Salmon Belly / Sake Toro",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Tuna / Akami",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Tuna Belly / Toro",
    price: "$15 / $29",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
    image: "/images/dashi/dishes/toro-nigiri.jpg",
    imageAlt: "Toro nigiri on a black rectangular plate",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Yellowtail / Hamachi",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Yellowtail Belly / Hamachi Toro",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Albacore / Bincho",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Halibut / Hirame",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Scallop / Hotate",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Sea Bream / Madai",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Golden Eye / Kinmedai",
    price: "$10.5 / $19",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Amberjack / Kanpachi",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Mackerel / Saba",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Horse Mackerel / Aji",
    price: "$8.5 / $17",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Sweet Shrimp / Amaebi",
    price: "$14.5",
    description: "All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Snow Crab Leg / Zuwaigani",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Eel / Unagi",
    price: "$7.5 / $16",
    description: "Nigiri / sashimi pricing. All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Squid / Ika",
    price: "$7.5",
    description: "All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Salmon Egg / Ikura",
    price: "$7.5",
    description: "All nigiri served with wasabi.",
    image: "/images/dashi/dishes/ikura.jpg",
    imageAlt: "Ikura nigiri with salmon egg and scallop over rice",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Sea Urchin / Uni",
    price: "$20",
    description: "All nigiri served with wasabi.",
  },
  {
    category: "Nigiri / Sashimi / Temaki",
    name: "Sweet Egg / Tamago",
    price: "$6.5",
    description: "All nigiri served with wasabi.",
  },
];

export const featuredDashiItems = dashiMenuItems.filter((item) => item.featured);
