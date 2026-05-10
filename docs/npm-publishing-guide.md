# Guía: Publicar y usar un paquete npm

Basado en el proyecto actual `bursit-ui-tokens`.

## 1. Preparar el paquete

Tu `package.json` ya tiene casi todo lo necesario. Los campos **clave** para publicar:

| Campo | Para qué sirve | Tu valor |
|-------|---------------|----------|
| `name` | Nombre del paquete | `bursit-ui-tokens` |
| `version` | Versión semver. **Tenés que incrementarla** en cada publish | `0.1.0` |
| `main` | Entry point por defecto | `index.scss` |
| `exports` | Mapa moderno de imports condicionales | ✅ configurado |
| `files` | Qué archivos se publican (el resto se ignora) | `*.{scss,css}`, `src/` |
| `repository` | Link al repo (aparece en npmjs.com) | ✅ configurado |

### Detalle importante: scoped packages

Tu paquete se llama `bursit-ui-tokens`. Es un paquete público y gratuito en npm.

## 2. Build antes de publicar

```bash
npm run build
```

Esto genera `index.css` desde `src/index.scss`. Sin esto, el campo `"style": "index.css"` apunta a un archivo que no existe o está desactualizado.

## 3. Login en npm

```bash
npm login
```

Te pide username, password y email. Si usás 2FA, te pide el OTP.

También podés crear un **access token** desde [npmjs.com/settings/tokens](https://www.npmjs.com/settings/tokens) y hacer:

```bash
npm login --auth-type=legacy
```

## 4. Publicar por primera vez

```bash
npm publish --access public
```

Como es un paquete sin scope (no empieza con `@`), se publica público por defecto. No necesitás `--access public`.

## 5. Publicar actualizaciones

Cada vez que hagas cambios:

```bash
# Incrementar versión automáticamente:
npm version patch   # 0.1.0 → 0.1.1 (bugfix)
npm version minor   # 0.1.0 → 0.2.0 (nueva feature)
npm version major   # 0.1.0 → 1.0.0 (breaking change)

# O editá version en package.json a mano

# Luego:
npm publish
```

`npm version` además crea un git commit y tag automáticamente.

## 6. Usar el paquete en otro proyecto

### Instalarlo:

```bash
# En el proyecto consumidor:
npm install bursit-ui-tokens
```

### Usarlo con Sass (recomendado para tu caso):

```scss
// En el proyecto consumidor:
@use 'bursit-ui-tokens';
// o solo los tokens:
@use 'bursit-ui-tokens/tokens';
```

### Usarlo como CSS plano:

```css
@import 'bursit-ui-tokens/tokens.css';
```

### En Angular:

En `angular.json` o `styles.scss`:

```scss
// styles.scss
@use 'bursit-ui-tokens';
```

### En React/Vite:

```scss
// src/index.scss o App.scss
@use 'bursit-ui-tokens';
```

## 7. Desinstalar / despublicar

```bash
# Despublicar (solo permitido en los primeros 72 horas o con npm unpublish --force)
npm unpublish bursit-ui-tokens@0.1.0

# En el proyecto consumidor, para sacar:
npm uninstall bursit-ui-tokens
```

## Fuentes y dónde leer más

| Recurso | Link |
|---------|------|
| **Docs oficiales de npm — publishing** | [docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) |
| **npm publish CLI** | [docs.npmjs.com/cli/commands/npm-publish](https://docs.npmjs.com/cli/commands/npm-publish) |
| **Scoped packages** | [docs.npmjs.com/cli/commands/npm-scope](https://docs.npmjs.com/cli/commands/npm-scope) |
| **package.json exports field** | [nodejs.org/api/packages.html#exports](https://nodejs.org/api/packages.html#exports) |
| **Semver versioning** | [semver.org](https://semver.org) |
| **npm version CLI** | [docs.npmjs.com/cli/commands/npm-version](https://docs.npmjs.com/cli/commands/npm-version) |
| **Guide: Creating Node.js modules** | [docs.npmjs.com/creating-node-js-modules](https://docs.npmjs.com/creating-node-js-modules) |
