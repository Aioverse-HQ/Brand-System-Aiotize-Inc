# Spacing

Consistent spacing creates rhythm, hierarchy, and breathing room throughout Aiotize interfaces. A single spacing scale and a set of border radius and shadow tokens keep layouts coherent across every surface.

Token values for spacing, border radius, and shadows live in [`tokens/global/spacing.json`](../tokens/global/spacing.json).

---

## Spacing scale

The scale is based on a **4 px base unit** (0.25 rem). Step `4` equals 16 px (1 rem) — the comfortable default for body line height and most component padding.

| Token | rem | px | Common use |
|-------|-----|----|-----------|
| `spacing.0` | 0 | 0 | Reset / explicit zero |
| `spacing.px` | — | 1 px | Hairline borders |
| `spacing.0.5` | 0.125 rem | 2 px | Tight icon gap |
| `spacing.1` | 0.25 rem | 4 px | Inline badge padding |
| `spacing.1.5` | 0.375 rem | 6 px | Small icon gap |
| `spacing.2` | 0.5 rem | 8 px | Input internal padding, chip |
| `spacing.2.5` | 0.625 rem | 10 px | Button horizontal padding (sm) |
| `spacing.3` | 0.75 rem | 12 px | Form field gap, list item padding |
| `spacing.4` | 1 rem | 16 px | Default component padding, paragraph spacing |
| `spacing.5` | 1.25 rem | 20 px | Card inner padding (sm) |
| `spacing.6` | 1.5 rem | 24 px | Card inner padding (md), section gap |
| `spacing.8` | 2 rem | 32 px | Card inner padding (lg), major section gap |
| `spacing.10` | 2.5 rem | 40 px | Page section vertical padding |
| `spacing.12` | 3 rem | 48 px | Hero padding, large section gap |
| `spacing.16` | 4 rem | 64 px | Section spacing between major content blocks |
| `spacing.20` | 5 rem | 80 px | Large feature section padding |
| `spacing.24` | 6 rem | 96 px | Hero vertical rhythm |
| `spacing.32` | 8 rem | 128 px | Maximum section whitespace |

### How to use the scale

- Always pick a value from the scale — never use arbitrary pixel values.
- Favour **multiples of 4 px** for all gaps and padding.
- Use smaller steps (`1`–`3`) for inline elements; use larger steps (`8`–`16`) for layout regions.

---

## Border radius

| Token | rem | px | Usage |
|-------|-----|----|-------|
| `borderRadius.none` | 0 | 0 | Sharp-cornered elements, code blocks |
| `borderRadius.sm` | 0.25 rem | 4 px | Tags, badges, small chips |
| `borderRadius.md` | 0.5 rem | 8 px | Buttons, inputs (default) |
| `borderRadius.lg` | 0.75 rem | 12 px | Cards, modals |
| `borderRadius.xl` | 1 rem | 16 px | Large cards, feature panels |
| `borderRadius.2xl` | 1.5 rem | 24 px | Hero sections, oversized cards |
| `borderRadius.full` | — | 9999 px | Pills, avatars, circular icon buttons |

---

## Shadows

Shadows communicate elevation and focus. Use them sparingly — not every element needs a shadow.

| Token | CSS value | Usage |
|-------|-----------|-------|
| `shadow.none` | `none` | Flat, no elevation |
| `shadow.xs` | `0 1px 2px 0 rgba(13,27,42,0.05)` | Subtle lift — tooltips, focus rings |
| `shadow.sm` | `0 1px 3px 0 rgba(13,27,42,0.10), 0 1px 2px -1px rgba(13,27,42,0.10)` | Dropdown menus, popovers |
| `shadow.md` | `0 4px 6px -1px rgba(13,27,42,0.10), 0 2px 4px -2px rgba(13,27,42,0.10)` | Cards, date pickers |
| `shadow.lg` | `0 10px 15px -3px rgba(13,27,42,0.10), 0 4px 6px -4px rgba(13,27,42,0.10)` | Modals, side panels |
| `shadow.xl` | `0 20px 25px -5px rgba(13,27,42,0.10), 0 8px 10px -6px rgba(13,27,42,0.10)` | Full-page overlays |

All shadow values use the brand navy (`#0D1B2A`) as the shadow colour at reduced opacity to stay on-brand in light environments.

---

## Consuming tokens in code

### CSS custom properties

```css
@import "@aiotize/brand-tokens/css";

.card {
  padding: var(--aiotize-spacing-6);             /* 24px */
  border-radius: var(--aiotize-border-radius-lg); /* 12px */
  box-shadow: var(--aiotize-shadow-md);
}
```

### JavaScript / TypeScript

```js
import tokens from "@aiotize/brand-tokens";

const cardPadding = tokens.spacing[6];       // "1.5rem"
const cardRadius  = tokens.borderRadius.lg;  // "0.75rem"
const cardShadow  = tokens.shadow.md;
```

---

## Layout guidelines

### Component padding

| Component size | Padding token |
|---------------|--------------|
| Small (chip, badge) | `spacing.1`–`spacing.2` |
| Default (button, input) | `spacing.2.5`–`spacing.3` |
| Medium card | `spacing.5`–`spacing.6` |
| Large card / panel | `spacing.8` |

### Page layout

| Layout region | Vertical spacing |
|--------------|-----------------|
| Inline paragraph gap | `spacing.4` |
| Between form fields | `spacing.3`–`spacing.4` |
| Between page sections | `spacing.16`–`spacing.24` |
| Hero top/bottom padding | `spacing.24`–`spacing.32` |

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Use tokens — `var(--aiotize-spacing-4)` | Hard-code `padding: 16px` |
| Pick the nearest scale step | Round to arbitrary values like 15 px or 22 px |
| Use `borderRadius.full` for circular elements | Approximate with `50%` unless truly responsive |
| Use shadows to signal elevation level | Apply `shadow.lg` on flat list items |
| Set `shadow.none` explicitly when removing elevation | Rely on default browser shadow removal |
