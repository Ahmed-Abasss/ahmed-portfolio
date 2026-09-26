# Ahmed Abbas Nayel — Portfolio

A dark/light, Apple-inspired portfolio built with Angular 18 (standalone components),
TypeScript, Bootstrap, and Font Awesome.

This is a **rapid visual prototype** — first pass on visual identity, layout, navigation,
and content structure. It hasn't been run through `npm install`/`ng build` yet (this was
written in a sandboxed environment with no network access), so treat the first local run
as the real first build-and-fix pass. See "Known TODOs" below for exactly what to check.

## Run locally

Requires Node.js 18+ and the Angular CLI.

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build:prod
```

Output goes to `dist/ahmed-portfolio/browser`. That folder is what you deploy — e.g. drag
it into Netlify/Vercel, or push it to GitHub Pages via `gh-pages` or a static host of your
choice.

## Project structure

```
src/app/
  core/       theme.service.ts, active-section.service.ts
  shared/     nav, footer, section-header, timeline (reused for Education/Courses/Experience)
  features/   hero, about, skills, projects, faq, contact
  data/       plain TypeScript arrays — edit these to change content, no template changes needed
```

To add a new project later: add one object to `src/app/data/projects.data.ts`. Nothing
else needs to change.

## Known TODOs before you publish this

1. **Confirm per-project tech stack.** `src/app/data/projects.data.ts` has a `techTags`
   field for each project marked `TODO(Ahmed)` — I populated it with your general known
   stack (EF Core, SQL Server) as a placeholder, since I could only verify each repo's
   folder/architecture structure, not its actual dependencies. Swap in whatever's accurate.
2. **Add real feature bullets if you want them.** Right now each project only describes
   its verified architecture layers, since I couldn't inspect source code for actual
   features. If you want feature bullets (e.g. "product search", "membership booking"),
   add a `features: string[]` array to the project and a small template tweak.
3. **Google Analytics.** Commented out in `src/index.html` — uncomment and drop in a real
   Measurement ID (`G-XXXXXXXXXX`) when you have one.
4. **Canonical / Open Graph URLs.** Currently placeholder `https://example.com/` in
   `src/index.html` — update once the site has a real domain.
5. **Run an actual build.** I wrote this without being able to run `ng build` myself
   (no network in this environment) — do a `npm install && ng build` locally and fix
   whatever the compiler flags. I did a careful manual read-through, but a real compile
   is the only way to be sure.
6. **FreshCart / other projects.** Left out for now since its repo only has a compiled
   build with no visible source — add it back in `projects.data.ts` once you can describe
   it accurately.

## Deliberately not included (per the brief)

- No contact form (direct contact methods only)
- No CV download
- No fake "Live Demo" links (none of the three projects has one)
- No Arabic/RTL (structure is ready for it later, not implemented now)
