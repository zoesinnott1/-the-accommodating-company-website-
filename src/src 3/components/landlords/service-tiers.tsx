import { Check } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";

interface Tier {
  name: string;
  summary: string;
  features: string[];
}

// Restructures the original site's flat list of service topics ("Access to
// Tenants", "Preparation", "Property Management", "Rent Protection") around
// the decision a landlord actually makes: how hands-off do I want to be.
// Each tier includes everything in the one before it.
const TIERS: Tier[] = [
  {
    name: "Let only",
    summary: "We find your tenant, you take it from there.",
    features: [
      "Valuation and property marketing",
      "Accompanied viewings",
      "Full tenant referencing",
      "Legally sound tenancy agreement",
      "Deposit registration",
    ],
  },
  {
    name: "Rent collect",
    summary: "We find your tenant and manage the money.",
    features: [
      "Everything in Let only",
      "Monthly rent collection",
      "Chasing any late payment",
      "Renewal negotiation",
    ],
  },
  {
    name: "Fully managed",
    summary: "We handle everything, start to finish.",
    features: [
      "Everything in Rent collect",
      "Routine property inspections",
      "Maintenance coordination",
      "Check-out and deposit resolution",
      "Ongoing compliance (Gas Safety, EICR, EPC)",
    ],
  },
];

export function ServiceTiers() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Choose your level of service
          </h2>
          <p className="mt-2 text-[13.5px] text-ink-600">
            Every landlord wants a different amount of involvement — pick the tier that
            matches how hands-off you&apos;d like to be.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <Card key={tier.name}>
              <CardBody className="p-6">
                <h3 className="text-[16px] font-semibold text-ink-900">{tier.name}</h3>
                <p className="mt-1.5 text-[13px] text-ink-600">{tier.summary}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-ink-900">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-brand-700" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
