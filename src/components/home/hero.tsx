import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { RIGHTMOVE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SocialProofRow } from "./social-proof-row";

// Phase 1 repositioning: the on-site area/beds/price search form is gone.
// We don't have live listings data to search over, so it was a promise the
// site couldn't keep — visitors now go straight to the branch's real
// Rightmove listings instead.
export function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-8 pt-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-[38px] font-bold leading-[1.2] tracking-tight text-ink-900">
            Renting, without the runaround.
          </h1>
          <p className="mt-3.5 max-w-lg text-[15.5px] text-ink-600">
            Thirty years of experience across Enfield, Barnet and the surrounding
            areas, with every landlord and tenant treated like a neighbour.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={RIGHTMOVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              View our latest properties
              <ArrowUpRight size={16} aria-hidden />
            </a>
            <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              Get in touch
            </Link>
          </div>
        </div>
        <ImagePlaceholder
          label={"Photo placeholder—e.g. a well-kept period terrace on a leafy Enfield street"}
          className="aspect-[4/3.2]"
        />
      </div>

      <SocialProofRow />
    </div>
  );
}
