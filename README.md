# Cassette — Landing Page

Public marketing site for [Cassette](https://github.com/MathieuDubart/Cassette), a native iOS and macOS client for Subsonic and OpenSubsonic music servers.

Live at **https://mathieudubart.github.io/cassette-web/**.

## Stack

- [Astro 6](https://astro.build) (static output) with strict TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`, with the design tokens declared in `src/styles/global.css` under `@theme`
- [Inter Variable](https://rsms.me/inter/) self-hosted through `@fontsource-variable/inter` (no Google Fonts call, no third-party request)
- No client framework — vanilla TS for the rare bit of interactivity

## Requirements

- Node.js **≥ 22.12** (Astro 6 requirement)
- npm 10+

## Develop

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:4321/cassette-web/` (the trailing `/cassette-web/` comes from the `base` set in `astro.config.mjs`).

## Build

```bash
npm run build
npm run preview
```

Static output is generated in `dist/`.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site with `withastro/action@v3` (pinned to Node 22) and publishes via `actions/deploy-pages@v4`.

**One-time repo setup** before the first deploy can succeed:

1. Open `Settings → Pages` on the repo.
2. Under **Build and deployment → Source**, select **`GitHub Actions`** (not "Deploy from a branch").

If the repo is private, GitHub Pages requires a Pro/Team/Enterprise plan; otherwise make the repo public.

### Custom domain

To use a custom domain (e.g. `cassette.mathieu-dubart.fr`):

1. Add a `CNAME` file in `public/` containing the bare domain (one line, no protocol).
2. In `astro.config.mjs`, set `site` to the new origin and change `base` to `/`.
3. In `Settings → Pages`, enter the same domain in **Custom domain**.
4. Configure DNS — for an apex domain add `A` records pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`); for a subdomain, add a `CNAME` record pointing to `<username>.github.io`.

## Project structure

```
cassette-web/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── cassette-wow-loop.svg     # nav + footer logo
├── src/
│   ├── layouts/
│   │   └── Layout.astro              # html shell, SEO meta, JSON-LD, IO reveal script
│   ├── pages/
│   │   └── index.astro               # composes the sections
│   ├── components/
│   │   ├── Hero.astro                # implemented
│   │   └── Footer.astro              # implemented
│   └── styles/
│       └── global.css                # Tailwind import + @theme tokens + base styles
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Design tokens

All colors, fonts, and warm shadows are declared as Tailwind v4 theme variables in `src/styles/global.css`. Use them via the generated utility classes (`bg-bg-primary`, `text-accent-primary`, `border-border-subtle`, `shadow-warm-md`, etc.).

### Reveal-on-scroll

Add the `reveal` class (and optionally `reveal-delay-100|200|300|400`) to any element. `Layout.astro` runs an `IntersectionObserver` that adds `is-visible` once it enters the viewport. `prefers-reduced-motion` skips the animation.

## Status

- [x] Layout, SEO, JSON-LD
- [x] Design system (palette, typography, shadows, reduced-motion)
- [x] Hero
- [x] Footer
- [ ] Features
- [ ] Server compatibility
- [ ] Open source / values
- [ ] FAQ

## License

GPL-3.0-or-later, matching the Cassette app.
