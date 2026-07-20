// Content blocks are a small hand-rolled union rather than pulling in an
// MDX/CMS pipeline — appropriate while there's a single article. Revisit if
// the guides library grows past a handful of pieces.
export type GuideBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface GuideSourceLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  category: string;
  title: string;
  publishedLabel: string;
  readingTime: string;
  lastReviewedLabel: string;
  excerpt: string;
  body: GuideBlock[];
  sourceLinks: GuideSourceLink[];
}
