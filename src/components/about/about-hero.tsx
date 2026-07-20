import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutHero() {
  return (
    <div className="mx-auto max-w-6xl px-8 pt-14 pb-12">
      <h1 className="max-w-xl text-[38px] font-bold leading-[1.2] tracking-tight text-ink-900">
        The right homes for the right people, since 1992.
      </h1>
      <p className="mt-3.5 max-w-lg text-[15.5px] text-ink-600">
        An independent, family-run lettings and property management
        specialist, built on more than thirty years of local knowledge and
        genuinely personal service.
      </p>
      <div className="mt-6">
        <Link href="/contact" className={cn(buttonVariants({ variant: "primary" }))}>
          Get in touch
        </Link>
      </div>
    </div>
  );
}
