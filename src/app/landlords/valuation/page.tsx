import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ValuationForm } from "@/components/landlords/valuation-form";

export const metadata: Metadata = {
  title: "Request a valuation",
  description: "Tell us about your property and we'll be in touch to arrange a valuation.",
};

export default function ValuationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-2xl px-8 pt-14 pb-6">
          <h1 className="text-[32px] font-bold leading-[1.2] tracking-tight text-ink-900">
            Request a valuation
          </h1>
          <p className="mt-3 text-[14.5px] text-ink-600">
            Tell us a little about your property and yourself, and we&apos;ll
            be in touch to arrange a valuation.
          </p>
        </div>
        <ValuationForm />
      </main>
      <SiteFooter />
    </>
  );
}
