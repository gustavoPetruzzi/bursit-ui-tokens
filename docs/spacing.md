# Spacing

Design tokens for spacing, margins, padding, and gaps.

## Spacing Scale

<div class="spacing-grid">
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-2xs); height: var(--space-2xs);"></div>
    <div class="spacing-info">
      <code>--space-2xs</code>
      <span>0.125rem (2px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-xs); height: var(--space-xs);"></div>
    <div class="spacing-info">
      <code>--space-xs</code>
      <span>0.25rem (4px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-sm); height: var(--space-sm);"></div>
    <div class="spacing-info">
      <code>--space-sm</code>
      <span>0.5rem (8px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-md); height: var(--space-md);"></div>
    <div class="spacing-info">
      <code>--space-md</code>
      <span>1rem (16px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-lg); height: var(--space-lg);"></div>
    <div class="spacing-info">
      <code>--space-lg</code>
      <span>1.5rem (24px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-xl); height: var(--space-xl);"></div>
    <div class="spacing-info">
      <code>--space-xl</code>
      <span>2rem (32px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-2xl); height: var(--space-2xl);"></div>
    <div class="spacing-info">
      <code>--space-2xl</code>
      <span>3rem (48px)</span>
    </div>
  </div>
  <div class="spacing-item">
    <div class="spacing-preview" style="width: var(--space-3xl); height: var(--space-3xl);"></div>
    <div class="spacing-info">
      <code>--space-3xl</code>
      <span>4rem (64px)</span>
    </div>
  </div>
</div>

## Usage

```css
/* Padding */
.button {
  padding: var(--space-sm) var(--space-md);
}

/* Margins */
.card {
  margin-bottom: var(--space-lg);
}

/* Gap in flex/grid */
.flex-container {
  gap: var(--space-md);
}

/* SCSS with mixin */
.container {
  @include container;
  @include gap($space-lg);
}
```

<style>
.spacing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.spacing-item {
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.spacing-preview {
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-neutral-200);
}

.spacing-info {
  padding: 0.75rem;
  background: var(--color-neutral-0);
}

.spacing-info code {
  display: block;
  font-size: 0.75rem;
  font-family: var(--font-family-mono);
  color: var(--color-neutral-700);
  margin-bottom: 0.25rem;
}

.spacing-info span {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}
</style>