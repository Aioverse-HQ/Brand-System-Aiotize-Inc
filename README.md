# Aiotize Inc — Brand System

> **Single source of truth** for the Aiotize Inc brand: logo assets, usage guidelines, design tokens, and implementation packages for web and mobile.

---

## What this repo is

This repository contains everything needed to build consistent, on-brand experiences across every Aiotize product and communication channel. It is intended for designers, developers, content creators, and external partners.

---

## Quick start

### For designers
- **Guidelines & principles** → [`docs/`](./docs/)
- **Logo files** → [`brand/logo/`](./brand/logo/)
- **Icon sets** → [`brand/icons/`](./brand/icons/)
- **Illustration library** → [`brand/illustrations/`](./brand/illustrations/)
- **Slide & social templates** → [`brand/templates/`](./brand/templates/)

### For developers
Install the brand tokens package:

```bash
npm install @aiotize/brand-tokens
```

Import CSS variables in your project:

```css
@import "@aiotize/brand-tokens/build/css/tokens.css";
```

Or consume tokens in JavaScript:

```js
import tokens from "@aiotize/brand-tokens";
```

See [`packages/web/`](./packages/web/) for the full web package and [`packages/mobile/`](./packages/mobile/) for Android/iOS exports.

---

## Repository structure

```
brand-system/
├─ README.md               ← you are here
├─ LICENSE
├─ CHANGELOG.md
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
├─ .github/
│  ├─ workflows/           ← CI and release automation
│  ├─ ISSUE_TEMPLATE.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ docs/                   ← human-readable brand guidelines
├─ brand/                  ← canonical logo, icon, illustration & template assets
├─ tokens/                 ← design tokens (source + generated build output)
├─ packages/               ← consumable npm / platform packages
└─ examples/               ← reference implementations
```

| Folder | Purpose |
|--------|---------|
| [`docs/`](./docs/) | Written brand guidelines (principles, color, type, motion, voice) |
| [`brand/`](./brand/) | Source logo files, icons, illustrations, and templates |
| [`tokens/`](./tokens/) | Design tokens as JSON; `tokens/build/` contains generated CSS/JS/XML |
| [`packages/`](./packages/) | Versioned packages teams can install and depend on |
| [`examples/`](./examples/) | Working reference implementations teams can copy and adapt |

---

## Contribution process

We welcome contributions! Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a PR. In short:

1. Fork or branch from `main`.
2. Make your changes following the guidelines in `CONTRIBUTING.md`.
3. Open a PR using the provided template — design **and** engineering review is required for token or logo changes.
4. Merged changes trigger automated builds for tokens and packages.

---

## License and usage

Code and design tokens are released under the [Apache 2.0 License](./LICENSE).  
Brand assets (logos, icons, illustrations) are proprietary to Aiotize Inc.  
External parties may **not** reproduce, modify, or use brand assets without explicit written permission.  
See [`brand/logo/usage.md`](./brand/logo/usage.md) and [`docs/logo-usage.md`](./docs/logo-usage.md) for detailed rules.
