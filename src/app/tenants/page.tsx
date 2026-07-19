import type { Metadata } from "next";
import { DoorOpen, FileCheck2, Zap, ShieldCheck, Wrench, Contact } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TenantsHero } from "@/components/tenants/tenants-hero";
import { TenantFees } from "@/components/tenants/tenant-fees";
import { TenantsCta } from "@/components/tenants/tenants-cta";
import { ProcessSteps } from "@/components/shared/process-steps";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { TipsList } from "@/components/shared/tips-list";
import { TrustStrip } from "@/components/shared/trust-strip";

export const metadata: Metadata = {
  title: "Tenants",
  description:
    "Search homes to rent in Enfield, see our tenant fees, and find out how renting with an independent, family-run agency works.",
};

// Condensed from the original site's Registering / Finding the right
// property / Making an offer / Offer agreed sections into one timeline.
const RENTING_STEPS = [
  { title: "Register your search", body: "Tell us what you're looking for, by phone, online, or in person." },
  { title: "View with us", body: "We'll arrange a viewing at a time that suits you, with someone on hand to answer questions." },
  { title: "Apply and reference", body: "A holding deposit reserves the property while we complete referencing." },
  { title: "Sign and move in", body: "Contracts signed, deposit registered, keys handed over." },
];

// Distinct from the landlords benefits list — these are tenant-specific
// reasons to rent through us, not a repeat of the landlord pitch (aside
// from the single point of contact, kept deliberately consistent).
const TENANT_BENEFITS = [
  { icon: DoorOpen, title: "Viewings arranged around you", body: "We book viewings for a time that suits you, and someone from our team is on hand to answer questions as you look round." },
  { icon: FileCheck2, title: "Fair, transparent fees", body: "Nothing beyond what the Tenant Fees Act actually allows, set out plainly before you apply." },
  { icon: Zap, title: "Fast referencing", body: "A straightforward process so you're not left waiting weeks to hear back." },
  { icon: ShieldCheck, title: "Deposit protection, guaranteed", body: "Held securely as a SAFEagent Client Money Protection member." },
  { icon: Wrench, title: "Managed properties, properly maintained", body: "Repairs and maintenance handled promptly by our property management team." },
  { icon: Contact, title: "A single point of contact", body: "The same team throughout your tenancy, not a rotating call centre." },
];

// New content: none of this existed on the original site, added because
// it's genuinely useful before moving day rather than to pad the page.
const MOVING_IN_TIPS = [
  "Have photo ID and right-to-rent documents ready.",
  "Line up your employer and previous landlord as referees in advance.",
  "Arrange contents insurance before you move in.",
  "Take meter readings on the day you get your keys.",
  "Budget for one month's rent plus a five-week deposit upfront.",
  "Set a date to transfer utilities into your name.",
];

export default function TenantsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TenantsHero />
        <ProcessSteps heading="How it works" steps={RENTING_STEPS} />
        <TenantFees />
        <IconCardGrid heading="Why rent with us" items={TENANT_BENEFITS} />
        <TipsList
          heading="Moving-in essentials"
          description="A short checklist to make move-in day go smoothly."
          tips={MOVING_IN_TIPS}
        />
        <TrustStrip />
        <TenantsCta />
      </main>
      <SiteFooter />
    </>
  );
}
