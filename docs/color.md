# Color

Color is one of the most immediate expressions of the Aiotize brand. Use the palette consistently to build recognition and maintain accessibility.

Design token values for all colors live in [`tokens/global/color.json`](../tokens/global/color.json).

---

## Primary palette

| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Brand Navy | `color.brand.navy` | `#0D1B2A` | Primary backgrounds, headlines, high-emphasis text |
| Brand Blue | `color.brand.blue` | `#1A6BFF` | Primary actions, links, interactive elements |
| Brand Cyan | `color.brand.cyan` | `#00D4FF` | Accents, data highlights, gradient endpoints |
| White | `color.brand.white` | `#FFFFFF` | Backgrounds, reversed text |

---

## Secondary palette

| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Slate | `color.secondary.slate` | `#4A5568` | Body text on light backgrounds |
| Light Gray | `color.secondary.lightGray` | `#F5F7FA` | Page backgrounds, card surfaces |
| Mid Gray | `color.secondary.midGray` | `#CBD5E0` | Borders, dividers, disabled states |
| Dark Gray | `color.secondary.darkGray` | `#2D3748` | Secondary text, labels |

---

## Feedback / semantic colors

| Name | Token | Hex | Usage |
|------|-------|-----|-------|
| Success | `color.feedback.success` | `#38A169` | Confirmation, positive states |
| Warning | `color.feedback.warning` | `#DD6B20` | Caution states |
| Error | `color.feedback.error` | `#E53E3E` | Errors, destructive actions |
| Info | `color.feedback.info` | `#1A6BFF` | Informational messages |

---

## Gradients

| Name | Definition | Usage |
|------|-----------|-------|
| Brand gradient | `linear-gradient(135deg, #1A6BFF 0%, #00D4FF 100%)` | Hero backgrounds, feature highlights |
| Dark gradient | `linear-gradient(180deg, #0D1B2A 0%, #1A2540 100%)` | Dark-mode backgrounds |

---

## Accessibility guidance

All text/background color combinations must meet the [WCAG 2.1](https://www.w3.org/TR/WCAG21/) minimum contrast ratios:

| Level | Contrast ratio | Applies to |
|-------|---------------|-----------|
| AA | 4.5 : 1 | Normal text (< 18 pt) |
| AA | 3 : 1 | Large text (≥ 18 pt or ≥ 14 pt bold) |
| AAA | 7 : 1 | Enhanced — aim for body copy |

### Approved combinations

| Foreground | Background | Ratio | Level |
|-----------|-----------|-------|-------|
| `color.brand.navy` | `color.brand.white` | 16.7 : 1 | AAA |
| `color.brand.white` | `color.brand.navy` | 16.7 : 1 | AAA |
| `color.brand.white` | `color.brand.blue` | 4.6 : 1 | AA |
| `color.brand.navy` | `color.brand.cyan` | 7.1 : 1 | AAA |

Do not create new color combinations without verifying contrast ratios first.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Use tokens — never hard-code hex values | Hard-code hex values in production code |
| Verify contrast before shipping | Assume a combination is accessible |
| Use Brand Blue for a single primary CTA per view | Use Brand Blue for every element |
| Use the brand gradient sparingly as a feature element | Tile or repeat the gradient |
