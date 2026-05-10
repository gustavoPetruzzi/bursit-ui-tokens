# Data Display

Tokens for presenting data: tables and avatars.

## Table

Data table component.

```css
.table {
  width: var(--table-width);
  background: var(--table-bg);
  border-collapse: var(--table-border-collapse);
}

.table th {
  padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  font-size: var(--table-header-font-size);
  font-weight: var(--table-header-font-weight);
  color: var(--table-header-color);
  text-align: var(--table-cell-text-align);
  vertical-align: var(--table-cell-vertical-align);
  border-bottom: var(--table-header-border-bottom-width) solid var(--table-header-border-color);
  text-transform: var(--table-header-text-transform);
}

.table td {
  padding: var(--table-cell-padding-y) var(--table-cell-padding-x);
  font-size: var(--table-body-font-size);
  color: var(--table-body-color);
  text-align: var(--table-cell-text-align);
  vertical-align: var(--table-cell-vertical-align);
  border-bottom: var(--table-cell-border-width) solid var(--table-cell-border-color);
}
```

### Hover Rows

```css
.table-hover tbody tr:hover {
  background: var(--table-row-hover-bg);
}
```

### Striped Rows

```css
.table-striped tbody tr:nth-child(odd) {
  background: var(--table-striped-row-bg);
}
```

### Caption

```css
.table-caption {
  padding-top: var(--table-caption-padding-top);
  font-size: var(--table-caption-font-size);
  color: var(--table-caption-color);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--table-cell-padding-y` | `var(--space-sm)` | Cell vertical spacing |
| `--table-cell-padding-x` | `var(--space-md)` | Cell horizontal spacing |
| `--table-header-font-size` | `var(--font-size-sm)` | Header text size |
| `--table-body-font-size` | `var(--font-size-sm)` | Body text size |
| `--table-header-border-bottom-width` | `2px` | Header underline |
| `--table-row-hover-bg` | `var(--color-neutral-100)` | Hover row background |
| `--table-row-transition` | `background-color 150ms ease-in-out` | Row hover transition |

## Avatar

User profile image or initials placeholder.

```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--avatar-border-radius);
  font-weight: var(--avatar-font-weight);
  color: var(--avatar-color);
  background: var(--avatar-bg);
  border: var(--avatar-border-width) solid var(--avatar-border-color);
  transition: var(--avatar-transition);
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Sizes

```css
.avatar-xs { width: var(--avatar-size-xs); height: var(--avatar-size-xs); font-size: var(--avatar-font-size-xs); }
.avatar-sm { width: var(--avatar-size-sm); height: var(--avatar-size-sm); font-size: var(--avatar-font-size-sm); }
.avatar-md { width: var(--avatar-size-md); height: var(--avatar-size-md); font-size: var(--avatar-font-size-md); }
.avatar-lg { width: var(--avatar-size-lg); height: var(--avatar-size-lg); font-size: var(--avatar-font-size-lg); }
.avatar-xl { width: var(--avatar-size-xl); height: var(--avatar-size-xl); font-size: var(--avatar-font-size-xl); }
.avatar-2xl { width: var(--avatar-size-2xl); height: var(--avatar-size-2xl); font-size: var(--avatar-font-size-2xl); }
```

| Token | Default | Description |
|-------|---------|-------------|
| `--avatar-size-xs` | `1.25rem` | Extra small avatar |
| `--avatar-size-sm` | `1.75rem` | Small avatar |
| `--avatar-size-lg` | `3rem` | Large avatar |
| `--avatar-size-xl` | `3.75rem` | Extra large avatar |

### Avatar Group

```css
.avatar-group {
  display: flex;
}

.avatar-group .avatar {
  margin-left: var(--avatar-group-margin-left);
  border: var(--avatar-group-border-width) solid var(--avatar-group-border-color);
}

.avatar-group .avatar:first-child {
  margin-left: 0;
}
```

### Status Indicator

```css
.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--avatar-status-size);
  height: var(--avatar-status-size);
  border-radius: var(--radius-full);
  border: var(--avatar-status-border-width) solid var(--avatar-status-border-color);
}

.avatar-status--online { background: var(--avatar-status-online-bg); }
.avatar-status--offline { background: var(--avatar-status-offline-bg); }
.avatar-status--away { background: var(--avatar-status-away-bg); }
.avatar-status--busy { background: var(--avatar-status-busy-bg); }
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--avatar-size-md` | `2.25rem` | Default avatar size |
| `--avatar-size-2xl` | `5rem` | Largest avatar |
| `--avatar-group-margin-left` | `-0.5rem` | Overlap in groups |
| `--avatar-group-border-width` | `2px` | Group border width |
| `--avatar-group-border-color` | `var(--color-neutral-0)` | Group border color |
| `--avatar-status-size` | `0.75rem` | Status dot size |
