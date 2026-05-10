# Layout Components

Tokens for structural layout components: card, modal, divider.

## Card

Container for grouping related content.

```css
.card {
  background: var(--card-bg);
  border: var(--card-border-width) solid var(--card-border-color);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  transition: var(--card-transition);
}

.card:hover {
  box-shadow: var(--card-hover-shadow);
  border-color: var(--card-hover-border-color);
}
```

### Structure

```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--card-bg` | `var(--color-neutral-0)` | Background |
| `--card-border-radius` | `var(--radius-md)` | Corner roundness |
| `--card-shadow` | `var(--shadow-sm)` | Default elevation |
| `--card-padding` | `var(--space-md)` | Internal spacing |
| `--card-hover-shadow` | `var(--shadow-md)` | Hover elevation |

### Interactive Variant

```css
.card-interactive {
  cursor: var(--card-interactive-cursor);
}

.card-interactive:hover {
  box-shadow: var(--card-interactive-shadow);
}
```

## Modal / Dialog

Overlay dialog component.

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--modal-overlay-bg);
  transition: var(--modal-overlay-transition);
  z-index: var(--z-index-modal);
}

.modal-content {
  background: var(--modal-bg);
  border-radius: var(--modal-border-radius);
  box-shadow: var(--modal-shadow);
  max-width: var(--modal-max-width);
  padding: var(--modal-padding);
}
```

### Close Button

```css
.modal-close {
  width: var(--modal-close-size);
  height: var(--modal-close-size);
  background: var(--modal-close-bg);
  color: var(--modal-close-color);
  border: none;
  border-radius: var(--radius-sm);
}

.modal-close:hover {
  background: var(--modal-close-hover-bg);
  color: var(--modal-close-hover-color);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--modal-overlay-bg` | `rgb(0 0 0 / 0.5)` | Backdrop darkness |
| `--modal-max-width` | `32rem` | Maximum content width |
| `--modal-padding` | `var(--space-lg)` | Internal spacing |
| `--modal-close-size` | `2rem` | Close button size |

## Divider

Visual separator between content sections.

```css
.divider {
  border: none;
  height: var(--divider-width);
  background: var(--divider-color);
  margin: var(--divider-margin-y) 0;
}

/* With text label */
.divider-text {
  display: flex;
  align-items: center;
  color: var(--divider-text-color);
  font-size: var(--divider-text-font-size);
}

.divider-text::before,
.divider-text::after {
  content: '';
  flex: 1;
  height: var(--divider-width);
  background: var(--divider-color);
}

.divider-text::before { margin-right: var(--divider-text-padding-x); }
.divider-text::after { margin-left: var(--divider-text-padding-x); }
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--divider-color` | `var(--color-neutral-200)` | Line color |
| `--divider-width` | `1px` | Line thickness |
| `--divider-margin-y` | `var(--space-md)` | Vertical spacing |
| `--divider-text-bg` | `var(--color-neutral-0)` | Text background (for gap effect) |
