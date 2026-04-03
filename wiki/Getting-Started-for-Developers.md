# Getting Started for Developers

Welcome to the Aiotize Brand System! This guide will help you integrate the brand tokens and assets into your project.

---

## 🚀 Quick Start

### Installation

```bash
npm install @aiotize/brand-tokens
```

### CSS Variables

```css
@import "@aiotize/brand-tokens/build/css/tokens.css";

.button-primary {
  background-color: var(--color-brand-blue);
  color: var(--color-brand-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-family: var(--typography-font-family-body);
  font-size: var(--typography-body-md-size);
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
```

### JavaScript/TypeScript

```javascript
import tokens from "@aiotize/brand-tokens";

const styles = {
  backgroundColor: tokens.color.brand.blue,
  color: tokens.color.brand.white,
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
};
```

---

## 📦 Available Packages

| Package | Path | Description |
|---------|------|-------------|
| **Web** | [`packages/web/`](../packages/web/) | CSS, SCSS, JS tokens for web projects |
| **Mobile** | [`packages/mobile/`](../packages/mobile/) | Android XML, iOS Swift exports |

---

## 🎨 Token Categories

### Colors

```css
/* Primary */
--color-brand-navy: #0D1B2A;
--color-brand-blue: #1A6BFF;
--color-brand-cyan: #00D4FF;
--color-brand-white: #FFFFFF;

/* Secondary */
--color-secondary-slate: #4A5568;
--color-secondary-light-gray: #F5F7FA;
--color-secondary-mid-gray: #CBD5E0;
--color-secondary-dark-gray: #2D3748;

/* Feedback */
--color-feedback-success: #38A169;
--color-feedback-warning: #DD6B20;
--color-feedback-error: #E53E3E;
--color-feedback-info: #1A6BFF;
```

### Typography

```css
/* Font Families */
--typography-font-family-heading: "Inter", system-ui, -apple-system, sans-serif;
--typography-font-family-body: "Inter", system-ui, -apple-system, sans-serif;
--typography-font-family-mono: "JetBrains Mono", "Courier New", Courier, monospace;

/* Sizes */
--typography-heading-h1-size: 2rem;      /* 32px */
--typography-heading-h2-size: 1.5rem;    /* 24px */
--typography-body-md-size: 1rem;         /* 16px */
--typography-body-sm-size: 0.875rem;     /* 14px */
```

### Motion

```css
/* Durations */
--motion-duration-fast: 100ms;
--motion-duration-normal: 200ms;
--motion-duration-slow: 350ms;

/* Easings */
--motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--motion-easing-enter: cubic-bezier(0, 0, 0.2, 1);
--motion-easing-exit: cubic-bezier(0.4, 0, 1, 1);
```

### Spacing

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

---

## 💻 Framework Examples

### React

```jsx
import tokens from '@aiotize/brand-tokens';

const Button = ({ children, variant = 'primary' }) => (
  <button
    style={{
      backgroundColor: variant === 'primary' 
        ? tokens.color.brand.blue 
        : 'transparent',
      color: variant === 'primary' 
        ? tokens.color.brand.white 
        : tokens.color.brand.blue,
      padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
      borderRadius: tokens.radius.md,
      border: variant === 'primary' 
        ? 'none' 
        : `2px solid ${tokens.color.brand.blue}`,
      fontFamily: tokens.typography.fontFamily.body,
      fontSize: tokens.typography.body.md.size,
      cursor: 'pointer',
      transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
    }}
  >
    {children}
  </button>
);
```

### Vue

```vue
<template>
  <button :class="['btn', `btn--${variant}`]">
    <slot />
  </button>
</template>

<style>
@import "@aiotize/brand-tokens/build/css/tokens.css";

.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-family: var(--typography-font-family-body);
  font-size: var(--typography-body-md-size);
  cursor: pointer;
  transition: all var(--motion-duration-fast) var(--motion-easing-standard);
}

.btn--primary {
  background-color: var(--color-brand-blue);
  color: var(--color-brand-white);
  border: none;
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-brand-blue);
  border: 2px solid var(--color-brand-blue);
}
</style>
```

### Tailwind CSS

```javascript
// tailwind.config.js
const tokens = require('@aiotize/brand-tokens');

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-navy': tokens.color.brand.navy,
        'brand-blue': tokens.color.brand.blue,
        'brand-cyan': tokens.color.brand.cyan,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
```

---

## 🔤 Font Setup

### Self-hosting (Recommended)

```bash
# Download and serve fonts from your assets
fonts/
├── Inter-Regular.woff2
├── Inter-Medium.woff2
├── Inter-SemiBold.woff2
├── Inter-Bold.woff2
└── JetBrainsMono-Regular.woff2
```

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
}

/* Add other weights... */
```

### Google Fonts (Development only)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

---

## ♿ Accessibility

### Reduced Motion

Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

Use approved color combinations for accessibility:

| Foreground | Background | Ratio |
|-----------|-----------|-------|
| `--color-brand-navy` | `--color-brand-white` | 16.7:1 ✓ |
| `--color-brand-white` | `--color-brand-navy` | 16.7:1 ✓ |
| `--color-brand-white` | `--color-brand-blue` | 4.6:1 ✓ |

---

## 📁 Reference Implementations

Check out working examples in [`examples/`](../examples/):

```
examples/
├── react-app/        ← React implementation
├── vue-app/          ← Vue implementation
├── html-css/         ← Plain HTML/CSS
└── storybook/        ← Component documentation
```

---

## ✅ Integration Checklist

- [ ] Install `@aiotize/brand-tokens` package
- [ ] Import CSS variables or JS tokens
- [ ] Set up Inter and JetBrains Mono fonts
- [ ] Configure reduced motion media queries
- [ ] Verify color contrast in your components
- [ ] Test across browsers and devices

---

## 🤔 Need Help?

- **Questions:** #brand-system Slack channel
- **Bug reports:** Open an issue in this repository
- **Feature requests:** Contact engineering@aiotize.com

---

## 📚 Related Pages

- [[Home]] — Return to the main wiki page
- [[Color Guidelines]] — Full color documentation
- [[Typography]] — Typography specifications
- [[Motion Guidelines]] — Animation tokens
- [[Getting Started for Designers]] — Designer resources

---

<p align="center">
  <sub><a href="Home">← Back to Home</a></sub>
</p>
