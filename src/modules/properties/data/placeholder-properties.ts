import type { Property } from "../types";

// Realistic placeholder data standing in for the live CFP (WinMan) feed.
// Shape mirrors what we expect back from CFP so the swap in
// get-properties.ts stays a one-file change — see that file for the seam.
export const placeholderProperties: Property[] = [
  {
    id: "p1",
    slug: "gladbeck-way-en2",
    status: "available",
    address: "Gladbeck Way",
    area: "Enfield Town",
    postcode: "EN2",
    pricePcm: 2300,
    bedrooms: 3,
    bathrooms: 1,
    propertyType: "End of terrace house",
    furnished: "unfurnished",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=70",
        alt: "Living room at Gladbeck Way, Enfield Town",
      },
    ],
    features: [
      "Newly decorated throughout",
      "Gas central heating",
      "Garage and off-street parking",
      "South-facing private garden",
    ],
    summary: "A compact three-bedroom house moments from Enfield Chase station.",
  },
  {
    id: "p2",
    slug: "the-green-n14",
    status: "available",
    address: "The Green",
    area: "Southgate",
    postcode: "N14",
    pricePcm: 1675,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Apartment",
    furnished: "furnished",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=70",
        alt: "Living room at The Green, Southgate",
      },
    ],
    features: ["Furnished throughout", "Allocated parking", "Close to Southgate station"],
    summary: "A well-presented two-bedroom apartment in the heart of Southgate.",
  },
  {
    id: "p3",
    slug: "grange-gardens-n14",
    status: "let_agreed",
    address: "Grange Gardens",
    area: "Southgate",
    postcode: "N14",
    pricePcm: 1650,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Maisonette",
    furnished: "unfurnished",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=70",
        alt: "Living room at Grange Gardens, Southgate",
      },
    ],
    features: ["Private entrance", "Own garden", "Unfurnished, ready to move in"],
    summary: "A quiet two-bedroom maisonette with its own garden.",
  },
];
