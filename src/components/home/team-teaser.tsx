import Image from "next/image";
import Link from "next/link";
import { placeholderTeam } from "@/modules/team/data/placeholder-team";
import { Card } from "@/components/ui/card";

export function TeamTeaser() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Meet the team
          </h2>
          <Link href="/about/team" className="text-[13px] text-ink-600 hover:text-ink-900">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placeholderTeam.map((member) => (
            <Card key={member.id} className="p-3.5">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
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
