import { CalendarClock, MapPin, Users } from "lucide-react";

// Restructured from the company's own "about" copy for readability — same
// facts, split into a shorter lead paragraph plus a scannable stat row,
// rather than one dense block of text.
const STATS = [
  { icon: CalendarClock, value: "1992", label: "Founded" },
  { icon: MapPin, value: "30+ years", label: "In North London" },
  { icon: Users, value: "Family-run", label: "Independent, not a chain" },
];

export function OurStory() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Our story
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
            We&apos;re an independent, family-run lettings and property
            management specialist, established in North London in 1992.
            More than three decades on, we&apos;re still guided by the same
            idea we started with: finding the right homes for the right
            people, backed by a level of service that&apos;s genuinely hard
            to find elsewhere.
          </p>
        </div>

        <div className="mt-8 flex flex-col divide-y divide-ink-300 border-y border-ink-300 sm:flex-row sm:divide-x sm:divide-y-0">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-1 items-center gap-3 py-4 sm:px-6 sm:py-5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50">
                <Icon size={18} className="text-brand-700" aria-hidden />
              </span>
              <span>
                <span className="block text-[19px] font-semibold leading-tight text-ink-900">
                  {value}
                </span>
                <span className="text-[12.5px] text-ink-600">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
