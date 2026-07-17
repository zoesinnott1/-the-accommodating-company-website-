import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Home } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Property } from "./types";

const STATUS_LABEL: Record<Property["status"], string> = {
  available: "To let",
  let_agreed: "Let agreed",
  let: "Let",
};

const FURNISHED_LABEL: Record<Property["furnished"], string> = {
  furnished: "Furnished",
  unfurnished: "Unfurnished",
  part_furnished: "Part furnished",
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.slug}`} aria-label={`${property.address}, ${property.postcode} — ${property.pricePcm} per month`}>
      <Card className="overflow-hidden hover:border-ink-900/30 hover:-translate-y-0.5">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={property.images[0].url}
            alt={property.images[0].alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <CardBody>
          <Badge variant={property.status === "let_agreed" ? "agreed" : "available"}>
            {STATUS_LABEL[property.status]}
          </Badge>
          <p className="mt-2.5 text-[14.5px] font-medium text-ink-900">
            {property.address}, {property.postcode}
          </p>
          <div className="mt-1 flex items-center gap-3 text-[12.5px] text-ink-600">
            <span className="flex items-center gap-1">
              <Bed size={14} aria-hidden /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath size={14} aria-hidden /> {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Home size={14} aria-hidden /> {FURNISHED_LABEL[property.furnished]}
            </span>
          </div>
          <p className="mt-2.5 text-[15px] font-semibold text-ink-900">
            £{property.pricePcm.toLocaleString("en-GB")} pcm
          </p>
        </CardBody>
      </Card>
    </Link>
  );
}
