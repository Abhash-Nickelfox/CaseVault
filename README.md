# CaseVault

Secure case management, built for clarity.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (`react-router-dom`)
- [Tailwind CSS 3](https://tailwindcss.com/) + `@tailwindcss/forms` + `@tailwindcss/container-queries`
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- PostCSS + Autoprefixer
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Supabase project URL + anon key
npm run dev
```

## Scripts

| Command           | Description                       |
| ------------------ | ---------------------------------- |
| `npm run dev`     | Start the Vite dev server          |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Lint the codebase with oxlint      |

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql) once.
3. Copy your project's URL and anon key into `.env` (see `.env.example`).

The app degrades gracefully (with a console warning) if Supabase env vars are missing — see [`src/lib/supabase.js`](src/lib/supabase.js).

## Project structure

```
src/
├─ App.jsx                    routes + shared Navbar/Footer wrapper
├─ main.jsx                   BrowserRouter + root render
├─ index.css                  Tailwind directives + base overrides
├─ pages/                     route-level components
├─ components/
│  ├─ layout/                 Navbar, Footer
│  ├─ home/                   one file per landing-page section
│  └─ shared/                 Icon, ScrollToTop
├─ hooks/                     useReveal, useActiveSection
├─ lib/                       constants.js, supabase.js
└─ assets/                    locally optimized images
```
