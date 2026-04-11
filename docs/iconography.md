# Iconography

Icons in the Aiotize system are simple, consistent visual cues that support actions, convey status, and aid navigation. They are always secondary to text — never the sole means of communicating meaning.

Icon source files live in [`brand/icons/`](../brand/icons/).

---

## Icon set overview

The Aiotize icon set is organised into three categories:

| Category | Folder | Purpose |
|----------|--------|---------|
| UI | `brand/icons/ui/` | General interface actions and states (navigation, controls, status) |
| Product | `brand/icons/product/` | Aiotize-specific concepts and feature areas |
| Social | `brand/icons/social/` | Social media platform marks |

---

## Naming conventions

Icons follow a consistent naming pattern:

```
<category>-<name>[-<variant>].svg
```

Examples:

| File | Meaning |
|------|---------|
| `ui-arrow-right.svg` | UI — right-pointing arrow |
| `ui-close.svg` | UI — close / dismiss action |
| `ui-check-circle.svg` | UI — success / confirmation state |
| `product-dashboard.svg` | Product — dashboard feature icon |
| `social-twitter.svg` | Social — Twitter / X mark |

Variant suffixes (e.g. `-sm`, `-outline`) may be added when a category-name combination requires multiple treatments.

---

## Specifications

| Property | Value |
|----------|-------|
| Default canvas | 24 × 24 px |
| Small canvas | 16 × 16 px (suffix: `-sm`) |
| Large canvas | 32 × 32 px (suffix: `-lg`) |
| Stroke width | 1.5 px at 24 px canvas, scaled proportionally |
| Fill / stroke | `currentColor` — inherits text colour from parent |
| Format | SVG, optimised with SVGO |
| Visual weight | Outlined style; consistent corner radius (`borderRadius.sm`) |

---

## Colour and sizing

Icons use `currentColor` so they automatically match the surrounding text or are overridden by a CSS `color` value.

```css
/* The icon inherits the button's text colour */
.btn-primary svg {
  color: var(--aiotize-color-brand-white);
  width: 20px;
  height: 20px;
}
```

### Recommended pairing with text

| Text size token | Icon size |
|----------------|-----------|
| `typography.body.xs` (12 px) | 12–14 px |
| `typography.body.sm` (14 px) | 16 px |
| `typography.body.md` (16 px) | 20 px |
| `typography.heading.h3` (20 px) | 20–24 px |
| `typography.heading.h2` (24 px) | 24 px |

---

## Accessibility

Every icon rendered in a user interface must have an accessible name or be hidden from assistive technology:

### Decorative icons (accompanied by visible text)

```html
<button>
  <svg aria-hidden="true" focusable="false" width="20" height="20">
    <use href="/icons/ui-arrow-right.svg#icon" />
  </svg>
  Next
</button>
```

### Informative icons (standalone, no adjacent text)

```html
<button aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" width="20" height="20">
    <use href="/icons/ui-close.svg#icon" />
  </svg>
</button>
```

- Never use `alt` on an inline `<svg>` — use `aria-label` on the parent interactive element or a visually-hidden `<span>`.
- Set `focusable="false"` to prevent IE/Edge from making the SVG focusable.

---

## Using icons in the web package

```jsx
// React — import from @aiotize/brand-web (when available)
import { Icon } from "@aiotize/brand-web";

<Icon name="ui-arrow-right" size={20} aria-hidden />
```

Or reference the SVG file directly:

```html
<img src="/brand/icons/ui/ui-arrow-right.svg" alt="" width="20" height="20" />
```

---

## Adding new icons

1. Design the icon on a **24 × 24 px** canvas following the stroke weight and style of existing icons.
2. Use `currentColor` for all `fill` and `stroke` attributes.
3. Optimise the file with [SVGO](https://github.com/svg/svgo) before committing.
4. Place the file in the appropriate category subfolder (`ui/`, `product/`, or `social/`).
5. Follow the `<category>-<name>.svg` naming convention.
6. Update [`brand/icons/README.md`](../brand/icons/README.md) if you introduce a new category.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Use `currentColor` for all icon paths | Hard-code hex colour values in SVG |
| Pair icons with visible text labels wherever possible | Use icons alone to convey critical actions |
| Add `aria-hidden="true"` on decorative icons | Leave icons without accessible labels |
| Maintain consistent stroke weight across the set | Mix outline and filled styles in the same context |
| Use SVGO-optimised files | Commit unoptimised or Figma-exported SVGs with metadata |
| Scale icons using CSS width/height | Use `transform: scale()` to resize icons |

---

## Misuse examples

- ❌ Recolouring icons with unapproved brand colours
- ❌ Adding drop shadows, gradients, or decorative effects to icons
- ❌ Stretching icons to non-square aspect ratios
- ❌ Substituting icons with emoji in product UI
- ❌ Using the social icons at sizes smaller than 16 × 16 px
