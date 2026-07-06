export type DashiReview = {
  name: string;
  rating: 5 | 4 | 3 | 2 | 1;
  meta: string;
  quote: string;
};

export const dashiReviews: DashiReview[] = [
  {
    name: "Bobby Shafer",
    rating: 5,
    meta: "Google review excerpt",
    quote:
      "Walked over during dinner rush with no reservation and were told it would be about 20 minutes. Came back and had superb sushi and service. We'd definitely go back.",
  },
  {
    name: "Jennifer Donaldson",
    rating: 5,
    meta: "Google review excerpt",
    quote:
      "Dashi is wonderful! The service was friendly and attentive. We enjoyed everything we ordered too: Omakase Sashimi, Salmon Crispy Rice, Pan Fried Gyoza, Caramel Matcha Flan, and Blueberry Panna Cotta.",
  },
  {
    name: "Crissy Leen",
    rating: 5,
    meta: "Google review excerpt",
    quote:
      "This is our third weekend in a row coming here and for many more to come. Wow! Thank you so much dear Karen and sushi team.",
  },
];
