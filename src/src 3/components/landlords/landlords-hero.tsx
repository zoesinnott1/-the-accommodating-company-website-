import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandlordsHero() {
  return (
    <div className="mx-auto max-w-6xl px-8 pt-14 pb-12">
      <h1 className="max-w-xl text-[38px] font-bold leading-[1.2] tracking-tight text-ink-900">
        Renting made refreshingly straightforward.
      </h1>
      <p className="mt-3.5 max-w-lg text-[15.5px] text-ink-600">
        A family-run agency that&apos;s managed homes across Enfield, Barnet and the
        surrounding areas for over thirty years — from a single flat to a
        portfolio of forty, we tailor our service to what you actually need.
      </p>
      <div className="mt-6">
        <Link href="/contact" className={cn(buttonVariants({ variant: "primary" }))}>
          Request a valuation
        </Link>
      </div>
    </div>
  );
}
