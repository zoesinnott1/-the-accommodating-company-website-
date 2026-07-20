import Link from "next/link";
import { placeholderTeam } from "@/modules/team/data/placeholder-team";
import { getInitials } from "@/modules/team/get-initials";
import { Card } from "@/components/ui/card";

// Shows the first four team members only — the full team, with bios,
// lives on the About page (#team). Kept in sync with that page's data
// source, so there's only one place to update names/roles.
export function TeamTeaser() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Meet the team
          </h2>
          <Link href="/about#team" className="text-[13px] text-ink-600 hover:text-ink-900">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placeholderTeam.slice(0, 4).map((member) => (
            <Card key={member.id} className="p-3.5">
              <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-brand-50">
                <span className="text-[22px] font-semibold text-brand-700">
                  {getInitials(member.name)}
                </span>
              </div>
              <p className="mt-3 text-[13.5px] font-medium text-ink-900">{member.name}</p>
              <p className="text-[12px] text-ink-600">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
