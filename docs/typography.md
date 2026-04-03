# Typography

Typography carries meaning beyond the words themselves. The Aiotize type system is designed for clarity, hierarchy, and cross-platform consistency.

Token values for typography live in [`tokens/global/typography.json`](../tokens/global/typography.json).

---

## Brand typefaces

| Role | Typeface | Fallback stack | Notes |
|------|----------|----------------|-------|
| Display / Headings | **Inter** | `system-ui, -apple-system, sans-serif` | Use weights 600–800 for headings |
| Body | **Inter** | `system-ui, -apple-system, sans-serif` | Use weight 400 (regular) and 500 (medium) |
| Monospace / Code | **JetBrains Mono** | `"Courier New", Courier, monospace` | Use for code snippets and technical content |

Inter is available via Google Fonts (`https://fonts.google.com/specimen/Inter`) and should be self-hosted in production builds to ensure performance and availability.

---

## Type scale

| Token | Size | Line height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `typography.display.xl` | 56 px / 3.5 rem | 1.1 | 800 | Hero headlines |
| `typography.display.lg` | 40 px / 2.5 rem | 1.15 | 700 | Section heroes |
| `typography.heading.h1` | 32 px / 2 rem | 1.2 | 700 | Page titles |
| `typography.heading.h2` | 24 px / 1.5 rem | 1.25 | 600 | Major section headings |
| `typography.heading.h3` | 20 px / 1.25 rem | 1.3 | 600 | Sub-section headings |
| `typography.heading.h4` | 16 px / 1 rem | 1.4 | 600 | Card headings, labels |
| `typography.body.lg` | 18 px / 1.125 rem | 1.6 | 400 | Long-form reading |
| `typography.body.md` | 16 px / 1 rem | 1.6 | 400 | Default body text |
| `typography.body.sm` | 14 px / 0.875 rem | 1.5 | 400 | Secondary info, captions |
| `typography.body.xs` | 12 px / 0.75 rem | 1.4 | 400 | Legal, footnotes |
| `typography.code.md` | 14 px / 0.875 rem | 1.6 | 400 | Code blocks |

---

## Letter spacing

| Use case | Value |
|---------|-------|
| Display (xl, lg) | `-0.02em` |
| Headings | `-0.01em` |
| Body | `0` |
| All-caps labels | `+0.05em` |

---

## Usage guidelines

- **Hierarchy first** — don't use multiple heading levels at the same visual weight.
- **Limit weights per screen** — typically two: one for headings, one for body.
- **Don't use italic for headings** — reserve italic for inline emphasis in body copy only.
- **Minimum body size is 14 px** (12 px for legal/footnote text only).
- **All-caps text** — acceptable for short labels (≤ 4 words); always pair with generous letter spacing (`+0.05em`).

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Use Inter for all UI text | Introduce a different sans-serif typeface |
| Use JetBrains Mono for code | Use Inter for code blocks |
| Follow the defined type scale | Invent arbitrary font sizes |
| Self-host Inter in production | Rely on third-party CDN availability |
