// Generic numbered-timeline section, extracted after the same pattern
// appeared on both the landlords page ("The letting process") and the
// tenants page ("How it works"). Any future page needing a step-by-step
// explainer should reuse this rather than writing a new one.
export interface ProcessStep {
  title: string;
  body: string;
}

export function ProcessSteps({
  heading,
  steps,
}: {
  heading: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          {heading}
        </h2>
        <ol className="grid list-none grid-cols-1 gap-6 pl-0 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
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
