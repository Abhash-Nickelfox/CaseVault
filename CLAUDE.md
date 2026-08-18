# CaseVault

An AI-powered investigations and case-management platform — this repo is the marketing/case-study site (React + Vite), not the product itself.

## Tech stack

- React 19 + Vite
- React Router (`react-router-dom`)
- Tailwind CSS 3 + `@tailwindcss/forms` + `@tailwindcss/container-queries`
- Supabase (`@supabase/supabase-js`) — used by the Discuss page's contact form
- oxlint for linting (not ESLint)

## Structure

```
src/
├─ App.jsx / main.jsx        routes + BrowserRouter root
├─ index.css                 Tailwind directives, base body styles, .glass-panel
├─ pages/                    Home, Discuss, NotFound
├─ components/
│  ├─ layout/                Navbar.jsx, Footer.jsx
│  ├─ home/                  one file per landing-page section (Hero, Snapshot,
│  │                         Problem, Solution, Experience, Impact,
│  │                         GraphShowcase, Cta)
│  └─ shared/                Icon.jsx (Material Symbols wrapper), ScrollToTop.jsx
├─ hooks/                    useReveal.js, useActiveSection.js (navbar scrollspy)
├─ lib/                      constants.js (SITE object incl. nav), supabase.js
└─ assets/                   locally optimized JPGs only — never hotlink external
                              image URLs, and never let PNGs >200KB sit here;
                              convert to JPG (sharp, quality ~85-88) first
```

## Design system conventions

All color, spacing, radius, and type values are Tailwind theme **tokens** defined in `tailwind.config.js` (`colors`, `spacing`, `fontFamily`, `fontSize`, `maxWidth`), not raw utility values. Components reference tokens by semantic name (`bg-background`, `text-on-surface`, `bg-secondary`, `border-outline-variant`) — never hardcoded hex in JSX.

- **Current palette**: a light theme (`background`/`surface` are a pale blue-white, `on-surface`/`primary` are dark navy, `secondary` is the interactive accent color). This has been swapped multiple times this project's history — if asked to retheme, only ever touch the `colors` block in `tailwind.config.js` plus the two raw rgba() values in `index.css`'s `.glass-panel` rule. Nothing else should need to change if components are written correctly against tokens.
- **Navbar sizing**: `h-20` bar, `px-margin-mobile md:px-margin-desktop` (128px desktop edge inset, measured against a reference design), `max-w-container-max` (2400px, a rarely-engaged ultra-wide safety cap — the real edge inset comes from the padding, not this cap). Every section's outer container uses the same `max-w-container-max` + `px-margin-mobile md:px-margin-desktop` pattern so section edges line up with the navbar.
- **Narrower inner wrappers** (`max-w-3xl`, `max-w-2xl`, `max-w-4xl`, etc.) used for headline/paragraph readability are intentional and distinct from the outer section-width containers — don't conflate the two when asked to adjust "section width."

## Known gotcha: Tailwind config changes don't reliably hot-reload

Editing `tailwind.config.js` and expecting Vite's dev server to pick it up live is unreliable in this project — it has repeatedly required a full dev-server restart (`Ctrl+C` then `npm run dev` again) plus a hard browser refresh (or incognito window) to actually see the change. If a color/theme change "isn't showing up," suspect stale cache before suspecting the code — verify by reading the config file directly and/or rendering on a separate throwaway dev server port.

## Working with the user

- Be surgical: when asked to change "only X," do not touch adjacent styling, even if it seems like it would look better. Confirm scope with the literal ask.
- When editing `tailwind.config.js`, always check whether a token is shared across components (e.g. `background` used by navbar, hero, footer, etc.) before assuming a change is isolated.
- Prefer verifying visual changes via a screenshot from a separate throwaway dev server (different port, stopped again after) rather than assuming — and never stop the user's own `npm run dev` process. Only ever kill a process by exact PID that this session started itself.

## Security notes

- `.env` is gitignored; `.env.example` holds placeholders only. No secrets are hardcoded anywhere in `src/`.
- Supabase RLS policies (`supabase/schema.sql`) gate `inquiries` (anon insert-only) and `cases` (owner-scoped). The anon key is meant to be public client-side — never put a service-role key in this project.

---

## Work log

### 2026-08-17
- Scaffolded the full project (Vite/React/Tailwind/Supabase/React Router structure).
- Built out the landing page section-by-section from Stitch design exports, iterating through several revisions: Hero, Snapshot, Problem, Solution, Experience, Impact, GraphShowcase, Cta, Navbar, Footer.
- Rebuilt Navbar to match a reference design's exact spacing/sizing/hover behavior; aligned all section containers to the same width/padding system.
- Applied the final approved color theme (light palette) across all tokens.
- Swapped hero background photo and dashboard mockup images; optimized both from oversized PNGs to compact JPGs.
- Cleaned up unused reference screenshots from `src/assets`.
- Tuned the Hero section's fade gradient (color, opacity stops, coverage area) and fixed the background photo rendering — removed a `mix-blend-luminosity` class that was desaturating the image against the light theme, and removed a leftover `opacity-40` that was still washing it out.
- Ran a security review before a first GitHub push: confirmed no secrets in source, `.env` empty and gitignored, RLS policies correctly scoped. Cleared to push (repo not yet initialized with `git init`).
