import Image from "next/image";

// A single wide "local highlight" image, breaking up the text-heavy sections
// on the reworked homepage — the branch's own shopfront.
export function PhotoBand() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="relative aspect-[16/5] overflow-hidden rounded-card">
          <Image
            src="/images/shopfront-band.jpg"
            alt="The Accommodating Company's shopfront on the high street"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
