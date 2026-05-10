# Inputs

Design tokens for text input components with floating labels. All tokens use `--color-*` for automatic dark mode support.

## Base Input

```css
.input-field {
  background: var(--input-bg);
  color: var(--input-color);
  border: var(--input-border-width) solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  padding: var(--input-padding-y) var(--input-padding-x);
  font-size: var(--input-font-size);
  font-weight: var(--input-font-weight);
  line-height: var(--input-line-height);
  transition: var(--input-transition);
}

.input-field::placeholder {
  color: var(--input-placeholder-color);
}
```

## Focus State

```css
.input-field:focus {
  outline: none;
  border-color: var(--input-focus-border-color);
  box-shadow: var(--input-focus-shadow);
}
```

## Error State

```css
.input-error {
  border-color: var(--input-error-border-color);
}

.input-error:focus {
  box-shadow: var(--input-error-focus-shadow);
}
```

## Disabled State

```css
.input-disabled {
  background: var(--input-disabled-bg);
  color: var(--input-disabled-color);
  border-color: var(--input-disabled-border-color);
  opacity: var(--input-disabled-opacity);
  cursor: not-allowed;
}
```

## Floating Label

The floating label pattern uses a wrapper with relative positioning. The label transitions from inside the input to a smaller, elevated position on focus or when the input has a value.

```css
.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.input-label {
  position: absolute;
  left: var(--input-padding-x);
  top: 50%;
  transform: translateY(0);
  color: var(--input-label-color);
  font-size: var(--input-label-font-size);
  font-weight: var(--input-label-font-weight);
  padding: 0 var(--input-label-padding-x);
  background: var(--input-label-bg);
  pointer-events: none;
  transition: var(--input-label-transition);
}

/* When focused */
.input-wrapper:focus-within .input-label {
  transform: translateY(var(--input-label-translate-y)) scale(var(--input-label-scale));
  color: var(--input-label-floating-color);
}

/* When filled (JS toggles this class) */
.input-wrapper.is-filled .input-label {
  transform: translateY(var(--input-label-translate-y)) scale(var(--input-label-scale));
  color: var(--input-label-filled-color);
}
```

## Helper / Error Text

```css
.input-helper {
  font-size: var(--input-helper-font-size);
  color: var(--input-helper-color);
  margin-top: var(--input-helper-margin-top);
}

.input-helper--error {
  color: var(--input-helper-error-color);
}
```

## Complete HTML Example

```html
<div class="input-wrapper">
  <label class="input-label" for="email">Email</label>
  <input
    class="input-field"
    id="email"
    type="email"
    placeholder="you@example.com"
    autocomplete="email"
  />
  <span class="input-helper">We'll never share your email.</span>
</div>

<!-- Error state -->
<div class="input-wrapper is-filled">
  <label class="input-label" for="password">Password</label>
  <input
    class="input-field input-error"
    id="password"
    type="password"
    aria-invalid="true"
    aria-describedby="password-error"
  />
  <span class="input-helper input-helper--error" id="password-error">
    Password must be at least 8 characters.
  </span>
</div>
```

## Token Reference

### Base

| Token | Default | Description |
|-------|---------|-------------|
| `--input-bg` | `var(--color-neutral-0)` | Background color |
| `--input-color` | `var(--color-neutral-900)` | Text color |
| `--input-border-color` | `var(--color-neutral-200)` | Default border |
| `--input-border-width` | `var(--border-width-thin)` | Border thickness |
| `--input-border-radius` | `var(--radius-sm)` | Default corner roundness |
| `--input-border-radius-lg` | `var(--radius-md)` | Large variant corner roundness |
| `--input-padding-y` | `0.75rem` | Vertical padding |
| `--input-padding-x` | `1rem` | Horizontal padding |
| `--input-font-size` | `var(--font-size-base)` | Text size |
| `--input-font-weight` | `var(--font-weight-normal)` | Text weight |
| `--input-line-height` | `var(--line-height-normal)` | Line height |
| `--input-placeholder-color` | `var(--color-neutral-400)` | Placeholder text |
| `--input-icon-color` | `var(--color-neutral-400)` | Icon inside input |
| `--input-transition` | `all 150ms ease-in-out` | Default transition |

### States

| Token | Default | Description |
|-------|---------|-------------|
| `--input-focus-border-color` | `var(--color-primary)` | Focus border |
| `--input-focus-shadow` | `0 0 0 3px var(--color-primary-alpha-15)` | Focus ring |
| `--input-error-border-color` | `var(--color-error)` | Error border |
| `--input-error-focus-shadow` | `0 0 0 3px var(--color-error-alpha-15)` | Error focus ring |
| `--input-disabled-bg` | `var(--color-neutral-100)` | Disabled background |
| `--input-disabled-color` | `var(--color-neutral-400)` | Disabled text |
| `--input-disabled-border-color` | `var(--color-neutral-200)` | Disabled border |
| `--input-disabled-opacity` | `0.6` | Disabled opacity |

### Floating Label

| Token | Default | Description |
|-------|---------|-------------|
| `--input-label-color` | `var(--color-neutral-400)` | Default label color |
| `--input-label-font-size` | `var(--font-size-sm)` | Label text size |
| `--input-label-font-weight` | `var(--font-weight-medium)` | Label weight |
| `--input-label-padding-x` | `0.25rem` | Label horizontal padding |
| `--input-label-bg` | `transparent` | Label background (useful for filled inputs) |
| `--input-label-translate-y` | `-1.5rem` | Vertical shift when floating |
| `--input-label-scale` | `0.85` | Scale when floating |
| `--input-label-floating-color` | `var(--color-primary)` | Label color on focus |
| `--input-label-filled-color` | `var(--color-neutral-300)` | Label color when filled |
| `--input-label-transition` | `all 150ms ease-in-out` | Label transition |

### Helper Text

| Token | Default | Description |
|-------|---------|-------------|
| `--input-helper-font-size` | `var(--font-size-xs)` | Helper text size |
| `--input-helper-color` | `var(--color-neutral-400)` | Default helper color |
| `--input-helper-error-color` | `var(--color-error)` | Error helper color |
| `--input-helper-margin-top` | `var(--space-xs)` | Space above helper |

## Using with SCSS

If you're using SCSS, you can use the `input-base` mixin:

```scss
@use 'bursit-ui-tokens/mixins' as *;

.my-input {
  @include input-base;
}
```
