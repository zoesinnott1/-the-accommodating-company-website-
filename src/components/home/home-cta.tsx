import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { RIGHTMOVE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HomeCta() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-card bg-ink-900 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Ready to find your next home?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] text-white/60">
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
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-lg border border-white/25 px-4 text-[13.5px] font-medium text-white hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
