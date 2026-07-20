import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandlordsCta() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-card border border-ink-300 bg-white p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Ready for an honest valuation?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] text-ink-600">
            No obligation, no pressure — just a clear view of what your property could
            achieve.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/landlords/valuation" className={cn(buttonVariants({ variant: "primary" }))}>
              Request a valuation
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "secondary" }))}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
