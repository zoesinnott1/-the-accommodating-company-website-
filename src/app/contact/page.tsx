import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactForm } from "@/components/contact/contact-form";
import { TrustStrip } from "@/components/shared/trust-strip";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Accommodating Company — address, phone, email, opening hours, and an enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-6xl px-8 pt-14 pb-10">
          <h1 className="max-w-xl text-[32px] font-bold leading-[1.2] tracking-tight text-ink-900">
            Get in touch
          </h1>
          <p className="mt-3 max-w-lg text-[14.5px] text-ink-600">
            Call, email, or send us a message below — whichever&apos;s easiest
            for you.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-8 pb-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <ContactDetails />
              <ContactMap />
            </div>
            <ContactForm />
          </div>
        </div>

        <TrustStrip />
      </main>
      <SiteFooter />
    </>
  );
}
