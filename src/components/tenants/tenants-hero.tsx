import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TenantsHero() {
  return (
    <div className="mx-auto max-w-6xl px-8 pt-14 pb-12">
      <h1 className="max-w-xl text-[38px] font-bold leading-[1.2] tracking-tight text-ink-900">
        Your next home, without the runaround.
      </h1>
      <p className="mt-3.5 max-w-lg text-[15.5px] text-ink-600">
        Straightforward referencing, clear fees, and a team on hand from your
        first viewing through to the end of your tenancy.
      </p>
      <div className="mt-6">
        <Link href="/properties" className={cn(buttonVariants({ variant: "primary" }))}>
          Search properties
        </Link>
      </div>
    </div>
  );
}
