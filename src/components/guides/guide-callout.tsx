import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Guide } from "@/modules/guides/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Contextual cross-link used on the landlords and tenants pages — points at
// a specific guide rather than the whole /guides index, so it reads as a
// relevant recommendation rather than a generic nav link.
export function GuideCallout({ guide }: { guide: Guide }) {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <Link href={`/guides/${guide.slug}`} className="block">
          <Card className="transition-colors hover:border-brand-500">
            <CardBody className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="neutral">{guide.category}</Badge>
                <h3 className="mt-2 text-[15px] font-semibold text-ink-900">{guide.title}</h3>
                <p className="mt-1 text-[13px] text-ink-600">{guide.excerpt}</p>
              </div>
              <span className="flex flex-shrink-0 items-center gap-1.5 text-[13px] font-medium text-brand-700">
                Read the guide
                <ArrowRight size={15} aria-hidden />
              </span>
            </CardBody>
          </Card>
        </Link>
      </div>
    </section>
  );
}
