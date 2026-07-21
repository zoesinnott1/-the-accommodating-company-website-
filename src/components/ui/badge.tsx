import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center font-medium", {
  variants: {
    variant: {
      available: "rounded-md px-2.5 py-0.5 text-[11px] bg-brand-50 text-brand-700",
      agreed: "rounded-md px-2.5 py-0.5 text-[11px] bg-amber-50 text-amber-600",
      neutral: "rounded-md px-2.5 py-0.5 text-[11px] bg-cream-50 text-ink-600 border border-ink-300",
      // Pill-shaped category tag (guides) — greener and rounder than
      // `neutral`, which read as too flat/grey in the guides cards.
      category: "rounded-full px-3 py-1 text-[11px] bg-brand-50 text-brand-700",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
