import type { Property } from "./types";
import { placeholderProperties } from "./data/placeholder-properties";

/**
 * The one seam between the rest of the application and wherever property
 * data actually lives. Today that's the placeholder array below; once the
 * CFP (WinMan) feed is available, implement `CfpPropertySource` against
 * this same interface and swap the export at the bottom of this file —
 * no other file in the app should import the placeholder data directly.
 */
interface PropertySource {
  getAll(): Promise<Property[]>;
  getBySlug(slug: string): Promise<Property | null>;
}

class PlaceholderPropertySource implements PropertySource {
  async getAll(): Promise<Property[]> {
    return placeholderProperties;
  }

  async getBySlug(slug: string): Promise<Property | null> {
    return placeholderProperties.find((property) => property.slug === slug) ?? null;
  }
}

// Swap this line for `new CfpPropertySource(...)` when the live feed is ready.
const propertySource: PropertySource = new PlaceholderPropertySource();

export async function getProperties(): Promise<Property[]> {
  return propertySource.getAll();
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return propertySource.getBySlug(slug);
}
