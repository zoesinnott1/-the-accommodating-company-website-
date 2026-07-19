"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300 bg-white"
      >
        <Menu size={20} className="text-ink-900" aria-hidden />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream-50">
          <div className="flex h-16 items-center justify-between border-b border-ink-300 px-8">
            <a
              href="tel:02084478400"
              className="text-[15px] font-semibold text-ink-900"
              onClick={() => setOpen(false)}
            >
              020 8447 8400
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300 bg-white"
            >
              <X size={20} className="text-ink-900" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-8 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-[17px] font-medium text-ink-900 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-ink-300 p-8">
            <Link
              href="/landlords/valuation"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "primary" }), "w-full")}
            >
              Request a valuation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
