import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function GuideBreadcrumb() {
  return (
    <Link
      href="/guides"
      className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-ink-600 hover:text-ink-900"
    >
      <ArrowLeft size={14} aria-hidden />
      Guides &amp; Updates
    </Link>
  );
}
