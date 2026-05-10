# Mixins

SCSS helper functions for working with design tokens. Import these via:

```scss
@use 'bursit-ui-tokens/mixins' as *;
```

## Typography

### `line-clamp($lines)`

Truncate text with ellipsis after a given number of lines.

```scss
.card-title {
  @include line-clamp(2);
}
```

### `visually-hidden`

Hide content visually but keep it accessible to screen readers.

```scss
.skip-link {
  @include visually-hidden;
}
```

### `visually-hidden-reset`

Reset a previously visually-hidden element back to visible.

```scss
.skip-link:focus {
  @include visually-hidden-reset;
}
```

## Layout

### `flex-center($direction: row)`

Center content using flexbox.

```scss
.hero {
  @include flex-center(column);
}
```

### `container($max-width: 1280px)`

Create a responsive container with max-width and horizontal padding.

```scss
.page-content {
  @include container;
}

.narrow-layout {
  @include container(960px);
}
```

### `gap($gap: $space-md)`

Set a consistent gap in flex/grid layouts.

```scss
.card-grid {
  display: grid;
  @include gap($space-lg);
}
```

## Focus & Interactions

### `focus-ring($color: $color-primary, $offset: 2px)`

Create an accessible focus ring.

```scss
button:focus {
  @include focus-ring;
}

.custom-ring:focus {
  @include focus-ring($color: $color-success, $offset: 3px);
}
```

### `transition($properties: all, $duration: $duration-normal, $easing: $ease-in-out)`

Add a smooth transition with sensible defaults.

```scss
.card {
  @include transition;
}

.hover-effect {
  @include transition(transform, $duration-fast);
}
```

## Button

### `button-reset`

Reset default browser button styles.

```scss
.my-button {
  @include button-reset;
  /* your own styles */
}
```

### `button-base($bg, $color, $padding-y, $padding-x)`

Create a base button with background, text color, and padding.

```scss
.btn-primary {
  @include button-base($bg: $color-primary, $color: $color-primary-contrast);
}

.btn-compact {
  @include button-base(
    $bg: $color-secondary,
    $color: $color-secondary-contrast,
    $padding-y: $space-xs,
    $padding-x: $space-sm
  );
}
```

### `button-ghost($color: $color-primary)`

Create a ghost button (transparent background with colored border and text).

```scss
.btn-ghost {
  @include button-ghost;
}
```

## Input

### `input-reset`

Reset default browser input styles.

```scss
.my-input {
  @include input-reset;
  /* your own styles */
}
```

### `input-base($bg, $border, $padding-y, $padding-x)`

Create a base input style with focus states built in.

```scss
.text-field {
  @include input-base;
}

.accent-input {
  @include input-base($bg: $color-neutral-100, $border: $color-primary);
}
```

## Utility Functions

### `rem($px)`

Convert pixel values to rem.

```scss
.custom-size {
  font-size: rem(24px); // 1.5rem
}
```

### `em($px, $context: 16px)`

Convert pixel values to em.

```scss
.icon {
  font-size: em(20px, 20px); // 1em relative to parent
}
```

### `fluid-type($min-size, $max-size, $min-width: 320px, $max-width: 1280px)`

Create a fluid font size that scales between min and max viewport widths using `clamp()`.

```scss
.hero-title {
  font-size: fluid-type(24px, 48px);
}
```
