import Link from "next/link";
import { HouseLogo } from "@/components/house-logo";

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Explore",
    links: [
      { href: "/properties", label: "Properties" },
      { href: "/landlords", label: "Landlords" },
      { href: "/tenants", label: "Tenants" },
      { href: "/about/team", label: "Meet the team" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about/reviews", label: "Reviews" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy policy" },
      { href: "/legal/complaints-procedure", label: "Complaints procedure" },
      { href: "/legal/fees", label: "Fees" },
      { href: "/legal/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="py-10 text-[12.5px] text-ink-600">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[13.5px] font-semibold text-ink-900">
              <HouseLogo className="h-5 w-5" />
              The Accommodating Company
            </div>
            <p>
              52 Browning Road, Enfield, Middlesex EN2 0EN
              <br />
              020 8447 8400
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-3 text-[12.5px] font-medium text-ink-900">{column.heading}</h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-ink-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-ink-300 pt-5 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} The Accommodating Company. Member of The Property
            Ombudsman &amp; NALS Client Money Protection.
          </span>
        </div>
      </div>
    </footer>
  );
}
