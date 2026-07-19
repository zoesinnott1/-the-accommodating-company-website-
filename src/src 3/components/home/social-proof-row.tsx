import { CalendarClock, Home, Star, Timer } from "lucide-react";

const STATS = [
  { icon: CalendarClock, value: "30+", label: "years in Enfield" },
  { icon: Star, value: "4.9 / 5", label: "average client rating" },
  { icon: Home, value: "500+", label: "homes under management" },
  { icon: Timer, value: "< 7 days", label: "average time to let" },
];

export function SocialProofRow() {
  return (
    <div className="mt-9 flex flex-col divide-y divide-ink-300 border-y border-ink-300 sm:flex-row sm:divide-x sm:divide-y-0">
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
  );
}
