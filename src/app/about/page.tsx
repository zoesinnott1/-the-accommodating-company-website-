import type { Metadata } from "next";
import { Heart, Users, MapPin, ShieldCheck, Award, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { TeamGrid } from "@/components/about/team-grid";
import { AboutCta } from "@/components/about/about-cta";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { TrustStrip } from "@/components/shared/trust-strip";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent, family-run lettings and property management specialists in North London since 1992 — meet the team and see our accreditations.",
};

// Distinct from the landlord/tenant benefit cards — these are about the
// company itself, not a pitch to either audience specifically.
const VALUES = [
  {
    icon: Heart,
    title: "Genuinely personal service",
    body: "You'll always deal with a real person who knows your property, not a call centre script.",
  },
  {
    icon: Users,
    title: "Family-run since 1992",
    body: "Still independently owned and run by the same family that founded it, over thirty years ago.",
  },
  {
    icon: MapPin,
    title: "Local, not generic",
    body: "We work across North London, so our advice on prices, tenants and the market is grounded in streets we actually know.",
  },
  {
    icon: ShieldCheck,
    title: "Fully compliant, properly protected",
    body: "Regulated and accredited, with landlord and tenant money protected at every step.",
  },
  {
    icon: Award,
    title: "High standards, consistently",
    body: "The same exacting standards for every property, whether it's a single flat or part of a larger portfolio.",
  },
  {
    icon: Handshake,
    title: "Built on long-term relationships",
    body: "Many of our landlords and tenants have been with us for years — that's not an accident.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <OurStory />
        <IconCardGrid heading="What we stand for" items={VALUES} />
        <TrustStrip description="We're a member of The National Approved Letting Scheme (NALS) and The Property Ombudsman, and comply with Tenancy Deposit Protection Scheme legislation. We're also a SAFEagent, meaning landlord and tenant money is protected through a client money protection scheme." />
        <TeamGrid />
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  );
}
