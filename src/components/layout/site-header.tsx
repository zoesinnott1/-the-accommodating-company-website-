import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HouseLogo } from "@/components/house-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { RIGHTMOVE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// "Properties" no longer points at an on-site search (see Phase 1
// repositioning) — it's handled separately below as an external link to
// Rightmove, styled to stand out from the internal nav links.
const NAV_LINKS = [
  { href: "/landlords", label: "Landlords" },
  { href: "/tenants", label: "Tenants" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-300 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-[14px] font-semibold text-ink-900 sm:text-[15px]">
          <HouseLogo className="h-[22px] w-[22px] flex-shrink-0" />
          <span className="whitespace-nowrap">The Accommodating Company</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13.5px] text-ink-600 md:flex">
          <a
            href={RIGHTMOVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-600"
          >
            Latest properties
            <ArrowUpRight size={13} aria-hidden />
          </a>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href="tel:02084478400" className="text-[13.5px] text-ink-600 hover:text-ink-900">
            020 8447 8400
          </a>
          <Link href="/landlords/valuation" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
            Request a valuation
          </Link>
        </div>
        <MobileNav navLinks={NAV_LINKS} />
      </div>
    </header>
  );
}
