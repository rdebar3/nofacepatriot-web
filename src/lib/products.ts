export type Product = {
  slug: string;
  name: string;
  price: number; // USD cents
  description: string;
  longDescription: string;
  stripePriceId?: string;
};

export const products: Product[] = [
  {
    slug: "defiance-tee",
    name: "Defiance Tee",
    price: 3200,
    description: "Black tee. Stand up. Stay loud.",
    longDescription:
      "Heavyweight black cotton tee with the No Face Patriot wordmark. Built for people who still believe in country, courage, and saying it out loud. Placeholder art — final print TBD.",
    stripePriceId: "",
  },
  {
    slug: "no-face-hoodie",
    name: "No Face Hoodie",
    price: 5800,
    description: "Warm. Bold. Unapologetic.",
    longDescription:
      "Premium fleece hoodie in deep navy/black. Soft inside, hard outside — just like the message. Placeholder design until official art lands.",
    stripePriceId: "",
  },
  {
    slug: "patriot-cap",
    name: "Patriot Cap",
    price: 2800,
    description: "Everyday lid for everyday patriots.",
    longDescription:
      "Structured cap with embroidered wordmark placeholder. Adjustable fit. Red/white/navy accents. Ships when art is locked.",
    stripePriceId: "",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
