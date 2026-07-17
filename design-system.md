# The Accommodating Company — design system

Foundation for the rebuild. Every value below is written so it maps directly onto a Tailwind theme extension and shadcn/ui component config — this doc is the source of truth for `tailwind.config.ts` and `globals.css` once we start building.

---

## 1. Brand foundation

The logo (house mark + wordmark) is not being redesigned — it's reused exactly as it appears on the shopfront. Everything here evolves the *environment* around it: brighter backgrounds, a refined green, and charcoal used sparingly rather than as a dominant field.

- Minimum clear space around the logo: equal to the height of the house icon on all sides.
- The logo sits on warm white or very light neutral backgrounds only. Never place it on a mid-tone green field, and avoid busy photography behind it — use a solid or near-solid area.
- The house/window motif from the mark can be reused as a secondary graphic (favicon, loading state, empty-state illustration) but never as a decorative pattern repeated across the page — that would dilute it.

## 2. Colour palette

The shopfront green, measured and refined into a working scale, plus warm neutrals to keep the site far brighter than the physical premises.

| Token | Hex | Usage |
|---|---|---|
| `brand-50` | `#E8F5EC` | Tinted backgrounds — badges, hover states, callout panels |
| `brand-100` | `#C7E8D1` | Hover fill for tinted elements |
| `brand-500` | `#2F8F4E` | Primary brand green — icons, borders, secondary buttons |
| `brand-600` | `#247A41` | Primary button fill, links, focus rings |
| `brand-700` | `#1F6B39` | Text on tinted green backgrounds (badges), hover state for brand-600 |
| `ink-900` | `#15170F` | Primary text, headings |
| `ink-600` | `#6E6D66` | Secondary/muted text |
| `ink-300` | `#E6E3D9` | Borders, dividers |
| `cream-50` | `#FBFAF6` | Page background |
| `white` | `#FFFFFF` | Card and panel surfaces |
| `amber-50` / `amber-600` | `#FCF1DC` / `#B8790C` | "Let agreed" status only — the one secondary semantic colour |
| `red-50` / `red-600` | `#FCEAEA` / `#B3261E` | Form errors only |

**Accessibility note:** `brand-500` (#2F8F4E) on white measures roughly 4:1 contrast — enough for large text, buttons, and icons, but marginal for small body text. Use `brand-700` for any small green text (links, badge labels), and reserve `brand-500`/`brand-600` for fills, borders, and icons where the accompanying text is white or dark. This gets checked properly with an automated contrast audit before launch, not just eyeballed.

Large dark (charcoal) sections are avoided per the brief — `ink-900` is a text colour, not a background, except in the rare full-bleed photography overlay on the homepage hero.

### Tailwind mapping
```ts
colors: {
  brand: { 50: '#E8F5EC', 100: '#C7E8D1', 500: '#2F8F4E', 600: '#247A41', 700: '#1F6B39' },
  ink: { 900: '#15170F', 600: '#6E6D66', 300: '#E6E3D9' },
  cream: { 50: '#FBFAF6' },
  amber: { 50: '#FCF1DC', 600: '#B8790C' },
}
```

## 3. Typography

A single typeface family: **Inter**, throughout. We tested a serif pairing (Fraunces) for headlines against the brand and decided against it — the existing logo wordmark is already a confident modern sans, and pairing it with an editorial serif introduced tension rather than warmth. One family, used with a clear weight and size hierarchy, is more consistent with the brand being evolved and reads as more contemporary and timeless than a serif/sans split.

| Style | Font | Size / line-height | Weight |
|---|---|---|---|
| Display (hero h1) | Inter | 38px / 1.2, tight tracking (-0.02em) | 700 |
| Section heading (h2) | Inter | 22–24px / 1.25, tight tracking | 600 |
| Card / component heading (h3) | Inter | 16–17px / 1.3 | 600 |
| Body | Inter | 15.5px / 1.6 | 400 |
| Small / meta | Inter | 13px / 1.5 | 400 |
| Caption / label | Inter | 12px / 1.4 | 500 |

Warmth and personality now come from copy voice and photography rather than typography — see the updated hero copy below.

Sentence case throughout — headings, buttons, nav labels, badges. No title case, no all-caps except small eyebrow labels at reduced size with letter-spacing, used sparingly.

## 4. Spacing scale

Standard Tailwind 4px base scale, used consistently rather than arbitrary values:

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96` (px)

- Section vertical padding: `56px` mobile, `96px` desktop.
- Card internal padding: `16–20px`.
- Grid gaps: `16–18px` for card grids, `24–32px` for larger layout columns.

## 5. Iconography

**lucide-react** (shadcn/ui's default icon set) — outline style, 1.5–1.75px stroke, no fills. Sizes: 16px inline with text, 20px in buttons/list items, 24px max as a standalone decorative icon (e.g. the stat-row icons). Icons inherit `currentColor` — never hardcode an icon colour separately from its text.

## 6. Buttons

| Variant | Use | Style |
|---|---|---|
| Primary | One per view — "Request a valuation," "Search" | `brand-600` fill, white text, `8px` radius |
| Secondary | Most actions | White fill, `1px ink-300` border, `ink-900` text |
| Ghost | Low-emphasis, nav-adjacent | Transparent, text only, hover → `cream` fill |
| Link | Inline text actions | Underline on hover only |

States: hover darkens fill/border one step; focus gets a visible `2px` ring in `brand-500` at 40% opacity; disabled drops to 40% opacity and removes the pointer cursor rather than being hidden. Height: 40px default, 36px for compact/inline (e.g. inside the search bar).

## 7. Forms

- Inputs and selects: white fill, `1px ink-300` border, `8px` radius, `40px` height, `14px` text.
- Focus: border becomes `brand-600`, plus a soft focus ring — no colour-only indicators (accessibility).
- Labels sit above fields, never as placeholder-only text.
- Validation: inline, below the field — red text + red border on error, not a colour change alone (include an icon and message).
- Success state (e.g. enquiry sent): a small `brand-50` panel with a check icon, not a browser alert.

## 8. Cards

One base card component, reused for properties, team members, and service panels — this consistency is what makes the "precision grid" direction feel like a coherent product rather than a stack of one-off sections.

- White surface, `1px ink-300` border, `12–14px` radius, no drop shadow at rest.
- Hover (where clickable): border shifts to `ink-900` at low opacity, subtle `2px` translateY lift — no large shadow blooms.
- Image ratio: `16:10` for property photography, `1:1` for team portraits.

## 9. Navigation

- **Header:** logo left, primary nav centred/left of actions — **Properties, Landlords, Tenants, About, Contact** (five items; "Meet the team" lives inside About and as a homepage module, not the primary nav). Phone number and one primary CTA ("Request a valuation") pinned right. Sticky on scroll, height 64px, white background with a hairline bottom border — no shadow.
- **Mobile:** slide-out panel, full-height, large tap targets (min 44px), click-to-call number pinned at the top.
- **Footer:** four columns — brand/contact block, Explore, Company, Legal — plus a bottom bar with copyright and accreditation body mentions (TPO, NALS CMP). Accreditation logos (TPO, NALS, SAFEagent) get their own visible row here, not buried as tiny unlabelled images like the current site.

## 10. Tables

Used sparingly — mainly landlord/tenant fee schedules. Clean bordered rows (no zebra striping), left-aligned text, right-aligned numeric columns, `13.5px` text, generous row padding (`12px` vertical). On mobile, fee tables collapse to a stacked label/value list rather than horizontal scroll.

## 11. Property cards

The most-repeated component on the site, so it gets the most precision:

- Photo (16:10) → status badge (To let / Let agreed, using `brand-50`/`amber-50` tints) → address (Inter, 600) → meta row (beds · type · furnished, with small icons) → price (Inter, 600, largest text in the card).
- Hover: subtle lift + border darken, whole card is one click target.
- Empty/loading state: skeleton shimmer in `ink-300`, never a blank flash — matters once this is wired to a live CFP feed with real network latency.

## 12. Contact forms

Single column, generous field spacing, inline validation as above. A short reassurance line under the submit button ("We reply within one working day") rather than legalese. Success state replaces the form in place with a confirmation panel — no page reload, no browser alert.

## 13. Imagery style

- Real photography of real Enfield properties and the actual team, not generic stock — this is what separates "boutique" from "template." Placeholder imagery in the mockups is Unsplash/randomuser.me stand-ins only.
- Natural light, minimal staging, true-to-life colour (no heavy filters) — consistent with "elegant, not trendy."
- Consistent crop ratios across all property photography (16:10 primary) so the grid stays calm regardless of the source photos' original dimensions.

## 14. Animation principles

Subtle and functional only — nothing decorative:

- Fade + 8px slide-up on scroll-reveal for section content, 200–250ms, `ease-out`, triggered once per element (not on every scroll).
- Hover/focus transitions: 150ms `ease` on colour, border, and transform properties only.
- No parallax, no auto-playing carousels, no scroll-jacking.
- All motion respects `prefers-reduced-motion: reduce` — animations are disabled outright for users who've set that preference, not just shortened.

---

## Above-the-fold social proof

Per your note, the social-proof row sits directly beneath the hero search bar (see `homepage-recommended-direction.html`): four inline stats — years established, average review score, homes under management, average time-to-let — each with a small tinted icon, a bold number, and a muted label. No card wrapper, just a hairline-bordered strip, so it reads as a fact bar rather than another content block competing for attention.

---

## Open items before moving to build

1. Confirm the palette and type choices above against the updated `homepage-recommended-direction.html` mockup.
2. Real property photography and team photography will replace the placeholders in the mockups — worth flagging early since sourcing/shooting these takes lead time independent of the build.
3. Once this is signed off, next phase is project setup: repository, Next.js app, Tailwind theme wired to these tokens, and the shadcn/ui component baseline — before any real pages get built.
