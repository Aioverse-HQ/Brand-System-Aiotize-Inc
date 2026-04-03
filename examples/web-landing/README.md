# Web Landing Page Example

A minimal reference landing page that demonstrates the Aiotize brand system in a realistic web context.

## What it shows

- Typography scale (display, heading, body)
- Color palette (primary, secondary, feedback)
- Button variants (primary, secondary, destructive)
- Spacing system
- Brand gradient hero section
- Motion / transition patterns

## Running the example

```bash
cd examples/web-landing
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

```
web-landing/
├─ index.html       ← Entry HTML
├─ styles/
│  └─ main.css      ← Imports brand tokens and applies them
├─ scripts/
│  └─ main.js       ← Minimal JS for interactive demos
└─ package.json
```

## How it consumes the brand system

The example imports the CSS token file from the `@aiotize/brand-tokens` package:

```css
@import "@aiotize/brand-tokens/css";
```

All colors, spacing, and typography values are referenced via CSS custom properties defined in the token build output, for example:

```css
.hero {
  background: linear-gradient(135deg, var(--aiotize-color-brand-blue), var(--aiotize-color-brand-cyan));
  padding: var(--aiotize-spacing-16) var(--aiotize-spacing-8);
}
```
