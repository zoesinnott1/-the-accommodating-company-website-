export function GuideCta({
  heading = "Need to discuss the changes?",
  description = "Our experienced team can help landlords and tenants understand how the new rules may affect them.",
  contactSuffix,
}: {
  heading?: string;
  description?: string;
  contactSuffix?: string;
}) {
  return (
    <div className="mt-10 rounded-card border border-ink-300 bg-white p-8 text-center sm:p-10">
      <h2 className="text-[19px] font-semibold tracking-tight text-ink-900">{heading}</h2>
      <p className="mx-auto mt-2 max-w-md text-[13.5px] text-ink-600">{description}</p>
      <p className="mt-4 text-[13.5px] text-ink-900">
        Contact The Accommodating Company on{" "}
        <a href="tel:02084478400" className="font-semibold text-brand-700">
          020 8447 8400
        </a>{" "}
        or email{" "}
        <a
          href="mailto:contact@accommodatingcompany.co.uk"
          className="font-semibold text-brand-700"
        >
          contact@accommodatingcompany.co.uk
        </a>
        {contactSuffix ? ` ${contactSuffix}` : "."}
      </p>
    </div>
  );
}
