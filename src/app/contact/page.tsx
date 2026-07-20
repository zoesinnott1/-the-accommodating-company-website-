import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Accommodating Company.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ComingSoon
          heading="Contact us"
          description="This page is still being built. In the meantime, call us on 020 8447 8400."
        />
      </main>
      <SiteFooter />
    </>
  );
}
