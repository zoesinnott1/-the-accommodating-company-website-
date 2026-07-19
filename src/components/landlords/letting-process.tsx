// Condensed from the original site's "Letting Procedure" (Selection of
// Tenants / Signing Contracts / Rent and Deposit) into a single scannable
// timeline, since the source material described this as three dense
// paragraphs rather than a process a landlord could follow at a glance.
const STEPS = [
  {
    title: "Valuation and instruction",
    body: "We value your property and agree which service tier is right for you.",
  },
  {
    title: "Marketing and viewings",
    body: "Extensive advertising and accompanied viewings build a shortlist of suitable applicants.",
  },
  {
    title: "Referencing and contracts",
    body: "Full referencing via Homelet, then tenancy agreements and statutory notices prepared for signing.",
  },
  {
    title: "Move-in",
    body: "Rent and deposit collected, the deposit registered with the Tenancy Deposit Scheme, and keys released once everything's in place.",
  },
  {
    title: "Ongoing management",
    body: "For Rent collect and Fully managed landlords, this continues for the length of the tenancy — inspections, maintenance, and rent collection included.",
  },
];

export function LettingProcess() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          The letting process
        </h2>
        <ol className="grid list-none grid-cols-1 gap-6 pl-0 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-[13px] font-semibold text-brand-700">
                {index + 1}
              </span>
              <h3 className="text-[14.5px] font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-[13px] text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
