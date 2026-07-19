import { Check } from "lucide-react";

// Generic scannable checklist — extracted after the same pattern
// appeared on the landlords page ("Getting your property ready") and
// the tenants page ("Moving-in essentials").
export function TipsList({
  heading,
  description,
  tips,
}: {
  heading: string;
  description: string;
  tips: string[];
}) {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">{heading}</h2>
          <p className="mt-2 text-[13.5px] text-ink-600">{description}</p>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2.5 text-[13.5px] text-ink-900">
              <Check size={16} className="mt-0.5 flex-shrink-0 text-brand-700" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
