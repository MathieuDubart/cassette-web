# Cassette — Landing Page

Public marketing site for [Cassette](https://github.com/MathieuDubart/Cassette), a native iOS and macOS client for Subsonic and OpenSubsonic music servers.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with `withastro/action@v3` and publishes it via GitHub Pages.

Before the first deploy, in the repo settings under **Pages**, set **Source** to **GitHub Actions**.

### Custom domain

To use a custom domain (e.g. `cassette.mathieu-dubart.fr`):

1. Add a `CNAME` file in `public/` containing the bare domain (one line, no protocol).
2. Update `site` in `astro.config.mjs` to the new origin and clear `base` (set to `/`).
3. In the repo settings under **Pages**, enter the same domain in **Custom domain**.
4. Configure DNS — for an apex domain add `A` records pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`); for a subdomain, add a `CNAME` record pointing to `<username>.github.io`.

## License

GPL-3.0-or-later, matching the Cassette app.
