import { ImagePlaceholder } from "@/components/shared/image-placeholder";

// A single wide "local highlight" image, breaking up the text-heavy sections
// on the reworked homepage. See ImagePlaceholder for why this isn't a real
// photo yet.
export function PhotoBand() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <ImagePlaceholder
          label="Photo placeholder — e.g. the Enfield Town shopfront or high street. Caption: “Local, independent and family-run — serving Enfield and Barnet for over 30 years.”"
          className="aspect-[16/5]"
        />
      </div>
    </section>
  );
}
