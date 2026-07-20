import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldStyles } from "@/components/ui/input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldStyles, "min-h-[88px] resize-y", className)} {...props} />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
