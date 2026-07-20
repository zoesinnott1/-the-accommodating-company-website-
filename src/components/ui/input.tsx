import * as React from "react";
import { cn } from "@/lib/utils";

// Shared form field sizing/padding — bumped up from the first prototype
// pass (13px/14px felt cramped) so every text-style input, select and
// textarea in the app matches.
const fieldStyles =
  "w-full rounded-lg border border-ink-300 bg-white px-3.5 py-3.5 text-[13.5px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-50";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, "aria-invalid": ariaInvalid, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={ariaInvalid}
      className={cn(
        fieldStyles,
        ariaInvalid && "border-red-300 focus:border-red-500 focus:ring-red-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input, fieldStyles };
