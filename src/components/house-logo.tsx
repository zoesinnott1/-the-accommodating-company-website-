// Placeholder recreation of the existing house/window mark for use in code
// before the real logo asset (SVG/PNG from the shopfront branding) is
// supplied. Swap this component's contents for the real asset — do not
// redesign the mark itself, per the brand brief.
export function HouseLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      style={{ color: "#2F8F4E" }}
      aria-hidden
    >
      <path d="M3 11L12 4l9 7" />
      <path d="M5 10v9h14v-9" />
      <rect x="9.5" y="13" width="5" height="4" />
    </svg>
  );
}
