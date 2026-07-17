import Link from "next/link";
import { getProperties } from "./get-properties";
import { PropertyCard } from "./property-card";

export async function PropertyGrid() {
  const properties = await getProperties();

  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Homes ready to view
          </h2>
          <Link href="/properties" className="text-[13px] text-ink-600 hover:text-ink-900">
            View all properties
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
