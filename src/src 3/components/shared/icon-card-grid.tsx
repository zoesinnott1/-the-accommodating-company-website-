import type { LucideIcon } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";

// Generic icon + heading + body card grid — extracted after the same
// pattern appeared on the landlords page ("Why landlords choose us") and
// the tenants page ("Why rent with us"). Reuse for any future benefits
// or feature-highlight section.
export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export function IconCardGrid({
  heading,
  items,
}: {
  heading: string;
  items: IconCardItem[];
}) {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <Card key={title}>
              <CardBody className="p-6">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                  <Icon size={18} className="text-brand-700" aria-hidden />
                </span>
                <h3 className="text-[15px] font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-[13px] text-ink-600">{body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
