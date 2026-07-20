import { placeholderTeam } from "@/modules/team/data/placeholder-team";
import { getInitials } from "@/modules/team/get-initials";
import { Card, CardBody } from "@/components/ui/card";

export function TeamGrid() {
  return (
    <section id="team" className="scroll-mt-20 border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          Meet the team
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderTeam.map((member) => (
            <Card key={member.id}>
              <CardBody className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-[15px] font-semibold text-brand-700">
                  {getInitials(member.name)}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-ink-900">
                  {member.name}
                </h3>
                <p className="text-[12.5px] font-medium text-brand-700">{member.role}</p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-600">
                  {member.bio}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
