# @aiotize/brand-web

Web implementation package for the Aiotize Brand System. Exports CSS variables, utility classes, and (optionally) a small React component library that consume the brand tokens.

## Installation

```bash
npm install @aiotize/brand-web
```

## Usage

### CSS variables

```js
// In your entry point (e.g. main.js or index.ts)
import "@aiotize/brand-web/css";
```

This imports all design token CSS custom properties on `:root` and a small set of base styles.

### Utility classes

```html
<button class="btn btn-primary">Get started</button>
<button class="btn btn-secondary">Learn more</button>
```

### React components (optional)

```jsx
import { Button, Text } from "@aiotize/brand-web";

function MyPage() {
  return (
    <div>
      <Text variant="heading.h1">Hello, Aiotize</Text>
      <Button variant="primary">Get started</Button>
    </div>
  );
}
```

## Package structure

```
packages/web/
├─ src/
│  ├─ index.ts        ← Main entry point
│  ├─ components/     ← React components
│  └─ styles/         ← CSS / PostCSS source
├─ package.json
└─ README.md
```

## Development

```bash
npm install
npm run build   # compile TypeScript + bundle CSS
npm run lint    # run ESLint + stylelint
```

## Publishing

Publishing is handled by the release CI workflow (`.github/workflows/release.yml`) on tagged releases.
