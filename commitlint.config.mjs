// @ts-check

/**
 * Conventional Commits rules enforced by CI on pull requests.
 * Types come from @commitlint/config-conventional (feat, fix, docs,
 * refactor, perf, test, build, ci, chore, revert, style).
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Scopes allowed in this repo. An omitted scope is fine;
    // a present scope must be one of these.
    'scope-enum': [
      2,
      'always',
      [
        'tokens',
        'mixins',
        'components',
        'modal',
        'select',
        'input',
        'button',
        'avatar',
        'package',
        'docs',
        'ci',
      ],
    ],
  },
};
