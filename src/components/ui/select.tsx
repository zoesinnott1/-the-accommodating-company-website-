import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldStyles } from "@/components/ui/input";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(fieldStyles, className)} {...props}>
      {children}
    </select>
  ),
);
Select.displayName = "Select";

export { Select };
