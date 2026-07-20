import type { Metadata } from "next";
import { Compass, Megaphone, UserCheck, ClipboardCheck, Umbrella, Contact } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LandlordsHero } from "@/components/landlords/landlords-hero";
import { ServiceTiers } from "@/components/landlords/service-tiers";
import { LandlordFees } from "@/components/landlords/landlord-fees";
import { LandlordsCta } from "@/components/landlords/landlords-cta";
import { ProcessSteps } from "@/components/shared/process-steps";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { TipsList } from "@/components/shared/tips-list";
import { TrustStrip } from "@/components/shared/trust-strip";
import { GuideCallout } from "@/components/guides/guide-callout";
import { getLatestGuide } from "@/modules/guides/data/guides";

export const metadata: Metadata = {
  title: "Landlords",
  description:
    "Let only, rent collect, or fully managed — independent, family-run lettings and property management in Enfield since 1992.",
};

// Condensed from the original site's "Letting Procedure" section into a
// single scannable timeline.
const LETTING_STEPS = [
  { title: "Valuation and instruction", body: "We value your property and agree which service tier is right for you." },
  { title: "Marketing and viewings", body: "Extensive advertising and accompanied viewings build a shortlist of suitable applicants." },
  { title: "Referencing and contracts", body: "Full referencing via Homelet, then tenancy agreements and statutory notices prepared for signing." },
  { title: "Move-in", body: "Rent and deposit collected, the deposit registered with the Tenancy Deposit Scheme, and keys released once everything's in place." },
  { title: "Ongoing management", body: "For Rent collect and Fully managed landlords, this continues for the length of the tenancy — inspections, maintenance, and rent collection included." },
];

// Condensed from the original site's 8 sections — "Professionalism" moves
// into the trust strip and "Property Management" moves into the service
// tiers. The 6th (single point of contact) is new: the clearest
// differentiator that came out of the competitor benchmark against
// larger, corporate agents.
const LANDLORD_BENEFITS = [
  { icon: Compass, title: "Local knowledge, honest valuations", body: "We complete hundreds of valuations a year across Enfield, so we know what a property is actually worth — and what small changes might reduce the time it sits empty." },
  { icon: Megaphone, title: "Maximum-exposure marketing", body: "Your property gets extensive exposure across the major property portals and our own site, reviewed regularly — not just wherever happens to be cheapest." },
  { icon: UserCheck, title: "Thorough tenant referencing", body: "Credit checks, employer references, and previous landlord checks on every applicant, before you ever meet them." },
  { icon: ClipboardCheck, title: "Legal compliance, handled", body: "Gas Safety and EPC certificates, a proper inventory, and clear advice on every legal requirement before day one." },
  { icon: Umbrella, title: "Rent protection available", body: "Cover for eviction legal expenses and rent protection through Homelet, subject to referencing." },
  { icon: Contact, title: "A single point of contact", body: "You'll deal with the same person throughout, not a rotating call centre — the same family-run team that's managed properties here since 1992." },
];

// Condensed from the original site's "Presentation is Key" section.
const PREPARATION_TIPS = [
  "Tidy the exterior — fresh paint, trimmed hedges.",
  "Fix the small things: loose sockets, damaged flooring, dead lightbulbs.",
  "A neutral, fresh coat of paint goes a long way.",
  "Declutter — rooms show better with less in them.",
  "A professional clean, including carpets, shows the property at its best.",
  "Let the light in — remove heavy curtains and ventilate before viewings.",
];

export default function LandlordsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LandlordsHero />
        <ServiceTiers />
        <ProcessSteps heading="The letting process" steps={LETTING_STEPS} />
        <LandlordFees />
        <GuideCallout guide={getLatestGuide()} />
        <IconCardGrid heading="Why landlords choose us" items={LANDLORD_BENEFITS} />
        <TipsList
          heading="Getting your property ready"
          description="A few small things that make a real difference to how quickly a property lets, and at what price."
          tips={PREPARATION_TIPS}
        />
        <TrustStrip />
        <LandlordsCta />
      </main>
      <SiteFooter />
    </>
  );
}
