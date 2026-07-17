// Everything under src/modules/properties is intentionally self-contained:
// types, data access, and the presentational card all live here so that
// swapping the placeholder data for the CFP (WinMan) feed later means
// changing this module only — nothing outside it should need to know
// where property data comes from.

export type PropertyStatus = "available" | "let_agreed" | "let";

export interface PropertyImage {
  url: string;
  alt: string;
}

export interface Property {
  /** Stable identifier — will map to the CFP property reference once integrated. */
  id: string;
  slug: string;
  status: PropertyStatus;
  address: string;
  area: string;
  postcode: string;
  pricePcm: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  furnished: "furnished" | "unfurnished" | "part_furnished";
  images: PropertyImage[];
  features: string[];
  summary: string;
}
