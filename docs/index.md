# bursit-ui-tokens

Shared CSS custom properties for Angular and React components.

## Quick Start

```bash
npm install bursit-ui-tokens
```

### Plain CSS

```css
@import "bursit-ui-tokens";
```

### SCSS with Mixins

```scss
@use "bursit-ui-tokens" as *;
@use "bursit-ui-tokens/mixins" as *;

.my-button {
  @include button-base;
}
```

## Features

- **Framework agnostic** — Works with Angular, React, Vue, or any framework
- **CSS Custom Properties** — Easy to customize and theme
- **Semantic naming** — Clear, meaningful variable names
- **Comprehensive tokens** — Colors, typography, spacing, shadows
- **SCSS mixins** — Helper functions for common patterns

## Customizing

Override in your `:root`:

```css
:root {
  --color-primary: #your-brand-color;
  --font-family-sans: 'Your Font', sans-serif;
}
```

Or scope to a component:

```css
.my-theme {
  --color-primary: #custom-color;
}
```

## Available Tokens

- [Colors](/colors) — Brand, neutral, semantic
- [Typography](/typography) — Font families, sizes, weights
- [Spacing](/spacing) — Margin, padding, gaps
- [Borders & Shadows](/borders) — Radius, widths, elevation