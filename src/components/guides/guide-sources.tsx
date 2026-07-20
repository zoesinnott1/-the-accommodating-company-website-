import type { GuideSourceLink } from "@/modules/guides/types";

export function GuideSources({ links }: { links: GuideSourceLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="mt-10 border-t border-ink-300 pt-6">
      <h3 className="mb-3 text-[12.5px] font-medium text-ink-600">Sources and further reading</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-brand-700 underline underline-offset-2 hover:text-brand-600"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
