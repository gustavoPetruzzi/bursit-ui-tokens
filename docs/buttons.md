# Buttons

Design tokens for button components. All button styles use `--color-*` tokens so they automatically switch between light and dark modes.

## Variants

### Primary

Used for the main action on a page or in a section.

```css
.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-color);
  font-weight: var(--btn-font-weight);
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  border-radius: var(--btn-border-radius);
  border: var(--btn-border-width) solid transparent;
  transition: var(--btn-transition);
}

.btn-primary:hover {
  background: var(--btn-primary-hover-bg);
  color: var(--btn-primary-hover-color);
}

.btn-primary:active {
  background: var(--btn-primary-active-bg);
}

.btn-primary:disabled {
  opacity: var(--btn-disabled-opacity);
  cursor: not-allowed;
}
```

### Secondary

Used for supporting actions.

```css
.btn-secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-color);
  font-weight: var(--btn-font-weight);
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  border-radius: var(--btn-border-radius);
  border: var(--btn-border-width) solid transparent;
  transition: var(--btn-transition);
}

.btn-secondary:hover {
  background: var(--btn-secondary-hover-bg);
  color: var(--btn-secondary-hover-color);
}

.btn-secondary:active {
  background: var(--btn-secondary-active-bg);
}
```

### Outline

Transparent background with colored border. Used for tertiary actions.

```css
.btn-outline {
  background: var(--btn-outline-bg);
  color: var(--btn-outline-color);
  border: var(--btn-border-width) solid var(--btn-outline-border-color);
  font-weight: var(--btn-font-weight);
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  border-radius: var(--btn-border-radius);
  transition: var(--btn-transition);
}

.btn-outline:hover {
  background: var(--btn-outline-hover-bg);
  color: var(--btn-outline-hover-color);
  border-color: var(--btn-outline-hover-border-color);
}

.btn-outline:active {
  background: var(--btn-outline-active-bg);
}
```

### Ghost

No background or border. Blends into surrounding content.

```css
.btn-ghost {
  background: var(--btn-ghost-bg);
  color: var(--btn-ghost-color);
  font-weight: var(--btn-font-weight);
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  border-radius: var(--btn-border-radius);
  border: var(--btn-border-width) solid transparent;
  transition: var(--btn-transition);
}

.btn-ghost:hover {
  background: var(--btn-ghost-hover-bg);
  color: var(--btn-ghost-hover-color);
}

.btn-ghost:active {
  background: var(--btn-ghost-active-bg);
}
```

### Link

Looks like a text link but with button structure.

```css
.btn-link {
  background: var(--btn-link-bg);
  color: var(--btn-link-color);
  padding: var(--btn-link-padding-y) var(--btn-link-padding-x);
  border: none;
  text-decoration: var(--btn-link-text-decoration);
  font-weight: var(--btn-font-weight);
  transition: var(--btn-transition);
}

.btn-link:hover {
  color: var(--btn-link-hover-color);
  text-decoration: var(--btn-link-hover-text-decoration);
}
```

### Icon-only

For buttons that only contain an icon (no text).

```css
.btn-icon {
  background: var(--btn-icon-bg);
  color: var(--btn-icon-color);
  width: var(--btn-icon-size-md);
  height: var(--btn-icon-size-md);
  border-radius: var(--btn-border-radius);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--btn-transition);
}

.btn-icon:hover {
  background: var(--btn-icon-hover-bg);
  color: var(--btn-icon-hover-color);
}

.btn-icon:active {
  background: var(--btn-icon-active-bg);
}
```

### Danger

For destructive actions (delete, remove, etc.).

```css
.btn-danger {
  background: var(--btn-danger-bg);
  color: var(--btn-danger-color);
  font-weight: var(--btn-font-weight);
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  border-radius: var(--btn-border-radius);
  border: var(--btn-border-width) solid transparent;
  transition: var(--btn-transition);
}

.btn-danger:hover {
  background: var(--btn-danger-hover-bg);
  color: var(--btn-danger-hover-color);
}

.btn-danger:active {
  background: var(--btn-danger-active-bg);
}
```

## Sizes

### Small

```css
.btn-sm {
  padding: var(--btn-padding-y-sm) var(--btn-padding-x-sm);
  font-size: var(--btn-font-size-sm);
}
```

### Medium (default)

```css
.btn-md {
  padding: var(--btn-padding-y-md) var(--btn-padding-x-md);
  font-size: var(--btn-font-size-md);
}
```

### Large

```css
.btn-lg {
  padding: var(--btn-padding-y-lg) var(--btn-padding-x-lg);
  font-size: var(--btn-font-size-lg);
}
```

## Token Reference

### Global

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-font-weight` | `var(--font-weight-medium)` | Boldness of button text |
| `--btn-border-radius` | `var(--radius-sm)` | Corner roundness |
| `--btn-border-width` | `var(--border-width-thin)` | Border thickness |
| `--btn-disabled-opacity` | `0.5` | Opacity when disabled |
| `--btn-transition` | `all 150ms ease-in-out` | Default transition |
| `--btn-line-height` | `1` | Text line height |

### Sizes

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-padding-y-sm` | `0.25rem` | Small vertical padding |
| `--btn-padding-x-sm` | `0.5rem` | Small horizontal padding |
| `--btn-font-size-sm` | `0.875rem` | Small font size |
| `--btn-padding-y-md` | `0.5rem` | Medium vertical padding |
| `--btn-padding-x-md` | `1rem` | Medium horizontal padding |
| `--btn-font-size-md` | `1rem` | Medium font size |
| `--btn-padding-y-lg` | `0.75rem` | Large vertical padding |
| `--btn-padding-x-lg` | `1.5rem` | Large horizontal padding |
| `--btn-font-size-lg` | `1.125rem` | Large font size |

### Icon-only sizes

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-icon-size-sm` | `2rem` | Small icon button |
| `--btn-icon-size-md` | `2.5rem` | Medium icon button |
| `--btn-icon-size-lg` | `3rem` | Large icon button |

### Primary

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-primary-bg` | `var(--color-primary)` | Background |
| `--btn-primary-color` | `var(--color-primary-contrast)` | Text color |
| `--btn-primary-hover-bg` | `var(--color-primary)` | Hover background |
| `--btn-primary-hover-color` | `var(--color-primary-contrast)` | Hover text color |
| `--btn-primary-active-bg` | `var(--color-primary)` | Active background |

### Secondary

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-secondary-bg` | `var(--color-neutral-100)` | Background |
| `--btn-secondary-color` | `var(--color-neutral-900)` | Text color |
| `--btn-secondary-hover-bg` | `var(--color-neutral-200)` | Hover background |
| `--btn-secondary-hover-color` | `var(--color-neutral-1000)` | Hover text color |
| `--btn-secondary-active-bg` | `var(--color-neutral-300)` | Active background |

### Outline

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-outline-bg` | `transparent` | Background |
| `--btn-outline-color` | `var(--color-primary)` | Text color |
| `--btn-outline-border-color` | `var(--color-primary)` | Border color |
| `--btn-outline-hover-bg` | `var(--color-primary-alpha-8)` | Hover background |
| `--btn-outline-hover-color` | `var(--color-primary)` | Hover text color |
| `--btn-outline-hover-border-color` | `var(--color-primary)` | Hover border color |
| `--btn-outline-active-bg` | `var(--color-primary-alpha-15)` | Active background |

### Ghost

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-ghost-bg` | `transparent` | Background |
| `--btn-ghost-color` | `var(--color-neutral-600)` | Text color |
| `--btn-ghost-hover-bg` | `var(--color-neutral-100)` | Hover background |
| `--btn-ghost-hover-color` | `var(--color-neutral-900)` | Hover text color |
| `--btn-ghost-active-bg` | `var(--color-neutral-200)` | Active background |

### Link

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-link-bg` | `transparent` | Background |
| `--btn-link-color` | `var(--color-primary)` | Text color |
| `--btn-link-hover-color` | `var(--color-primary)` | Hover text color |
| `--btn-link-text-decoration` | `underline` | Text decoration |
| `--btn-link-hover-text-decoration` | `underline` | Hover text decoration |
| `--btn-link-padding-y` | `0` | Vertical padding |
| `--btn-link-padding-x` | `0` | Horizontal padding |

### Icon-only

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-icon-bg` | `transparent` | Background |
| `--btn-icon-color` | `var(--color-neutral-600)` | Text color |
| `--btn-icon-hover-bg` | `var(--color-neutral-100)` | Hover background |
| `--btn-icon-hover-color` | `var(--color-neutral-900)` | Hover text color |
| `--btn-icon-active-bg` | `var(--color-neutral-200)` | Active background |

### Danger

| Token | Default | Description |
|-------|---------|-------------|
| `--btn-danger-bg` | `var(--color-error)` | Background |
| `--btn-danger-color` | `var(--color-error-contrast)` | Text color |
| `--btn-danger-hover-bg` | `var(--color-error)` | Hover background |
| `--btn-danger-hover-color` | `var(--color-error-contrast)` | Hover text color |
| `--btn-danger-active-bg` | `var(--color-error)` | Active background |

## Using with SCSS

If you're using SCSS, you can use the `button-base` and `button-ghost` mixins:

```scss
@use 'bursit-ui-tokens' as *;
@use 'bursit-ui-tokens/mixins' as *;

// Full button
.my-btn {
  @include button-base($bg: $color-primary, $color: $color-primary-contrast);
}

// Ghost variant
.my-ghost-btn {
  @include button-ghost($color: $color-primary);
}
```
