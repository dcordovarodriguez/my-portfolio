export const dashiSite = {
  name: "Dashi Sushi",
  tagline: "Modern Japanese cuisine in Hillcrest",
  description:
    "Accessible premium sushi, chef specialties, and warm hospitality in the heart of Hillcrest, San Diego.",
  address: "503 University Ave, San Diego, CA",
  neighborhood: "Hillcrest, San Diego",
  phone: "619-739-6466",
  phoneHref: "tel:+16197396466",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=503%20University%20Ave%2C%20San%20Diego%2C%20CA",
  instagramHref: "https://www.instagram.com/dashi.sd/?hl=en",
  emailStatus:
    "Public email pending final confirmation: aris@dashisd.com and info@dashid.com appear in source materials.",
  hoursNote: "Walk-ins are the priority. Call to confirm current service hours or larger-party availability.",
} as const;

export const dashiNav = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Walk-ins", href: "#walk-ins" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
] as const;
