# bursit-ui-tokens

> Shared CSS custom properties for any framework.

A framework-agnostic design tokens library using CSS custom properties (CSS variables). Works with Angular, React, Vue, Svelte, or plain HTML/CSS.

## Installation

```bash
npm install bursit-ui-tokens
```

> **Note:** If you use the SCSS mixins, you need `sass@^1.69.0` as a peer dependency.

## Usage

### Plain CSS

Import tokens and component styles:

```css
@import "bursit-ui-tokens";
```

Import only the tokens (no component styles):

```css
@import "bursit-ui-tokens/tokens.css";
```

Or in HTML:

```html
<link rel="stylesheet" href="node_modules/bursit-ui-tokens/index.css">
```

### SCSS

For tokens, mixins, and component styles:

```scss
@use "bursit-ui-tokens" as *;

.my-button {
  @include button-base;

  &:focus {
    @include focus-ring;
  }
}
```

Import only the mixins:

```scss
@use "bursit-ui-tokens/mixins" as *;
```

## Customizing Tokens

Override any token in your `:root` or a specific scope:

```css
:root {
  --color-primary: #6366f1;
  --color-primary-contrast: #ffffff;
  --space-md: 1.25rem;
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

Or scope to a component:

```css
.my-theme {
  --color-primary: #your-brand-color;
}
```

## Theming

Light theme is the default. Enable dark mode with one of these methods:

**Attribute on `<html>`:**

```html
<html bursit-theme="dark">
```

**Class on any element:**

```html
<body class="bursit-theme-dark">
```

**Toggle via JavaScript:**

```js
document.documentElement.setAttribute('bursit-theme', 'dark');
// or
document.body.classList.add('bursit-theme-dark');
```

## Token Reference

### Colors — Brand

| Token | Default | Description |
|-------|---------|-------------|
| `--color-primary` | `#3b82f6` | Primary brand color for actions and links |
| `--color-primary-contrast` | `#ffffff` | Text color on primary |
| `--color-primary-hover` | `#2563eb` | Hover state for primary |
| `--color-primary-active` | `#1d4ed8` | Active/pressed state for primary |
| `--color-secondary` | `#8b5cf6` | Secondary brand color for accents |
| `--color-secondary-contrast` | `#ffffff` | Text color on secondary |

### Colors — Neutral

| Token | Default | Description |
|-------|---------|-------------|
| `--color-neutral-0` | `#fafafa` | Lightest neutral |
| `--color-neutral-50` | `#ffffff` | Pure white |
| `--color-neutral-100` | `#f4f4f5` | Light neutral |
| `--color-neutral-200` | `#e4e4e7` | Subtle borders |
| `--color-neutral-300` | `#d4d4d8` | Disabled states |
| `--color-neutral-400` | `#a1a1aa` | Placeholder text |
| `--color-neutral-500` | `#71717a` | Secondary text |
| `--color-neutral-600` | `#52525b` | Body text |
| `--color-neutral-700` | `#3f3f46` | Headings |
| `--color-neutral-800` | `#27272a` | Dark backgrounds |
| `--color-neutral-900` | `#18181b` | Darker backgrounds |
| `--color-neutral-1000` | `#09090b` | Darkest (text) |

### Colors — Semantic

| Token | Default | Description |
|-------|---------|-------------|
| `--color-success` | `#22c55e` | Positive feedback |
| `--color-success-contrast` | `#ffffff` | Text on success |
| `--color-warning` | `#f59e0b` | Alerts, caution |
| `--color-warning-contrast` | `#ffffff` | Text on warning |
| `--color-error` | `#ef4444` | Errors, invalid states |
| `--color-error-contrast` | `#ffffff` | Text on error |
| `--color-error-hover` | `#dc2626` | Hover state for error |
| `--color-error-active` | `#b91c1c` | Active state for error |
| `--color-info` | `#3b82f6` | Informational messages |
| `--color-info-contrast` | `#ffffff` | Text on info |

### Colors — Alpha Variants

| Token | Default | Description |
|-------|---------|-------------|
| `--color-primary-alpha-8` | `rgb(from var(--color-primary) r g b / 0.08)` | Subtle primary background |
| `--color-primary-alpha-10` | `rgb(from var(--color-primary) r g b / 0.1)` | Primary background |
| `--color-primary-alpha-15` | `rgb(from var(--color-primary) r g b / 0.15)` | Primary background (stronger) |
| `--color-success-alpha-10` | `rgb(from var(--color-success) r g b / 0.1)` | Success background |
| `--color-warning-alpha-10` | `rgb(from var(--color-warning) r g b / 0.1)` | Warning background |
| `--color-error-alpha-10` | `rgb(from var(--color-error) r g b / 0.1)` | Error background |
| `--color-error-alpha-15` | `rgb(from var(--color-error) r g b / 0.15)` | Error background (stronger) |
| `--color-info-alpha-10` | `rgb(from var(--color-info) r g b / 0.1)` | Info background |
| `--color-overlay` | `rgb(0 0 0 / 0.5)` | Modal backdrop |
| `--color-white-alpha-15` | `rgb(255 255 255 / 0.15)` | Pattern overlays |

### Typography — Font Family

| Token | Default | Description |
|-------|---------|-------------|
| `--font-family-sans` | `ui-sans-serif, system-ui, ...` | Primary UI font |
| `--font-family-mono` | `ui-monospace, SFMono-Regular, ...` | Code and technical content |

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

### Typography — Font Weight

| Token | Default | Description |
|-------|---------|-------------|
| `--font-weight-normal` | `400` | Regular text |
| `--font-weight-medium` | `500` | Medium emphasis |
| `--font-weight-bold` | `700` | Bold, headings |

### Typography — Line Height

| Token | Default | Description |
|-------|---------|-------------|
| `--line-height-tight` | `1.25` | Headings |
| `--line-height-normal` | `1.5` | Body text (default) |
| `--line-height-relaxed` | `1.75` | Large text, reading |

### Spacing

| Token | Default | Description |
|-------|---------|-------------|
| `--space-2xs` | `0.125rem` (2px) | Tight spacing |
| `--space-xs` | `0.25rem` (4px) | Icon spacing |
| `--space-sm` | `0.5rem` (8px) | Tight gaps |
| `--space-md` | `1rem` (16px) | Default gaps |
| `--space-lg` | `1.5rem` (24px) | Section spacing |
| `--space-xl` | `2rem` (32px) | Large gaps |
| `--space-2xl` | `3rem` (48px) | Section margins |
| `--space-3xl` | `4rem` (64px) | Page margins |

### Borders — Radius

| Token | Default | Description |
|-------|---------|-------------|
| `--radius-sm` | `0.25rem` (4px) | Inputs, buttons |
| `--radius-md` | `0.5rem` (8px) | Cards |
| `--radius-lg` | `0.75rem` (12px) | Modals |
| `--radius-full` | `9999px` | Pills, avatars |

### Borders — Width

| Token | Default | Description |
|-------|---------|-------------|
| `--border-width-thin` | `1px` | Dividers |
| `--border-width-medium` | `2px` | Inputs |
| `--border-width-thick` | `3px` | Focus states |

### Shadows

| Token | Default | Description |
|-------|---------|-------------|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Modals |
| `--shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Overlays |

### Transitions — Duration

| Token | Default | Description |
|-------|---------|-------------|
| `--duration-fast` | `150ms` | Micro-interactions |
| `--duration-normal` | `300ms` | Default |
| `--duration-slow` | `500ms` | Page animations |

### Transitions — Easing

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-linear` | `linear` | No acceleration |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exiting elements |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Entering elements |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default (smooth) |

### Z-Index

| Token | Default | Description |
|-------|---------|-------------|
| `--z-index-base` | `0` | Base elements |
| `--z-index-dropdown` | `100` | Dropdowns |
| `--z-index-fixed` | `200` | Header, footer |
| `--z-index-modal` | `300` | Modals |
| `--z-index-tooltip` | `400` | Tooltips |

## Available Mixins (SCSS only)

```scss
// Typography
rem($px)
em($px, $context)
fluid-type($min-size, $max-size)
line-clamp($lines)
visually-hidden()
visually-hidden-reset()

// Layout
flex-center($direction)
container($max-width)
gap($gap)

// Focus & Interaction
focus-ring($color, $offset)
transition($properties, $duration, $easing)

// Buttons
button-reset()
button-base($bg, $color, $padding-y, $padding-x)
button-ghost($color)

// Inputs
input-reset()
input-base($bg, $border, $padding-y, $padding-x)
```

## Development

```bash
# Install dependencies
npm install

# Build CSS artifacts (generates index.css and tokens.css)
npm run build

# Start VitePress docs dev server
npm run docs:dev

# Build VitePress docs
npm run docs:build
```

## License

MIT
