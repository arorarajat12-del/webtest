# Tinyvation website

A static Next.js 16 marketing site for Tinyvation, built with the App Router, TypeScript, Tailwind CSS, and custom HTML/CSS/SVG-style visual details.

## Node version

Use Node.js 26 if you want the latest Current release line. Node.js 24 is the current LTS line, and the project allows Node `>=24`, but the GitHub Pages workflow verifies the site on Node 26 with Next.js 16 and React 19.

If you use `nvm`:

```bash
nvm install
nvm use
```

If you use another version manager, read `.node-version` or `.nvmrc`; both are set to `26`.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build locally

```bash
npm run build
```

Because `next.config.ts` uses `output: 'export'`, a successful build writes the static site to `out/`.

## GitHub Pages deployment

This repository is intended to deploy through the workflow in `.github/workflows/deploy-pages.yml`.

In GitHub, set:

1. **Settings → Pages**
2. **Build and deployment → Source → GitHub Actions**
3. Run **Deploy static Next.js site to GitHub Pages** from the Actions tab, or push to `main`/`master`.

If GitHub Pages is instead set to **Deploy from a branch** and points at `/docs`, GitHub may run its legacy Jekyll builder. The `docs/.nojekyll` and `docs/index.html` files are only a fallback for that misconfiguration; they are not the real Tinyvation site.

## About the screenshot error

The screenshot error is from GitHub Pages' branch-based Jekyll builder, not from Next.js. It says GitHub tried to build from `/github/workspace/docs` and failed while rendering Jekyll assets. Switch Pages Source to **GitHub Actions** to deploy the actual Next.js export.
