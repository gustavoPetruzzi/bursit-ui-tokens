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
| `--color-neutral-0` | `#ffffff` | `#22282e` |
| `--color-neutral-50` | `#f9fafb` | `#272e35` |
| `--color-neutral-100` | `#eff2f5` | `#2b333b` |
| `--color-neutral-200` | `#dde3e9` | `#313b44` |
| `--color-neutral-300` | `#c0c9d3` | `#3e4a56` |
| `--color-neutral-400` | `#9aa8b6` | `#505e6d` |
| `--color-neutral-500` | `#647587` | `#647587` |
| `--color-neutral-600` | `#505e6d` | `#9aa8b6` |
| `--color-neutral-700` | `#3e4a56` | `#c0c9d3` |
| `--color-neutral-800` | `#313b44` | `#dde3e9` |
| `--color-neutral-900` | `#272e35` | `#eff2f5` |
| `--color-neutral-950` | `#22282e` | `#f9fafb` |
| `--color-neutral-1000` | `#111418` | `#ffffff` |

### Semantic

Brand and semantic colors switch to lighter steps in dark mode; contrast colors flip to dark text.

| Token | Light | Dark |
|-------|-------|------|
| `--color-primary` | `#835a60` | `#ebb2bd` |
| `--color-primary-contrast` | `#ffffff` | `#22282e` |
| `--color-secondary` | `#3a6b9c` | `#7ba3cc` |
| `--color-secondary-strong` | `#23384d` | `#e7edf3` |
| `--color-secondary-contrast` | `#ffffff` | `#22282e` |
| `--color-success` | `#22c55e` | `#4ade80` |
| `--color-success-contrast` | `#22282e` | `#22282e` |
| `--color-warning` | `#f59e0b` | `#fbbf24` |
| `--color-warning-contrast` | `#272e35` | `#22282e` |
| `--color-error` | `#dc2626` | `#f87171` |
| `--color-error-contrast` | `#ffffff` | `#22282e` |
| `--color-info` | `#2563eb` | `#60a5fa` |
| `--color-info-contrast` | `#ffffff` | `#22282e` |
| `--color-border-control` | `#647587` | `#9aa8b6` |

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
