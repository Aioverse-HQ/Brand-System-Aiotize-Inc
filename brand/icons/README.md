# Icons

This folder contains the Aiotize icon set in SVG format.

## Structure

Icons are grouped by category:

```
icons/
├─ ui/          ← General UI icons (navigation, actions, status)
├─ product/     ← Product-specific icons
└─ social/      ← Social media platform icons
```

## Naming conventions

Icons follow the pattern: `<category>-<name>[-<variant>].svg`

Examples:
- `ui-arrow-right.svg`
- `ui-close.svg`
- `ui-check-circle.svg`
- `product-dashboard.svg`
- `social-twitter.svg`

## Specifications

- **Canvas size:** 24 × 24 px (default), 16 × 16 px (small variant), 32 × 32 px (large variant)
- **Stroke width:** 1.5 px at 24 px canvas
- **Fill:** `currentColor` — icons inherit color from the parent element
- **Format:** SVG, optimised with SVGO

## Usage

Import icons directly in your component library or reference them from `packages/web/`.

```html
<img src="/brand/icons/ui/ui-arrow-right.svg" alt="Next" width="24" height="24" />
```

Or use the web package icon component (see `packages/web/README.md`).

## Adding new icons

1. Create the SVG at 24 × 24 px canvas.
2. Use `currentColor` for all fill and stroke values.
3. Optimise with SVGO before committing.
4. Add the file to the appropriate category subfolder.
5. Update this README if you create a new category.
