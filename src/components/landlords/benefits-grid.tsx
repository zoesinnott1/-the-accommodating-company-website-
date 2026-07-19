import { Compass, Megaphone, UserCheck, ClipboardCheck, Umbrella, Contact } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";

// Condensed from the original site's 8 sections — "Professionalism" moves
// into the trust strip and "Property Management" moves into the service
// tiers. The 6th card (single point of contact) is new: it's the clearest
// differentiator that came out of the competitor benchmark against
// larger, corporate agents.
const BENEFITS = [
  {
    icon: Compass,
    title: "Local knowledge, honest valuations",
    body: "We complete hundreds of valuations a year across Enfield, so we know what a property is actually worth — and what small changes might reduce the time it sits empty.",
  },
  {
    icon: Megaphone,
    title: "Maximum-exposure marketing",
    body: "Your property gets extensive exposure across the major property portals and our own site, reviewed regularly — not just wherever happens to be cheapest.",
  },
  {
    icon: UserCheck,
    title: "Thorough tenant referencing",
    body: "Credit checks, employer references, and previous landlord checks on every applicant, before you ever meet them.",
  },
  {
    icon: ClipboardCheck,
    title: "Legal compliance, handled",
    body: "Gas Safety and EPC certificates, a proper inventory, and clear advice on every legal requirement before day one.",
  },
  {
    icon: Umbrella,
    title: "Rent protection available",
    body: "Cover for eviction legal expenses and rent protection through Homelet, subject to referencing.",
  },
  {
    icon: Contact,
    title: "A single point of contact",
    body: "You'll deal with the same person throughout, not a rotating call centre — the same family-run team that's managed properties here since 1992.",
  },
];

export function BenefitsGrid() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          Why landlords choose us
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
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
