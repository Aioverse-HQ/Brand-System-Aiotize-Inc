# @aiotize/tokens

Design tokens for the Aiotize brand system. Built with [Style Dictionary](https://amzn.github.io/style-dictionary/).

## Installation

```bash
pnpm add @aiotize/tokens
```

## Usage

### CSS Custom Properties

```css
@import '@aiotize/tokens/css';

.my-button {
  background-color: var(--aiotize-color-brand-primary);
  padding: var(--aiotize-spacing-md);
  border-radius: var(--aiotize-border-radius-md);
}
```

### SCSS Variables

```scss
@import '@aiotize/tokens/scss';

.my-button {
  background-color: $aiotize-color-brand-primary;
  padding: $aiotize-spacing-md;
  border-radius: $aiotize-border-radius-md;
}
```

### JavaScript/TypeScript

```typescript
import { tokens } from '@aiotize/tokens';

const primaryColor = tokens.color.brand.primary;
const spacingMd = tokens.spacing.md;
```

## Token Categories

- **Colors**: Brand palette, semantic colors, neutrals
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: 4px base grid scale
- **Borders**: Border widths and radii
- **Shadows**: Elevation levels 1-5
- **Motion**: Animation durations and easing
- **Breakpoints**: Responsive breakpoints
- **Z-Index**: Layering scale
