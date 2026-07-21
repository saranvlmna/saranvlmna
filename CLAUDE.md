# Saranjith P — Portfolio

Personal portfolio site for **Saranjith P**, Senior Software Engineer based in Kochi, Kerala. Single-page, single-file design.

## Stack & structure

- **One file:** `index.html` — a self-contained "Design Component" page. It opens directly in a browser; `support.js` is the runtime and is auto-generated (never edit it).
- The file has two parts:
  - **Template** — the markup between `<x-dc>` and `</x-dc>`.
  - **Logic class** — a `<script type="text/x-dc" data-dc-script>` block containing `class Component extends DCLogic { … }`. All content data (projects, skills, experience, writing, socials) lives in `renderVals()`.
- **No build step, no npm required to run it.** Fonts load from Google Fonts. `support.js` is a small dependency-free templating runtime (no React/CDN) — it walks the `<x-dc>` tree once at load, evaluating `{{ expr }}` interpolations and `<sc-for each="item in vals.list">` loops against the object `renderVals()` returns, then mounts the result in place. Do not add imports; the runtime provides everything the Component class needs.

## Design system (keep consistent)

- **Theme:** clean & light. Background `#f6f6f1`, ink text `oklch(0.24 0.012 150)`, forest-green accent `oklch(0.5 0.11 150)`.
- **Fonts:** Space Grotesk (headings), Manrope (body), IBM Plex Mono (labels/meta/tags).
- **Styling is inline only.** No CSS classes or stylesheets except the `<helmet><style>` block (`:root` custom properties, resets, `@keyframes`, `.reveal`, and the small set of attribute-selector rules needed for things inline `style` can't express: `[data-card]:hover` lift, `[data-btn]:hover` opacity, `[data-navlink]:hover`, `:focus-visible`). Match existing inline-style patterns when adding elements; reference the `--*` custom properties defined in `:root` rather than hardcoding colors.
- **Sections (in order):** Hero → keyword strip → 01/About + Skills → 02/Projects → 03/Experience → 04/Writing → 05/Contact → Footer.
- Cards use `#fdfdfa` (`--card`) bg, `1px` hairline border (`--border`), soft shadow (`--shadow`), `translateY(-4px)` hover lift via `[data-card]:hover`.
- Scroll-reveal: add `class="reveal"` to any element that should fade/slide in on scroll (handled by the IntersectionObserver in `componentDidMount`).
- Responsiveness has no `@media` breakpoints — every grid uses `repeat(auto-fit/auto-fill, minmax(...))` and flex containers use `flex-wrap: wrap`, so layouts reflow to mobile naturally. Keep new layouts to this pattern instead of adding breakpoints.

## Editing content

All copy and data live in `renderVals()` in the logic class. To update projects, experience, skills, writing, or social links, edit the arrays there — the template renders them via `<sc-for>` loops.

- **Projects** are currently placeholders (`Project Aurora`, `Project Northwind`, `Project Harbor`) — replace titles, descriptions, tech, and repo/live URLs with real ones.
- **Writing** entries are real posts, but most `link` values still point at the Medium profile (`https://medium.com/@saranvlmna`) as a placeholder — swap in each post's real permalink as you publish it. The "Hoisting in JavaScript" entry already has its real URL.
- **Experience** entries are real (Thought Minds, Metric Tree Labs, Codelattice Digital Solutions).

## Real details

- Name: Saranjith P · Email: saranvlmna@gmail.com · Location: Kochi, Kerala (from Kannur)
- LinkedIn: linkedin.com/in/saranvlmna · GitHub: github.com/saranvlmna · Medium: medium.com/@saranvlmna · Instagram: instagram.com/isjith
- Self-taught, 5+ years experience.
- Resume download lives at `assets/files/saranjith-p-resume.pdf`, linked from the Contact section.

## Hosting

- Firebase Hosting serves the repo root (`firebase.json`); the catch-all rewrite points `**` at `/index.html`.

## Conventions

- Keep it a single page and a single file (plus `support.js` and static assets under `assets/`).
- Preserve responsiveness: layouts use `clamp()` and `auto-fit`/`auto-fill` grids — test at mobile widths after changes.
- Don't introduce new accent colors; derive shades from the forest-green accent in `oklch`.
- No emoji.
