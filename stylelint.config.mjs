// @ts-check

/**
 * Stylelint config for bursit-ui-tokens.
 *
 * Philosophy: `src/_tokens.scss` is the single source of truth for raw
 * values. Everything else must CONSUME tokens, never re-invent them.
 */

export default {
  extends: ['stylelint-config-standard-scss'],

  // Built artifact and docs site are not linted; only sources are.
  ignoreFiles: ['index.css', 'docs/**', 'node_modules/**'],

  rules: {
    // NOTE: stylelint matches this pattern WITHOUT the leading `--`.
    // Kebab-case custom properties (matches --category-name-scale convention).
    'custom-property-pattern': '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$',

    // Section-divider banner comments (`// =====`) are intentional here.
    'scss/comment-no-empty': null,

    // The palette consistently uses 6-digit hex for readability.
    'color-hex-length': null,

    // Whitespace/taste rules conflict with the existing hand-tuned style;
    // enabling them later would be a separate formatting-only commit.
    'at-rule-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'no-descending-specificity': null,
  },

  overrides: [
    {
      // Token consumers: components, mixins and the entrypoint must
      // reference var(--color-*) — hardcoded palette literals banned.
      files: [
        'src/index.scss',
        'src/_mixins.scss',
        'src/components/**/*.scss',
      ],
      rules: {
        'declaration-property-value-disallowed-list': {
          '/^(color|background(-color)?|([a-z-]+-)?border(-[a-z-]+)?-color|outline-color|text-decoration-color|fill|stroke)$/': [
            '/^#/',
            '/^rgba?\\(/',
          ],
          // Shadow-bearing properties and *shadow* component tokens must
          // reference the global shadow scale, not invent their own colors.
          '/^(box-shadow|text-shadow)$|^--[a-z0-9-]*shadow/': [
            '/^#/',
            '/^rgba?\\(/',
          ],
        },
      },
    },
  ],
};
