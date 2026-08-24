# bursit-ui-tokens

[![npm](https://img.shields.io/npm/v/bursit-ui-tokens)](https://www.npmjs.com/package/bursit-ui-tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Framework-agnostic design tokens using CSS custom properties. Works with Angular, React, Vue, Svelte, or plain HTML/CSS.

**Brand palette:** electric indigo + cool cyan. Dark and light themes built in.

## Installation

```bash
npm install bursit-ui-tokens
```

> **Note:** If you use the SCSS mixins, you need `sass@^1.69.0` as a peer dependency.

## Usage

### Plain CSS

```css
@import 'bursit-ui-tokens';
```

Or in HTML:

```html
<link rel="stylesheet" href="node_modules/bursit-ui-tokens/index.css">
```

### SCSS

**Everything (tokens + mixins + component styles):**

```scss
@use 'bursit-ui-tokens' as *;

.my-button {
  @include button-base;
  &:focus {
    @include focus-ring;
  }
}
```

**Tokens only:**

```scss
@use 'bursit-ui-tokens/tokens' as *;
```

**Mixins only:**

```scss
@use 'bursit-ui-tokens/mixins' as *;
```

**Individual components:**

```scss
@use 'bursit-ui-tokens/components/button' as *;
```

## Theming

Light theme is the default. Enable dark mode with one of these:

**Attribute on `<html>`:**

```html
<html bursit-theme="dark">
```

**Class on any element:**

```html
<body class="dark">
```

**Toggle via JavaScript:**

```js
document.documentElement.setAttribute('bursit-theme', 'dark');
// or
document.body.classList.add('dark');
```

Dark mode redefines only the tokens that change between modes (colors, shadows). Spacing, typography, and motion are inherited from `:root`. Animations respect `prefers-reduced-motion` automatically.

## Token Reference

Values shown are **light theme defaults**. In dark mode, brand and semantic colors switch to lighter steps, neutrals invert their scale (`--color-neutral-0` becomes darkest), and shadows get stronger.

### Colors — Brand Primary (Indigo)

| Token | Default | Description |
|-------|---------|-------------|
| `--color-primary` | `#6366f1` | Indigo 500 — primary brand color |
| `--color-primary-hover` | `#4f46e5` | Hover state (indigo 600) |
| `--color-primary-active` | `#4338ca` | Active/pressed state (indigo 700) |
| `--color-primary-subtle` | `#eef2ff` | Tinted background (indigo 50) |
| `--color-primary-contrast` | `#ffffff` | Text on primary |

### Colors — Secondary (Cyan)

| Token | Default | Description |
|-------|---------|-------------|
| `--color-secondary` | `#06b6d4` | Cyan 500 — secondary brand color |
| `--color-secondary-hover` | `#0891b2` | Hover state (cyan 600) |
| `--color-secondary-active` | `#0e7490` | Active state (cyan 700) |
| `--color-secondary-subtle` | `#ecfeff` | Tinted background (cyan 50) |
| `--color-secondary-contrast` | `#ffffff` | Text on secondary |

### Colors — Neutral

| Token | Default | Description |
|-------|---------|-------------|
| `--color-neutral-0` | `#ffffff` | Pure white |
| `--color-neutral-50` | `#f8fafc` | Lightest neutral |
| `--color-neutral-100` | `#f1f5f9` | Sunken backgrounds |
| `--color-neutral-200` | `#e2e8f0` | Subtle borders |
| `--color-neutral-300` | `#cbd5e1` | Strong borders, disabled states |
| `--color-neutral-400` | `#94a3b8` | Placeholder, subtle text |
| `--color-neutral-500` | `#64748b` | Muted text |
| `--color-neutral-600` | `#475569` | Secondary text (dark mode) |
| `--color-neutral-700` | `#334155` | Headings on dark surfaces |
| `--color-neutral-800` | `#1e293b` | Elevated dark backgrounds |
| `--color-neutral-900` | `#0f172a` | Body text (light mode) |
| `--color-neutral-950` | `#080d17` | Page background (dark mode) |
| `--color-neutral-1000` | `#020408` | Darkest step |

The scale inverts in dark mode: `-0` becomes darkest and `-1000` becomes lightest, so components keep working without changes.

### Colors — Semantic

| Token | Default | Description |
|-------|---------|-------------|
| `--color-success` | `#22c55e` | Positive feedback |
| `--color-success-hover` | `#16a34a` | Hover state |
| `--color-success-active` | `#15803d` | Active state |
| `--color-success-contrast` | `#ffffff` | Text on success |
| `--color-warning` | `#f59e0b` | Alerts, caution |
| `--color-warning-hover` | `#d97706` | Hover state |
| `--color-warning-active` | `#d97706` | Active state |
| `--color-warning-contrast` | `#0f172a` | Text on warning (dark text for AA contrast) |
| `--color-error` | `#ef4444` | Errors, invalid states |
| `--color-error-hover` | `#dc2626` | Hover state |
| `--color-error-active` | `#b91c1c` | Active state |
| `--color-error-contrast` | `#ffffff` | Text on error |
| `--color-error-text` | `#dc2626` | Error text on light backgrounds (WCAG AA) — `#f87171` in dark mode |
| `--color-info` | `#818cf8` | Informational messages (light indigo, distinct from primary) |
| `--color-info-contrast` | `#ffffff` | Text on info |

### Colors — Alpha Variants

| Token | Default | Description |
|-------|---------|-------------|
| `--color-primary-alpha-8` | `rgb(99 102 241 / 0.08)` | Subtle primary background |
| `--color-primary-alpha-15` | `rgb(99 102 241 / 0.15)` | Primary background |
| `--color-primary-alpha-20` | `rgb(99 102 241 / 0.2)` | Primary background (stronger) |
| `--color-secondary-alpha-8` | `rgb(6 182 212 / 0.08)` | Subtle secondary background |
| `--color-secondary-alpha-15` | `rgb(6 182 212 / 0.15)` | Secondary background |
| `--color-success-alpha-10` | `rgb(34 197 94 / 0.1)` | Success background |
| `--color-success-alpha-15` | `rgb(34 197 94 / 0.15)` | Success background (stronger) |
| `--color-warning-alpha-10` | `rgb(245 158 11 / 0.1)` | Warning background |
| `--color-warning-alpha-15` | `rgb(245 158 11 / 0.15)` | Warning background (stronger) |
| `--color-error-alpha-10` | `rgb(239 68 68 / 0.1)` | Error background |
| `--color-error-alpha-15` | `rgb(239 68 68 / 0.15)` | Error background (stronger) |
| `--color-info-alpha-10` | `rgb(129 140 248 / 0.1)` | Info background |
| `--color-info-alpha-15` | `rgb(129 140 248 / 0.15)` | Info background (stronger) |
| `--color-overlay` | `rgb(15 23 42 / 0.55)` | Modal backdrop |
| `--color-white-alpha-15` | `rgb(255 255 255 / 0.15)` | Pattern overlays |
| `--color-black-alpha-10` | `rgb(2 4 8 / 0.1)` | Utility shadow tint |

### Colors — Surfaces, Text & Borders

| Token | Default | Description |
|-------|---------|-------------|
| `--color-bg` | `#f8fafc` | Page background |
| `--color-bg-elevated` | `#ffffff` | Cards, panels, modals |
| `--color-bg-sunken` | `#f1f5f9` | Wells, inset areas |
| `--color-text` | `#0f172a` | Body text |
| `--color-text-muted` | `#64748b` | Secondary text |
| `--color-text-subtle` | `#94a3b8` | Placeholders, hints |
| `--color-text-inverse` | `#ffffff` | Text on colored fills |
| `--color-border` | `#e2e8f0` | Default borders |
| `--color-border-strong` | `#cbd5e1` | Emphasized borders |
| `--color-focus-ring` | `rgb(99 102 241 / 0.4)` | Focus indicator color |

### Typography — Font Family

| Token | Default | Description |
|-------|---------|-------------|
| `--font-family-sans` | `"Inter", "Geist", system-ui, ...` | Primary UI font |
| `--font-family-mono` | `"JetBrains Mono", "Fira Code", ...` | Code and technical content |
| `--font-family-display` | `var(--font-family-sans)` | Headings (alias, override freely) |

### Typography — Font Size

| Token | Default | Description |
|-------|---------|-------------|
| `--font-size-xs` | `0.75rem` (12px) | Helper text |
| `--font-size-sm` | `0.875rem` (14px) | Small text |
| `--font-size-base` | `1rem` (16px) | Body text |
| `--font-size-lg` | `1.125rem` (18px) | Lead text |
| `--font-size-xl` | `1.25rem` (20px) | H3 |
| `--font-size-2xl` | `1.5rem` (24px) | H2 |
| `--font-size-3xl` | `1.875rem` (30px) | H1 |
| `--font-size-4xl` | `2.25rem` (36px) | Display |
| `--font-size-5xl` | `3rem` (48px) | Hero display |

### Typography — Font Weight

| Token | Default | Description |
|-------|---------|-------------|
| `--font-weight-normal` | `400` | Regular text |
| `--font-weight-medium` | `500` | Medium emphasis |
| `--font-weight-semibold` | `600` | Buttons, labels |
| `--font-weight-bold` | `700` | Bold, headings |

### Typography — Line Height

| Token | Default | Description |
|-------|---------|-------------|
| `--line-height-tight` | `1.25` | Headings |
| `--line-height-snug` | `1.375` | Dense UI text |
| `--line-height-normal` | `1.5` | Body text (default) |
| `--line-height-relaxed` | `1.625` | Long-form reading |
| `--line-height-loose` | `2` | Airy layouts |

### Typography — Letter Spacing

| Token | Default | Description |
|-------|---------|-------------|
| `--letter-spacing-tight` | `-0.025em` | Large headings |
| `--letter-spacing-normal` | `0em` | Default |
| `--letter-spacing-wide` | `0.025em` | Small caps, labels |
| `--letter-spacing-wider` | `0.05em` | Overlines, tags |
| `--letter-spacing-widest` | `0.1em` | All-caps micro labels |

### Spacing

| Token | Default | Description |
|-------|---------|-------------|
| `--space-0` | `0` | Reset |
| `--space-px` | `1px` | Hairline gaps |
| `--space-xs` | `0.25rem` (4px) | Icon spacing |
| `--space-sm` | `0.5rem` (8px) | Tight gaps |
| `--space-md` | `1rem` (16px) | Default gaps |
| `--space-lg` | `1.5rem` (24px) | Section spacing |
| `--space-xl` | `2rem` (32px) | Large gaps |
| `--space-2xl` | `3rem` (48px) | Section margins |
| `--space-3xl` | `4rem` (64px) | Page margins |
| `--space-4xl` | `6rem` (96px) | Hero sections |

### Borders — Style & Width

| Token | Default | Description |
|-------|---------|-------------|
| `--border-style` | `solid` | Global border style |
| `--border-width-thin` | `1px` | Dividers |
| `--border-width-medium` | `2px` | Inputs |
| `--border-width-thick` | `4px` | Focus states |

### Borders — Radius

| Token | Default | Description |
|-------|---------|-------------|
| `--radius-none` | `0` | Sharp corners |
| `--radius-xs` | `0.125rem` (2px) | Chips, tags |
| `--radius-sm` | `0.375rem` (6px) | Inputs, buttons |
| `--radius-md` | `0.5rem` (8px) | Dropdowns |
| `--radius-lg` | `0.75rem` (12px) | Cards |
| `--radius-xl` | `1rem` (16px) | Panels, dialogs |
| `--radius-2xl` | `1.5rem` (24px) | Modals |
| `--radius-full` | `9999px` | Pills, avatars |

### Shadows

Tinted with indigo for coherence with the brand. All get stronger in dark mode.

| Token | Default | Description |
|-------|---------|-------------|
| `--shadow-xs` | `0 1px 2px 0 rgb(30 27 75 / 0.04)` | Hairline elevation |
| `--shadow-sm` | `0 1px 3px 0 rgb(30 27 75 / 0.08), 0 1px 2px -1px rgb(30 27 75 / 0.06)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px -1px rgb(30 27 75 / 0.08), 0 2px 4px -2px rgb(30 27 75 / 0.06)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgb(30 27 75 / 0.08), 0 4px 6px -4px rgb(30 27 75 / 0.05)` | Popovers |
| `--shadow-xl` | `0 20px 25px -5px rgb(30 27 75 / 0.1), 0 8px 10px -6px rgb(30 27 75 / 0.06)` | Modals |
| `--shadow-2xl` | `0 25px 50px -12px rgb(30 27 75 / 0.2)` | Full-screen overlays |
| `--shadow-inner` | `inset 0 2px 4px 0 rgb(30 27 75 / 0.06)` | Inset wells |
| `--shadow-glow-primary` | `0 0 0 3px rgb(99 102 241 / 0.3)` | Primary accent glow |
| `--shadow-glow-secondary` | `0 0 0 3px rgb(6 182 212 / 0.3)` | Secondary accent glow |

### Motion — Duration

| Token | Default | Description |
|-------|---------|-------------|
| `--duration-instant` | `50ms` | State feedback |
| `--duration-fast` | `100ms` | Micro-interactions |
| `--duration-normal` | `200ms` | Default |
| `--duration-slow` | `350ms` | Panels, drawers |
| `--duration-slower` | `500ms` | Page animations |

All durations collapse to `0ms` when the user enables `prefers-reduced-motion`.

### Motion — Easing

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-linear` | `linear` | No acceleration |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Entering elements |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exiting elements |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default (smooth) |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight overshoot |
| `--ease-bounce` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Playful bounce |

### Z-Index

| Token | Default | Description |
|-------|---------|-------------|
| `--z-index-below` | `-1` | Behind everything |
| `--z-index-base` | `0` | Base elements |
| `--z-index-raised` | `10` | Raised cards |
| `--z-index-dropdown` | `100` | Dropdowns |
| `--z-index-sticky` | `200` | Sticky headers |
| `--z-index-overlay` | `300` | Backdrops |
| `--z-index-modal` | `400` | Modals |
| `--z-index-tooltip` | `500` | Tooltips |
| `--z-index-toast` | `600` | Toasts |

## Customizing Tokens

Override any token in your `:root` or a specific scope:

```css
:root {
  --color-primary: #10b981;
  --color-primary-contrast: #ffffff;
  --space-md: 1.25rem;
  --font-family-sans: 'Poppins', system-ui, sans-serif;
}
```

Or scope to a component:

```css
.my-theme {
  --color-primary: #your-brand-color;
}
```

## Mixins & Functions (SCSS only)

Functions return a value; mixins emit declarations.

**Functions:**

```scss
rem($px)                                        // px → rem
em($px, $context: 16px)                         // px → em
fluid-type($min-size, $max-size,
           $min-width: 320px, $max-width: 1280px) // fluid clamp()
```

**Mixins:**

```scss
// Layout
flex-center($direction: row)
container($max-width: 1280px)
gap($gap: var(--space-md))

// Typography
line-clamp($lines)
visually-hidden()
visually-hidden-reset()

// Focus & Interaction
focus-ring($color: var(--color-primary), $offset: 2px)
transition($properties: all, $duration: var(--duration-normal), $easing: var(--ease-in-out))

// Buttons
button-reset()
button-base($bg, $color, $padding-y, $padding-x)
button-ghost($color: var(--color-primary))

// Inputs
input-reset()
input-base($bg, $border, $padding-y, $padding-x)
```

## Development

```bash
# Install dependencies
npm install

# Validate token integrity (run before pushing)
npm run validate

# Build CSS (generates index.css)
npm run build

# Start VitePress docs dev server
npm run docs:dev

# Build VitePress docs
npm run docs:build
```

CI runs the validation on every push and pull request.

## License

MIT
