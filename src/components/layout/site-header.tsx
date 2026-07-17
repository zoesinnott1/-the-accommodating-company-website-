import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { HouseLogo } from "@/components/house-logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/properties", label: "Properties" },
  { href: "/landlords", label: "Landlords" },
  { href: "/tenants", label: "Tenants" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-300 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold text-ink-900">
          <HouseLogo className="h-[22px] w-[22px]" />
          The Accommodating Company
        </Link>
        <nav className="hidden gap-6 text-[13.5px] text-ink-600 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:02084478400"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "hidden sm:inline-flex")}
          >
            020 8447 8400
          </a>
          <Link href="/landlords/valuation" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
            Request a valuation
          </Link>
        </div>
      </div>
    </header>
  );
}
