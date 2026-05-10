# Borders & Shadows

Design tokens for borders (radius, width) and shadows (elevation).

## Border Radius

<div class="radius-grid">
  <div class="radius-item">
    <div class="radius-preview" style="border-radius: var(--radius-sm);"></div>
    <div class="radius-info">
      <code>--radius-sm</code>
      <span>0.25rem (4px)</span>
    </div>
  </div>
  <div class="radius-item">
    <div class="radius-preview" style="border-radius: var(--radius-md);"></div>
    <div class="radius-info">
      <code>--radius-md</code>
      <span>0.5rem (8px)</span>
    </div>
  </div>
  <div class="radius-item">
    <div class="radius-preview" style="border-radius: var(--radius-lg);"></div>
    <div class="radius-info">
      <code>--radius-lg</code>
      <span>0.75rem (12px)</span>
    </div>
  </div>
  <div class="radius-item">
    <div class="radius-preview" style="border-radius: var(--radius-full);"></div>
    <div class="radius-info">
      <code>--radius-full</code>
      <span>9999px</span>
    </div>
  </div>
</div>

## Border Width

<div class="token-table">
  <table>
    <thead>
      <tr>
        <th>Token</th>
        <th>Default</th>
        <th>Preview</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--border-width-thin</code></td>
        <td>1px</td>
        <td><div style="width: 48px; height: 24px; border: var(--border-width-thin) solid var(--color-neutral-700);"></div></td>
      </tr>
      <tr>
        <td><code>--border-width-medium</code></td>
        <td>2px</td>
        <td><div style="width: 48px; height: 24px; border: var(--border-width-medium) solid var(--color-neutral-700);"></div></td>
      </tr>
      <tr>
        <td><code>--border-width-thick</code></td>
        <td>3px</td>
        <td><div style="width: 48px; height: 24px; border: var(--border-width-thick) solid var(--color-neutral-700);"></div></td>
      </tr>
    </tbody>
  </table>
</div>

## Shadows

<div class="shadow-grid">
  <div class="shadow-item">
    <div class="shadow-preview" style="box-shadow: var(--shadow-sm);"></div>
    <div class="shadow-info">
      <code>--shadow-sm</code>
      <span>Subtle elevation</span>
    </div>
  </div>
  <div class="shadow-item">
    <div class="shadow-preview" style="box-shadow: var(--shadow-md);"></div>
    <div class="shadow-info">
      <code>--shadow-md</code>
      <span>Cards, dropdowns</span>
    </div>
  </div>
  <div class="shadow-item">
    <div class="shadow-preview" style="box-shadow: var(--shadow-lg);"></div>
    <div class="shadow-info">
      <code>--shadow-lg</code>
      <span>Modals</span>
    </div>
  </div>
  <div class="shadow-item">
    <div class="shadow-preview" style="box-shadow: var(--shadow-xl);"></div>
    <div class="shadow-info">
      <code>--shadow-xl</code>
      <span>Overlays</span>
    </div>
  </div>
</div>

<style>
.radius-grid,
.shadow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.radius-item,
.shadow-item {
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.radius-preview,
.shadow-preview {
  background: var(--color-neutral-0);
  height: 80px;
  border: 1px solid var(--color-neutral-300);
}

.shadow-info,
.radius-info {
  padding: 0.75rem;
  background: var(--color-neutral-0);
  border-top: 1px solid var(--color-neutral-200);
}

.radius-info code,
.shadow-info code {
  display: block;
  font-size: 0.75rem;
  font-family: var(--font-family-mono);
  color: var(--color-neutral-700);
  margin-bottom: 0.25rem;
}

.radius-info span,
.shadow-info span {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
}

.token-table {
  margin: 1.5rem 0;
}

.token-table table {
  width: 100%;
  border-collapse: collapse;
}

.token-table th,
.token-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-neutral-200);
}

.token-table th {
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-600);
  font-size: var(--font-size-sm);
}

.token-table code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--color-neutral-100);
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-sm);
}
</style>