import { MapPin, Users, ShieldCheck, Timer, Banknote, HeartHandshake } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/home/hero";
import { PhotoBand } from "@/components/home/photo-band";
import { LandlordTenantPanels } from "@/components/home/landlord-tenant-panels";
import { TeamTeaser } from "@/components/home/team-teaser";
import { Testimonial } from "@/components/home/testimonial";
import { LatestGuide } from "@/components/home/latest-guide";
import { HomeCta } from "@/components/home/home-cta";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { TrustStrip } from "@/components/shared/trust-strip";

// Phase 1 repositioning: property search and the property listings grid
// have been removed from the live site (no data source to search over yet).
// The underlying property module (src/modules/properties/) is untouched and
// stays in the codebase, ready to be wired back in once a live feed exists —
// see src/modules/properties/get-properties.ts.
const WHY_CHOOSE_US = [
  {
    icon: MapPin,
    title: "Local, independent knowledge",
    body: "Thirty years letting and managing homes across Enfield, Barnet and North London — we know the streets, not just the postcodes.",
  },
  {
    icon: Users,
    title: "A dedicated point of contact",
    body: "No call centres. You deal with the same person, who knows your property or tenancy.",
  },
  {
    icon: ShieldCheck,
    title: "Fully accredited and compliant",
    body: "Members of NALS, The Property Ombudsman and client money protection schemes — properly regulated, properly protected.",
  },
  {
    icon: Timer,
    title: "Fast, responsive service",
    body: "Homes let in under 7 days on average, and repairs reported and actioned quickly through our online tools.",
  },
  {
    icon: Banknote,
    title: "Transparent fees",
    body: "Clear pricing for landlords and tenants — no hidden charges, explained upfront.",
  },
  {
    icon: HeartHandshake,
    title: "Family-run, since day one",
    body: "Still an independent, family-run business — treating every landlord and tenant like a neighbour, not an account number.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <IconCardGrid heading="Why choose us" items={WHY_CHOOSE_US} />
        <PhotoBand />
        <LandlordTenantPanels />
        <TeamTeaser />
        <LatestGuide />
        <Testimonial />
        <TrustStrip />
        <HomeCta />
      </main>
      <SiteFooter />
    </>
  );
}
