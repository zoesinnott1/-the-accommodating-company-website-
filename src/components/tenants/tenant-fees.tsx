import { Card, CardBody } from "@/components/ui/card";

// These figures are set by the Tenant Fees Act 2019, not by us — every
// UK letting agent has to disclose the same categories and (mostly) the
// same caps, which is why they can be stated directly rather than
// marked TBD. Written in our own words rather than lifted from any
// other agent's fee page.
const HEADLINE_FEES = [
  { name: "Holding deposit", amount: "1 week's rent" },
  { name: "Security deposit", amount: "5 weeks' rent" },
];

const OTHER_CHARGES = [
  { label: "Rent paid late", detail: "Interest at 3% above the Bank of England base rate, from the day it falls overdue." },
  { label: "Lost keys or access devices", detail: "The reasonable cost of replacing them — never more than the actual cost to us." },
  { label: "Changes you request to your tenancy", detail: "Up to £50 per change, or the reasonable cost if it's more involved." },
  { label: "Ending your tenancy early", detail: "The landlord's reasonable costs of finding a new tenant, plus rent due until they move in." },
];

export function TenantFees() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-7 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
            Tenant fees
          </h2>
          <p className="mt-2 text-[13.5px] text-ink-600">
            No admin fees, no surprise charges — just what the Tenant Fees Act 2019
            actually allows an agent to ask for, laid out below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {HEADLINE_FEES.map((fee) => (
            <Card key={fee.name}>
              <CardBody className="p-6">
                <h3 className="text-[13px] font-medium text-ink-600">{fee.name}</h3>
                <p className="mt-2 text-[26px] font-semibold leading-none text-ink-900">
                  {fee.amount}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-[13px] font-medium text-ink-600">
            Other charges that may apply
          </h3>
          <div className="flex flex-col divide-y divide-ink-300 rounded-card border border-ink-300 bg-white">
            {OTHER_CHARGES.map((charge) => (
              <div key={charge.label} className="flex flex-col gap-1.5 p-4">
                <span className="text-[13px] font-medium text-ink-900">{charge.label}</span>
                <span className="text-[12.5px] text-ink-600">{charge.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
