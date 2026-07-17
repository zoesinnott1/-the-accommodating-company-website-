# The Accommodating Company — website rebuild

A ground-up rebuild of the website for The Accommodating Company, an independent residential lettings agency in Enfield, North London. Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui conventions.

This README is the project's own source of truth for how it's organised and how to run it — keep it up to date as the build progresses.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

**A note on this initial scaffold:** it was hand-built in an environment without access to the npm registry, so `npm install` has not been run or verified yet. The first thing to do after cloning is `npm install` followed by `npm run build` and `npm run lint` — if anything doesn't compile cleanly, that's the first thing to fix before adding new pages.

## Tech stack

- **Next.js 15** (App Router) — file-based routing, React Server Components by default
- **TypeScript** — strict mode on
- **Tailwind CSS** — utility styling, theme tokens in `tailwind.config.ts` mirror `design-system.md`
- **shadcn/ui conventions** — `class-variance-authority` + `tailwind-merge` for component variants; UI primitives are hand-rolled in `src/components/ui` rather than generated via the CLI (the CLI needs registry access this environment didn't have) — run `npx shadcn@latest init` locally at any point if you'd rather adopt the CLI-generated versions going forward
- **lucide-react** — icon set

## Folder structure

```
src/
  app/                  Routes (App Router). One folder per route segment.
  components/
    ui/                 Generic, brand-agnostic primitives (Button, Badge, Card)
    layout/             Site chrome — header, footer
    home/                Homepage-specific sections
  modules/
    properties/         Everything property-related, self-contained (see below)
    team/                Team data + types
  lib/                  Shared utilities (currently just the `cn` classname helper)
```

### Why `modules/` instead of dumping everything in `components/`

`properties` and `team` are pulled out of `components` and into `modules` because they own **data access**, not just presentation — a property card doesn't just render props, it's tied to the shape of property data and (eventually) a live feed. Keeping the type, the data source, and the presentational component together in one folder means:

- Nothing outside `modules/properties` needs to know whether property data comes from a local array or an external API.
- When the CFP (WinMan) feed is ready, only `src/modules/properties/get-properties.ts` changes — implement a `CfpPropertySource` class against the existing `PropertySource` interface and swap the one line at the bottom of that file. No page, component, or route needs to change.
- It's obvious where to look when property behaviour needs to change, rather than it being scattered across `components/`, `lib/`, and page files.

The same pattern applies to `modules/team` for consistency, even though it's simpler today.

## Design system

`design-system.md` (in the project root, alongside this README) is the canonical reference for colour, type, spacing, and component behaviour. `tailwind.config.ts` implements those tokens directly — if the two ever disagree, treat the design doc as intent and the config as (possibly stale) implementation, and reconcile them.

Current known gaps against that doc, deliberately deferred rather than guessed at:

- Real property and team photography — placeholders are Unsplash/randomuser.me images, flagged inline in `placeholder-properties.ts` and `placeholder-team.ts`.
- The real logo asset — `src/components/house-logo.tsx` is a hand-drawn recreation of the shopfront mark for use in code before the actual SVG/PNG is supplied. Swap its contents, don't redesign it.
- Mobile navigation (slide-out panel) — the header currently hides nav links below the `md` breakpoint with no mobile menu yet.
- Only the homepage exists so far. Properties listing/detail, Landlords, Tenants, About, Meet the team, and Contact are all specified in the sitemap (see the discovery report) but not yet built.

## Git and branching strategy

Recommended, in keeping with a small team (or solo) maintaining this long-term:

- **`main`** — always deployable. Protected; changes land via pull request, not direct pushes.
- **Feature branches** — `feature/property-detail-page`, `feature/contact-form`, etc. One branch per page or piece of functionality.
- **Vercel preview deployments** — once connected (see below), every PR gets its own preview URL automatically, so changes can be reviewed live before merging to `main`.
- Squash-merge PRs into `main` to keep history readable.

This project already has an initial git history (`git log` to see it) with the scaffold committed. Continue with feature branches from here.

## Connecting GitHub and Vercel

These two steps need your own GitHub and Vercel accounts — they can't be done from this environment, so here's exactly what to do:

1. **Create the GitHub repository.** Go to github.com, create a new **private** repository (e.g. `accommodating-company`), and don't initialise it with a README (this project already has one).
2. **Push this project.** From the project folder on your machine:
   ```bash
   git remote add origin https://github.com/<your-username>/accommodating-company.git
   git branch -M main
   git push -u origin main
   ```
3. **Connect Vercel.** Go to vercel.com, sign in (or sign up) with your GitHub account, choose "Add New Project," and select this repository. Vercel auto-detects Next.js — no config needed.
4. **Preview deployments are automatic** from that point on: every pull request gets a unique preview URL, and merges to `main` deploy to production.
5. **Custom domain:** once you're ready to point the live domain at this new site, do that from the Vercel project's Domains settings — worth doing as a deliberate cutover step near the end of the project, not now.

## What's next

With the homepage in place, the natural next slice is either the properties listing + detail pages (exercising the `modules/properties` seam properly, including a real filter/search implementation) or the Landlords/Tenants content pages (mostly content and forms, less new architecture). Your call on order — happy to take either next.
