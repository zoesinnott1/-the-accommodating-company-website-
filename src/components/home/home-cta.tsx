import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { RIGHTMOVE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Matches the white-card CTA pattern used on landlords/tenants/about, rather
// than a dark photo banner — no third image sourced for this slot.
export function HomeCta() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-card border border-ink-300 bg-white p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Ready to find your next home?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] text-ink-600">
            Browse our current listings on Rightmove, or get in touch and
            we&apos;ll help you find the right property.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={RIGHTMOVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              View properties on Rightmove
              <ArrowUpRight size={16} aria-hidden />
            </a>
            <Link href="/contact" className="text-[13px] text-ink-600 hover:text-ink-900">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
