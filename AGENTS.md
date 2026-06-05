# AGENTS.md — bursit-ui-tokens

## Build & Dev

```bash
npm run build          # sass src/index.scss index.css --no-source-map
npm run docs:dev       # vitepress dev docs
npm run docs:build     # vitepress build docs
npm run docs:preview   # vitepress preview docs
```

There is no lint, test, typecheck, or CI.

## Architecture

- **`src/_tokens.scss`** — source of truth for all design tokens (CSS custom properties in `:root`, plus light/dark theme selectors)
- **`src/_mixins.scss`** — SCSS helpers (rem(), fluid-type(), button-base(), input-base(), etc.). Uses `@use 'sass:math'`
- **`src/index.scss`** — entrypoint that `@forward`'s tokens + mixins
- **`index.css`** — build artifact, produced by `npm run build`

## Package boundaries

- Published package entry: `index.scss` (Sass), `index.css` (CSS)
- Subpath `./tokens` exports `_tokens.scss` (Sass only, no plain CSS alternative)
- Subpath `./mixins` exports `_mixins.scss`
- Subpath `./components/*` exports individual component token files
- `"files"` in `package.json` publishes all `*.scss` in root + `src/` directory
- `"type": "module"` — ESM only
- Sass peerDependency: `sass@^1.69.0` (required for `@use` module system)

## Conventions

- SCSS uses `@use` / `@forward` (Dart Sass module system), NOT legacy `@import`
- Token naming follows `--category-name-scale` pattern (e.g. `--color-primary`, `--space-md`, `--font-size-base`)
- Default values in `:root`, themed overrides via `html[bursit-theme="dark"]` / `html[bursit-theme="light"]` or `.bursit-theme-dark` / `.bursit-theme-light`