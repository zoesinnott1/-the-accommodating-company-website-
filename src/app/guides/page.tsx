import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { GuideCard } from "@/components/guides/guide-card";
import { guides } from "@/modules/guides/data/guides";

export const metadata: Metadata = {
  title: "Guides & Updates",
  description:
    "Clear, practical guidance on lettings legislation and industry updates from The Accommodating Company.",
};

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-6xl px-8 pt-14 pb-10">
          <h1 className="max-w-xl text-[32px] font-bold leading-[1.2] tracking-tight text-ink-900">
            Guides &amp; Updates
          </h1>
          <p className="mt-3 max-w-lg text-[14.5px] text-ink-600">
            Clear, practical guidance on lettings legislation and industry
            changes — from the team who handle it for our landlords and
            tenants every day.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-8 pb-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
