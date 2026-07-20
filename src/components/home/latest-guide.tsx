import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestGuide } from "@/modules/guides/data/guides";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LatestGuide() {
  const guide = getLatestGuide();

  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Guides &amp; Updates
          </h2>
          <Link href="/guides" className="text-[13px] text-ink-600 hover:text-ink-900">
            View all
          </Link>
        </div>
        <Link href={`/guides/${guide.slug}`} className="block">
          <Card className="transition-colors hover:border-brand-500">
            <CardBody className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="neutral">{guide.category}</Badge>
                <h3 className="mt-2 text-[16px] font-semibold text-ink-900">{guide.title}</h3>
                <p className="mt-1.5 max-w-lg text-[13px] text-ink-600">{guide.excerpt}</p>
                <p className="mt-3 text-[12px] text-ink-600">
                  {guide.publishedLabel} · {guide.readingTime}
                </p>
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
