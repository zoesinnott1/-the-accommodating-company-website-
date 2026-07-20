import { Check } from "lucide-react";
import type { GuideBlock } from "@/modules/guides/types";

export function GuideContent({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const isSubheading = block.level === 3;
          return (
            <h2
              key={index}
              className={
                isSubheading
                  ? "mt-2 text-[15px] font-semibold text-ink-900"
                  : "mt-4 text-[20px] font-semibold tracking-tight text-ink-900"
              }
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-[14.5px] leading-relaxed text-ink-600">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="flex flex-col gap-2">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14.5px] text-ink-600">
                  <Check size={16} className="mt-1 flex-shrink-0 text-brand-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        // callout
        return (
          <div
            key={index}
            role="note"
            className="rounded-lg border border-amber-600/30 bg-amber-50 px-4 py-3.5 text-[13px] text-amber-600"
          >
            {block.text}
          </div>
        );
      })}
    </div>
  );
}
