# Theming & Dark Mode

The design system supports light and dark themes through CSS custom properties. Themes work with both plain CSS (`index.css`) and SCSS.

## How It Works

Color tokens (`--color-*`) are defined in `:root` with light defaults. When the theme changes, the dark theme selector overrides their values — components that reference them update automatically.

### Theme Selectors

Themes are applied via one of two selectors:

| Selector | Usage |
|----------|-------|
| `html[bursit-theme="dark"]` | Set the attribute on `<html>` |
| `.dark` | Add the class to any container |

Light mode is the `:root` default — there is no separate light override block. Setting `bursit-theme="light"` explicitly is harmless (it simply matches nothing and keeps the defaults).

### Setting the Theme

```html
<!-- Light theme (default) -->
<html lang="en" bursit-theme="light">

<!-- Dark theme -->
<html lang="en" bursit-theme="dark">

<!-- Scoped dark theme (only affects children) -->
<div class="dark">
  <!-- everything in here is dark -->
</div>
```

## Theme Token Reference

All `--color-*` tokens change value based on the active theme. Use them directly in components for automatic theme switching.

### Neutral Scale

The scale inverts in dark mode: `-0` becomes darkest and `-1000` becomes lightest.

| Token | Light | Dark |
|-------|-------|------|
| `--color-neutral-0` | `#ffffff` | `#080d17` |
| `--color-neutral-50` | `#f8fafc` | `#0f172a` |
| `--color-neutral-100` | `#f1f5f9` | `#172033` |
| `--color-neutral-200` | `#e2e8f0` | `#1e293b` |
| `--color-neutral-300` | `#cbd5e1` | `#334155` |
| `--color-neutral-400` | `#94a3b8` | `#475569` |
| `--color-neutral-500` | `#64748b` | `#64748b` |
| `--color-neutral-600` | `#475569` | `#94a3b8` |
| `--color-neutral-700` | `#334155` | `#cbd5e1` |
| `--color-neutral-800` | `#1e293b` | `#e2e8f0` |
| `--color-neutral-900` | `#0f172a` | `#f1f5f9` |
| `--color-neutral-950` | `#080d17` | `#f8fafc` |
| `--color-neutral-1000` | `#020408` | `#ffffff` |

### Semantic

Brand and semantic colors switch to lighter steps in dark mode; contrast colors flip to dark text.

| Token | Light | Dark |
|-------|-------|------|
| `--color-primary` | `#6366f1` | `#818cf8` |
| `--color-primary-contrast` | `#ffffff` | `#080d17` |
| `--color-secondary` | `#06b6d4` | `#22d3ee` |
| `--color-secondary-contrast` | `#ffffff` | `#080d17` |
| `--color-success` | `#22c55e` | `#4ade80` |
| `--color-success-contrast` | `#ffffff` | `#080d17` |
| `--color-warning` | `#f59e0b` | `#fbbf24` |
| `--color-warning-contrast` | `#0f172a` | `#080d17` |
| `--color-error` | `#ef4444` | `#f87171` |
| `--color-error-contrast` | `#ffffff` | `#080d17` |
| `--color-info` | `#818cf8` | `#a5b4fc` |
| `--color-info-contrast` | `#ffffff` | `#080d17` |

## Adding a Custom Theme

You can create your own theme by targeting the theme selectors:

```css
/* My custom "ocean" theme */
html[bursit-theme="ocean"] {
  --color-primary: #0ea5e9;
  --color-primary-contrast: #ffffff;
  --color-neutral-0: #0c1929;
  --color-neutral-100: #132238;
  --color-neutral-200: #1a2f4a;
  /* ... override as many as you need */
}
```

## JavaScript Toggle

A simple theme toggle:

```js
function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('bursit-theme')
  html.setAttribute('bursit-theme', current === 'dark' ? 'light' : 'dark')
}

// Respect user preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('bursit-theme', 'dark')
}
```

## Using in SCSS with Mixins

When using SCSS, the `button-base`, `input-base`, and other mixins pull from token variables. Since those tokens change with the theme selector, the mixins output works correctly in both themes without extra code.

```scss
@use 'bursit-ui-tokens/mixins' as *;

// These styles will adapt to the active theme automatically
.my-button {
  @include button-base;
}
```
