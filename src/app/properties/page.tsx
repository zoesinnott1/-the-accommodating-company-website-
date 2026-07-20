import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Properties",
  description: "Search homes to rent with The Accommodating Company.",
};

export default function PropertiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ComingSoon
          heading="Properties"
          description="Our full property search is still being built. In the meantime, call us on 020 8447 8400 to hear about current availability."
        />
      </main>
      <SiteFooter />
    </>
  );
}
