import Link from "next/link";
import type { Guide } from "@/modules/guides/types";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="block">
      <Card className="h-full transition-colors hover:border-brand-500">
        <CardBody className="flex h-full flex-col p-6">
          <Badge variant="category">{guide.category}</Badge>
          <h3 className="mt-3 text-[16px] font-semibold leading-snug text-ink-900">
            {guide.title}
          </h3>
          <p className="mt-2 flex-1 text-[13px] text-ink-600">{guide.excerpt}</p>
          <p className="mt-4 text-[12px] text-ink-600">
            {guide.publishedLabel} · {guide.readingTime}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
}
