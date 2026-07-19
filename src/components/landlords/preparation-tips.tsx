import { Check } from "lucide-react";

// Condensed from the original site's "Presentation is Key" section — six
// dense paragraphs reduced to short, scannable tips.
const TIPS = [
  "Tidy the exterior — fresh paint, trimmed hedges.",
  "Fix the small things: loose sockets, damaged flooring, dead lightbulbs.",
  "A neutral, fresh coat of paint goes a long way.",
  "Declutter — rooms show better with less in them.",
  "A professional clean, including carpets, shows the property at its best.",
  "Let the light in — remove heavy curtains and ventilate before viewings.",
];

export function PreparationTips() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Getting your property ready
          </h2>
          <p className="mt-2 text-[13.5px] text-ink-600">
            A few small things that make a real difference to how quickly a property
            lets, and at what price.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {TIPS.map((tip) => (
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
