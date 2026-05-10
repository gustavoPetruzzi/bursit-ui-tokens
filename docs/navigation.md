# Navigation Components

Tokens for navigation patterns: tabs and breadcrumbs.

## Tabs

Tab-based navigation with indicator styles.

```css
.tabs {
  display: flex;
  gap: var(--tabs-gap);
  border-bottom: var(--tabs-border-width) solid var(--tabs-border-color);
}

.tab {
  padding: var(--tab-padding-y) var(--tab-padding-x);
  font-size: var(--tab-font-size);
  font-weight: var(--tab-font-weight);
  color: var(--tab-color);
  background: var(--tab-hover-bg);
  border-bottom: var(--tab-border-bottom-width) solid var(--tab-border-color);
  transition: var(--tab-transition);
}

.tab:hover {
  color: var(--tab-hover-color);
}

.tab[aria-selected="true"] {
  color: var(--tab-active-color);
  border-bottom-color: var(--tab-active-border-color);
  background: var(--tab-active-bg);
}

.tab:disabled {
  color: var(--tab-disabled-color);
  opacity: var(--tab-disabled-opacity);
}
```

### Indicator Pattern (animated underline)

```css
.tabs-indicator {
  position: relative;
}

.tabs-indicator::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: var(--indicator-width);
  height: var(--tab-indicator-height);
  background: var(--tab-indicator-color);
  transition: var(--tab-indicator-transition);
}
```

### Tab Panel

```css
.tab-panel {
  padding: var(--tab-panel-padding-y) var(--tab-panel-padding-x);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--tab-font-size` | `var(--font-size-sm)` | Tab text size |
| `--tab-border-bottom-width` | `2px` | Active indicator thickness |
| `--tab-indicator-height` | `2px` | Animated indicator height |
| `--tab-indicator-color` | `var(--color-primary)` | Animated indicator color |
| `--tab-active-border-color` | `var(--color-primary)` | Active tab border color |
| `--tab-active-bg` | `transparent` | Active background |

## Breadcrumb

Hierarchical path navigation.

```css
.breadcrumb {
  display: flex;
  align-items: center;
  padding: var(--breadcrumb-padding);
  margin-bottom: var(--breadcrumb-margin-bottom);
  font-size: var(--breadcrumb-font-size);
  list-style: none;
}

.breadcrumb-item a {
  color: var(--breadcrumb-item-color);
  transition: var(--breadcrumb-item-transition);
}

.breadcrumb-item a:hover {
  color: var(--breadcrumb-item-hover-color);
}

.breadcrumb-item[aria-current="page"] {
  color: var(--breadcrumb-current-color);
  font-weight: var(--breadcrumb-current-font-weight);
}

/* Separator between items */
.breadcrumb-separator {
  color: var(--breadcrumb-separator-color);
  margin: 0 var(--breadcrumb-separator-margin-x);
}
```

### Custom Separator

```css
.breadcrumb-custom-separator .breadcrumb-separator::after {
  content: var(--breadcrumb-separator-content);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--breadcrumb-font-size` | `var(--font-size-sm)` | Text size |
| `--breadcrumb-separator-content` | `'/'` | Separator character |
| `--breadcrumb-current-font-weight` | `var(--font-weight-medium)` | Current page emphasis |
