# Feedback Components

Tokens for user feedback: badge, alert/toast, and progress indicators.

## Badge

Small status or label indicators.

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--badge-padding-y) var(--badge-padding-x);
  font-size: var(--badge-font-size);
  font-weight: var(--badge-font-weight);
  line-height: var(--badge-line-height);
  border-radius: var(--badge-border-radius);
  transition: var(--badge-transition);
}
```

### Variants

```css
/* Default */
.badge { background: var(--badge-bg); color: var(--badge-color); }

/* Semantic */
.badge-primary { background: var(--badge-primary-bg); color: var(--badge-primary-color); }
.badge-secondary { background: var(--badge-secondary-bg); color: var(--badge-secondary-color); }
.badge-success { background: var(--badge-success-bg); color: var(--badge-success-color); }
.badge-warning { background: var(--badge-warning-bg); color: var(--badge-warning-color); }
.badge-error { background: var(--badge-error-bg); color: var(--badge-error-color); }
.badge-info { background: var(--badge-info-bg); color: var(--badge-info-color); }

/* Outline */
.badge-outline {
  background: var(--badge-outline-bg);
  color: var(--badge-outline-color);
  border: var(--border-width-thin) solid var(--badge-outline-border-color);
}
```

### Dot Indicator

```css
.badge-dot {
  width: var(--badge-dot-size);
  height: var(--badge-dot-size);
  border-radius: var(--radius-full);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--badge-border-radius` | `var(--radius-full)` | Pill shape |
| `--badge-padding-y` | `0.125rem` | Vertical padding |
| `--badge-padding-x` | `0.375rem` | Horizontal padding |
| `--badge-dot-size` | `0.5rem` | Dot indicator size |

## Alert

Full-width message blocks for status notifications.

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--alert-padding-y) var(--alert-padding-x);
  font-size: var(--alert-font-size);
  line-height: var(--alert-line-height);
  border-radius: var(--alert-border-radius);
  border: var(--alert-border-width) solid transparent;
  transition: var(--alert-transition);
}
```

### Variants

```css
.alert-info {
  background: var(--alert-info-bg);
  border-color: var(--alert-info-border-color);
  color: var(--alert-info-color);
}

.alert-success {
  background: var(--alert-success-bg);
  border-color: var(--alert-success-border-color);
  color: var(--alert-success-color);
}

.alert-warning {
  background: var(--alert-warning-bg);
  border-color: var(--alert-warning-border-color);
  color: var(--alert-warning-color);
}

.alert-error {
  background: var(--alert-error-bg);
  border-color: var(--alert-error-border-color);
  color: var(--alert-error-color);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--alert-icon-size` | `1.25rem` | Icon size |
| `--alert-close-size` | `1.5rem` | Dismiss button size |
| `--alert-close-color` | `var(--color-neutral-400)` | Dismiss button color |
| `--alert-close-hover-color` | `var(--color-neutral-600)` | Dismiss button hover color |
| `--alert-padding-x` | `var(--space-md)` | Horizontal padding |

## Toast

Floating notification (extends alert patterns).

```css
.toast {
  background: var(--toast-bg);
  box-shadow: var(--toast-shadow);
  border: var(--toast-border-width) solid var(--toast-border-color);
  border-radius: var(--toast-border-radius);
  padding: var(--toast-padding);
  min-width: var(--toast-min-width);
  max-width: var(--toast-max-width);
  z-index: var(--toast-z-index);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--toast-min-width` | `20rem` | Minimum width |
| `--toast-max-width` | `24rem` | Maximum width |
| `--toast-z-index` | `var(--z-index-tooltip)` | Stacking order |

## Progress

Linear progress bar indicator.

```css
.progress-track {
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-track-bg);
  border-radius: var(--progress-border-radius);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--progress-bar-bg);
  border-radius: var(--progress-border-radius);
  transition: var(--progress-bar-transition);
}

/* Striped variant */
.progress-striped .progress-bar {
  background-image: var(--progress-striped-bg);
}

/* Animated striped */
.progress-animated .progress-bar {
  animation: progress-stripes var(--progress-animation-duration) linear infinite;
}
```

### Color Variants

```css
.progress-success .progress-bar { background: var(--progress-success-bg); }
.progress-warning .progress-bar { background: var(--progress-warning-bg); }
.progress-error .progress-bar { background: var(--progress-error-bg); }
```

### Label

```css
.progress-label {
  font-size: var(--progress-label-font-size);
  font-weight: var(--progress-label-font-weight);
  color: var(--progress-label-color);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--progress-height` | `0.5rem` | Track height |
| `--progress-border-radius` | `var(--radius-full)` | Pill shape |
| `--progress-bg` | `var(--color-neutral-200)` | Track background |
| `--progress-bar-bg` | `var(--color-primary)` | Bar background |
| `--progress-bar-transition` | `width 300ms ease-in-out` | Bar animation |
