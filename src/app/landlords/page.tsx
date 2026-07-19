import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LandlordsHero } from "@/components/landlords/landlords-hero";
import { ServiceTiers } from "@/components/landlords/service-tiers";
import { LettingProcess } from "@/components/landlords/letting-process";
import { LandlordFees } from "@/components/landlords/landlord-fees";
import { BenefitsGrid } from "@/components/landlords/benefits-grid";
import { PreparationTips } from "@/components/landlords/preparation-tips";
import { TrustStrip } from "@/components/landlords/trust-strip";
import { LandlordsCta } from "@/components/landlords/landlords-cta";

export const metadata: Metadata = {
  title: "Landlords",
  description:
    "Let only, rent collect, or fully managed — independent, family-run lettings and property management in Enfield since 1992.",
};

export default function LandlordsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LandlordsHero />
        <ServiceTiers />
        <LettingProcess />
        <LandlordFees />
        <BenefitsGrid />
        <PreparationTips />
        <TrustStrip />
        <LandlordsCta />
      </main>
      <SiteFooter />
    </>
  );
}
