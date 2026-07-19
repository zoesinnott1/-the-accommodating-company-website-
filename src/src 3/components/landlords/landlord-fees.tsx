import { Card, CardBody } from "@/components/ui/card";

// Percentages are simplified to clean whole numbers for display. Actual
// contract terms should confirm the precise figure at time of instruction.
const FEE_TIERS = [
  { name: "Let only", rate: "8%" },
  { name: "Rent collect", rate: "10%" },
  { name: "Fully managed", rate: "12%" },
];

// Amounts intentionally left as TBD pending confirmation of current
// third-party costs (referencing, deposit scheme) before publishing.
const ADDITIONAL_CHARGES = [
  "Tenant referencing, right to rent checks and Eviction & Legal Expense cover",
  "Referencing plus Rental Protection cover",
  "Deposit registration with the Tenancy Deposit Scheme",
];

export function LandlordFees() {
  return (
    <section id="fees" className="scroll-mt-20 border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Landlord fees
          </h2>
          <p className="mt-2 text-[13.5px] text-ink-600">
            Clear pricing, matched to the service tiers above — each rate applies on
            top of the one before it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEE_TIERS.map((tier) => (
            <Card key={tier.name}>
              <CardBody className="p-6">
                <h3 className="text-[13px] font-medium text-ink-600">{tier.name}</h3>
                <p className="mt-2 text-[28px] font-semibold leading-none text-ink-900">
                  {tier.rate}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-[13px] font-medium text-ink-600">
            Additional charges may apply
          </h3>
          <div className="flex flex-col divide-y divide-ink-300 rounded-card border border-ink-300 bg-white">
            {ADDITIONAL_CHARGES.map((label) => (
              <div
                key={label}
                className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="text-[13px] text-ink-900">{label}</span>
                <span className="inline-flex w-fit items-center rounded-md bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-600">
                  TBD
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
