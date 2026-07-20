// Minimal holding-page content — used for routes that exist in the nav and
// footer (so links don't 404) but haven't been designed/built yet.
export function ComingSoon({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-8 py-20 text-center">
      <h1 className="text-[32px] font-bold tracking-tight text-ink-900">{heading}</h1>
      <p className="mx-auto mt-3 max-w-md text-[14.5px] text-ink-600">{description}</p>
    </div>
  );
}
