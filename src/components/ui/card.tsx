import * as React from "react";
import { cn } from "@/lib/utils";

// The single card primitive reused across the site — property cards, team
// cards, and service panels all compose this rather than each defining
// their own surface/border/radius. See design-system.md §8.
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-card border border-ink-300 bg-white transition-[border-color,transform] duration-150",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-4", className)} {...props} />
  ),
);
CardBody.displayName = "CardBody";

export { Card, CardBody };
