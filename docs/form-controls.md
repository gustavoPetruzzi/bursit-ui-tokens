# Form Controls

Tokens for form elements beyond basic text inputs: textarea, select, checkbox, radio, and switch.

## Textarea

Extends input base tokens with textarea-specific properties.

```css
.my-textarea {
  background: var(--textarea-bg);
  color: var(--textarea-color);
  border: var(--textarea-border-width) solid var(--textarea-border-color);
  border-radius: var(--textarea-border-radius);
  padding: var(--textarea-padding-y) var(--textarea-padding-x);
  font-size: var(--textarea-font-size);
  line-height: var(--textarea-line-height);
  min-height: var(--textarea-min-height);
  resize: var(--textarea-resize);
  transition: var(--textarea-transition);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--textarea-min-height` | `6rem` | Minimum height |
| `--textarea-resize` | `vertical` | Resize direction |
| `--textarea-line-height` | `var(--line-height-relaxed)` | Line height (relaxed for readability) |

All state tokens (focus, error, disabled) mirror the input tokens by default.

## Select

Native `<select>` dropdown styling.

```css
.my-select {
  appearance: none;
  background: var(--select-bg);
  color: var(--select-color);
  border: var(--select-border-width) solid var(--select-border-color);
  border-radius: var(--select-border-radius);
  padding: var(--select-padding-y) var(--select-padding-end) var(--select-padding-y) var(--select-padding-x);
  font-size: var(--select-font-size);
  transition: var(--select-transition);
  /* Custom chevron */
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right var(--select-icon-offset) center;
  background-size: var(--select-icon-size);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--select-padding-end` | `1rem` | Right padding for chevron space |
| `--select-icon-size` | `1rem` | Chevron icon size |
| `--select-icon-offset` | `0.75rem` | Distance from right edge |
| `--select-option-hover-bg` | `var(--color-neutral-100)` | Option hover background |
| `--select-option-focus-bg` | `var(--color-primary)` | Option focused background |
| `--select-option-focus-color` | `var(--color-primary-contrast)` | Option focused text color |

## Checkbox

Custom-styled checkbox tokens.

```css
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.checkbox-box {
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border: var(--checkbox-border-width) solid var(--checkbox-border-color);
  border-radius: var(--checkbox-border-radius);
  background: var(--checkbox-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--checkbox-transition);
}

.checkbox-box[data-checked] {
  background: var(--checkbox-checked-bg);
  border-color: var(--checkbox-checked-border-color);
  color: var(--checkbox-checked-color);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--checkbox-size` | `1rem` | Box width/height |
| `--checkbox-border-radius` | `var(--radius-sm)` | Corner roundness |
| `--checkbox-focus-shadow` | `0 0 0 3px rgb(59 130 246 / 0.15)` | Focus ring |
| `--checkbox-indeterminate-bg` | `var(--color-primary)` | Indeterminate state background |

## Radio

Custom-styled radio button tokens.

```css
.radio-circle {
  width: var(--radio-size);
  height: var(--radio-size);
  border: var(--radio-border-width) solid var(--radio-border-color);
  border-radius: var(--radio-border-radius);
  background: var(--radio-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--radio-transition);
}

.radio-circle[data-checked] {
  border-color: var(--radio-checked-border-color);
}

.radio-circle[data-checked]::after {
  content: '';
  width: var(--radio-checked-inner-size);
  height: var(--radio-checked-inner-size);
  border-radius: var(--radius-full);
  background: var(--radio-checked-bg);
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--radio-size` | `1rem` | Circle width/height |
| `--radio-border-radius` | `var(--radius-full)` | Always fully rounded |
| `--radio-checked-inner-size` | `0.5rem` | Inner dot size |

## Switch

Toggle switch component tokens.

```css
.switch-track {
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: var(--switch-border-radius);
  background: var(--switch-bg);
  padding: var(--switch-padding);
  transition: var(--switch-transition);
}

.switch-track[data-checked] {
  background: var(--switch-checked-bg);
}

.switch-thumb {
  width: var(--switch-thumb-size);
  height: var(--switch-thumb-size);
  border-radius: var(--radius-full);
  background: var(--switch-thumb-bg);
  box-shadow: var(--switch-thumb-shadow);
  transform: translateX(var(--switch-thumb-translate));
  transition: var(--switch-transition);
}

.switch-track[data-checked] .switch-thumb {
  transform: translateX(var(--switch-thumb-translate-checked));
}
```

### Key Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--switch-width` | `2.75rem` | Track width |
| `--switch-height` | `1.5rem` | Track height |
| `--switch-thumb-size` | `1.25rem` | Knob size |
| `--switch-thumb-translate-checked` | `calc(...)` | Auto-calculated knob position |
