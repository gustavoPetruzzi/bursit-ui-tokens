# Contributing to bursit-ui-tokens

Thanks for your interest in contributing! This project uses a fully automated release pipeline, so **how you write your commits matters** — the changelog and version number are generated from them.

## Getting started

```bash
git clone https://github.com/gustavoPetruzzi/bursit-ui-tokens.git
cd bursit-ui-tokens
npm install

# Validate token integrity before every push
npm run validate

# Build index.css locally
npm run build
```

CI runs install + validate + build on every push and pull request to `master`.

## Conventional Commits (required)

Every commit message must follow the [Conventional Commits](https://www.conventionalcommits.org) format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types and their effect on releases

| Type | Purpose | Version bump |
|------|---------|--------------|
| `feat` | New feature or new token | **minor** (0.2.0 → 0.3.0) |
| `fix` | Bug fix | **patch** (0.2.0 → 0.2.1) |
| `docs` | Documentation only | none |
| `refactor` | Code change that neither fixes nor adds | none |
| `perf` | Performance improvement | patch* |
| `test` | Adding/fixing tests | none |
| `build` | Build system or dependencies | patch* |
| `ci` | CI/workflow changes | none |
| `chore` | Maintenance tasks | none |

\* depends on release-please configuration.

### Scopes used in this repo

Use the component or area as scope (an omitted scope is also fine):

`tokens`, `mixins`, `components`, `modal`, `select`, `input`, `button`, `avatar`, `package`, `docs`, `ci`

### Breaking changes

If your change breaks existing consumers (renaming/removing a token, changing a value's meaning), mark it explicitly using **one** of these two syntaxes:

**Option 1 — `!` after the type/scope:**

```
feat(tokens)!: rename --color-primary-hover to --color-primary-hover-bg
```

**Option 2 — footer with `BREAKING CHANGE:` and a description:**

```
feat(tokens): rework shadow scale

BREAKING CHANGE: --shadow-lg is now smaller by default; migrate
modals to --shadow-xl for the previous depth.
```

Either form makes release-please bump the **major** version and list the change under "⚠ BREAKING CHANGES" in the changelog.

### Subject rules

- Imperative mood: "add", not "added" or "adds"
- Lowercase, no trailing period
- Keep it under ~72 characters; put details in the body

Good examples from this repo's history:

```
feat(modal): add border-style token
fix(avatar): improve WCAG AA contrast by changing bg to neutral-600
refactor(input): use error-text token for helper color
```

## Pull requests

1. Create a feature branch from `master`
2. Make your changes with conventional commits
3. Run `npm run validate` and `npm run build` locally
4. Open a PR describing what changed and why

**CI enforces these rules:** every pull request runs [commitlint](https://commitlint.js.org) against its commits — non-conforming messages fail the check before merge. You can test locally:

```bash
npx commitlint --from origin/master --to HEAD --verbose
```

PRs are squash-merged: make sure the **PR title** also follows Conventional Commits, since it becomes the commit message on `master`.

## How releases work (you don't do anything)

1. Your merged commits land on `master`
2. The [release-please](https://github.com/googleapis/release-please-action) workflow keeps an open **Release PR** updated with the next version bump and changelog entries
3. When a maintainer merges that Release PR, the pipeline tags the release, creates the GitHub Release, and publishes to npm automatically via Trusted Publishing (OIDC)

**Never bump `version` in `package.json` manually. Never edit `CHANGELOG.md` by hand.** The bot owns both.

## Reporting issues

Open an issue with:

- What you expected vs. what happened
- The token names involved (`--color-*`, `--space-*`, ...)
- Browser/runtime and theme mode (light/dark) if visual
