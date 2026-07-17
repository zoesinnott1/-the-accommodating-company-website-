import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/home/hero";
import { LandlordTenantPanels } from "@/components/home/landlord-tenant-panels";
import { TeamTeaser } from "@/components/home/team-teaser";
import { Testimonial } from "@/components/home/testimonial";
import { PropertyGrid } from "@/modules/properties/property-grid";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PropertyGrid />
        <LandlordTenantPanels />
        <TeamTeaser />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
