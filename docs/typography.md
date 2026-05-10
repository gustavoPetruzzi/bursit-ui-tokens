# Typography

Design tokens for typography.

## Font Family

<div class="token-table">
  <table>
    <thead>
      <tr>
        <th>Token</th>
        <th>Default Value</th>
        <th>Preview</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--font-family-sans</code></td>
        <td><code class="small">ui-sans-serif, system-ui, ...</code></td>
        <td style="font-family: var(--font-family-sans)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-family-mono</code></td>
        <td><code class="small">ui-monospace, SFMono-Regular, ...</code></td>
        <td style="font-family: var(--font-family-mono)">const foo = 'bar'</td>
      </tr>
    </tbody>
  </table>
</div>

## Font Size

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
        <td><code>--font-size-xs</code></td>
        <td>0.75rem (12px)</td>
        <td style="font-size: var(--font-size-xs)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-sm</code></td>
        <td>0.875rem (14px)</td>
        <td style="font-size: var(--font-size-sm)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-base</code></td>
        <td>1rem (16px)</td>
        <td style="font-size: var(--font-size-base)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-lg</code></td>
        <td>1.125rem (18px)</td>
        <td style="font-size: var(--font-size-lg)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-xl</code></td>
        <td>1.25rem (20px)</td>
        <td style="font-size: var(--font-size-xl)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-2xl</code></td>
        <td>1.5rem (24px)</td>
        <td style="font-size: var(--font-size-2xl)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-size-3xl</code></td>
        <td>1.875rem (30px)</td>
        <td style="font-size: var(--font-size-3xl)">The quick</td>
      </tr>
      <tr>
        <td><code>--font-size-4xl</code></td>
        <td>2.25rem (36px)</td>
        <td style="font-size: var(--font-size-4xl)">The</td>
      </tr>
    </tbody>
  </table>
</div>

## Font Weight

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
        <td><code>--font-weight-normal</code></td>
        <td>400</td>
        <td style="font-weight: var(--font-weight-normal)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-weight-medium</code></td>
        <td>500</td>
        <td style="font-weight: var(--font-weight-medium)">The quick brown fox</td>
      </tr>
      <tr>
        <td><code>--font-weight-bold</code></td>
        <td>700</td>
        <td style="font-weight: var(--font-weight-bold)">The quick brown fox</td>
      </tr>
    </tbody>
  </table>
</div>

## Line Height

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
        <td><code>--line-height-tight</code></td>
        <td>1.25</td>
        <td style="line-height: var(--line-height-tight)">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</td>
      </tr>
      <tr>
        <td><code>--line-height-normal</code></td>
        <td>1.5</td>
        <td style="line-height: var(--line-height-normal)">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</td>
      </tr>
      <tr>
        <td><code>--line-height-relaxed</code></td>
        <td>1.75</td>
        <td style="line-height: var(--line-height-relaxed)">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
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

.token-table code.small {
  font-size: 0.6875rem;
}
</style>