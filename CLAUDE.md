# Saranjith P — Personal website

Personal website for **Saranjith P**, Senior Software Engineer based in Kochi, Kerala. A single, calm, mobile-first page. This file is the design spec.

## Files (keep the repo to just these)

- `index.html` — the whole site.
- `assets/img/icon.jpg` (favicon + link-preview image), `assets/files/saranjith-p-resume.pdf` (resume download).
- `firebase.json`, `.firebaserc`, `.github/workflows/` — Firebase Hosting config and the deploy workflows.
- `googlec66316644bd404d3.html` — Google Search Console ownership file; do not delete.

## Stack & structure

- **One static file:** `index.html` with all CSS in a `<style>` block in `<head>`. No framework, no build step, no templating runtime, no JavaScript for the page itself (the only script is the Google Analytics tag).
- Content is plain HTML. To change copy, skills, experience or contact links, edit the markup directly.
- Fonts from Google Fonts: Space Grotesk (500, 700) for headings, Inter (400, 500, 600) for body.

## Design system (keep consistent)

- Tokens on `:root`: `--bg #F3ECE0` (beige), `--ink #2A2620`, `--muted #5E564A`, `--accent #2F6B3F`, `--line #D9CFBD` (dividers), `--chip #8C8270` (skill tag outline). Text on the accent button is `#FFFFFF`.
- Extra tokens: `--accent-dark #25562F` (pressed/hover), `--accent-tint` (outline button hover), `--gutter` (20px or the iPhone safe-area inset, whichever is larger).
- **Mobile is the priority** (most visitors are on phones). CSS is mobile-first, with `min-width` breakpoints layered on top:
  - Base (phones): 680px max column, `--gutter` side padding, sections split by a 1px divider with 36px vertical padding. Buttons are full width and 52px tall; contact rows 64px.
  - `>= 640px` (tablet): buttons shrink to auto width (48px); experience entries put the period in a left column.
  - `>= 960px` (laptop): 1040px column; each section becomes a two-column grid (sticky `h2` on the left at 200px, content in `.body` on the right); body text 17px.
  - Heading sizes scale fluidly with `clamp()`.
- Hover styles live only inside `@media (hover:hover)` so phones never get stuck hover states; phones get `:active` feedback instead.
- Pills: button radius 24-26px, skill tags radius 20px. Every tappable element is at least 44px tall.
- **No** cards, shadows, gradients, emoji, menu, header bar, dark mode (`color-scheme: light only`), projects section, or animations beyond smooth scrolling.
- After layout changes, check 320, 360, 375, 390, 414 and 430px for no horizontal scroll, then 768 and 1280px.

## Sections (in order)

Intro (name, role, location, one-line summary, "Get in touch" button) → Skills (outlined pill tags) → Experience (period, title, company, one-line description) → Contact (one line + Email / LinkedIn / GitHub rows) → Footer.

## Real details

- Name: Saranjith P · Email: saranvlmna@gmail.com · Location: Kochi, Kerala, India
- LinkedIn: linkedin.com/in/saranvlmna · GitHub: github.com/saranvlmna · Medium: medium.com/@saranvlmna · Instagram: instagram.com/isjith
- 5+ years of experience (backend, now generative and agentic AI). Experience: Wipro (AI Engineer, Sep 2026 to now; Orkes Conductor agentic AI workflows), Thought Minds (Senior Software Engineer, Jan 2025 to now), Metric Tree Labs (Software Engineer, Oct 2022 to Dec 2024), Codelattice Digital Solutions (Software Engineer, Aug 2021 to Oct 2022).
- Resume PDF lives at `assets/files/saranjith-p-resume.pdf`, linked by the outlined "Download resume" button at the end of the Contact section. Replace that file to update it.

## Hosting

- Firebase Hosting serves the repo root (`firebase.json`); the catch-all rewrite points `**` at `/index.html`. Dotfiles and `*.md` files are excluded from hosting. Deploys run from GitHub Actions on push to `main`.
- Keep `google-site-verification` and the Open Graph meta tags in `<head>` (link previews on WhatsApp/LinkedIn).
