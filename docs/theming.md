# Theming & Dark Mode

The design system supports light and dark themes through CSS custom properties. Themes work with both plain CSS (`tokens.css`) and SCSS.

## How It Works

Color tokens (`--color-*`) are defined in `:root` with light defaults. When the theme changes, the dark theme selector overrides their values — components that reference them update automatically.

### Theme Selectors

Themes are applied via one of two selectors:

| Selector | Usage |
|----------|-------|
| `html[bursit-theme="dark"]` | Set the attribute on `<html>` |
| `.bursit-theme-dark` | Add the class to any container |

The same applies for light mode: `html[bursit-theme="light"]` or `.bursit-theme-light`.

### Setting the Theme

```html
<!-- Light theme (default) -->
<html lang="en" bursit-theme="light">

<!-- Dark theme -->
<html lang="en" bursit-theme="dark">

<!-- Scoped dark theme (only affects children) -->
<div class="bursit-theme-dark">
  <!-- everything in here is dark -->
</div>
```

## Theme Token Reference

All `--color-*` tokens change value based on the active theme. Use them directly in components for automatic theme switching.

### Neutral Scale

| Token | Light | Dark |
|-------|-------|------|
| `--color-neutral-0` | `#fafafa` | `#111113` |
| `--color-neutral-100` | `#f4f4f5` | `#1a1a1f` |
| `--color-neutral-200` | `#e4e4e7` | `#25252b` |
| `--color-neutral-300` | `#d4d4d8` | `#31313a` |
| `--color-neutral-400` | `#a1a1aa` | `#4a4a56` |
| `--color-neutral-500` | `#71717a` | `#656573` |
| `--color-neutral-600` | `#52525b` | `#828290` |
| `--color-neutral-700` | `#3f3f46` | `#a1a1ad` |
| `--color-neutral-800` | `#27272a` | `#c4c4cc` |
| `--color-neutral-900` | `#18181b` | `#e3e3e8` |
| `--color-neutral-1000` | `#09090b` | `#f5f5f7` |

### Semantic

| Token | Light | Dark |
|-------|-------|------|
| `--color-primary` | `#3b82f6` | `#60a5fa` |
| `--color-primary-contrast` | `#ffffff` | `#0f172a` |
| `--color-secondary` | `#8b5cf6` | `#a78bfa` |
| `--color-secondary-contrast` | `#ffffff` | `#0f172a` |
| `--color-success` | `#22c55e` | `#4ade80` |
| `--color-success-contrast` | `#ffffff` | `#0f172a` |
| `--color-warning` | `#f59e0b` | `#fbbf24` |
| `--color-warning-contrast` | `#ffffff` | `#0f172a` |
| `--color-error` | `#ef4444` | `#f87171` |
| `--color-error-contrast` | `#ffffff` | `#0f172a` |
| `--color-info` | `#3b82f6` | `#60a5fa` |
| `--color-info-contrast` | `#ffffff` | `#0f172a` |

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
