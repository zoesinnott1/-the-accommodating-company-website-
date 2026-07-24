import { cn } from "@/lib/utils";

// The homepage rework calls for real photography in a few spots (hero,
// a "local highlight" band, the closing CTA), but this project has no way
// to source licensed stock photos. Rather than ship those sections with no
// visual placeholder at all, this renders a clearly-labelled placeholder
// block at the right size/position — swap each one for a real <Image> once
// photography has been chosen (own property/office photos, or a licensed
// stock library).
export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-card border border-dashed border-brand-100 bg-brand-50 p-6 text-center text-[12px] italic text-brand-700",
        className,
      )}
    >
      {label}
    </div>
  );
}
