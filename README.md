# Brand System — Aiotize Inc

A comprehensive branding system providing design tokens, React components, icons, and documentation for building consistent Aiotize products.

## 📦 Packages

| Package | Description |
|---------|-------------|
| [`@aiotize/tokens`](./packages/tokens) | Design tokens (colors, typography, spacing, etc.) |
| [`@aiotize/icons`](./packages/icons) | SVG icon library with React components |
| [`@aiotize/fonts`](./packages/fonts) | Typography assets and @font-face declarations |
| [`@aiotize/themes`](./packages/themes) | Light/dark themes and ThemeProvider |
| [`@aiotize/css`](./packages/css) | CSS utility layer (reset, typography, spacing) |
| [`@aiotize/react`](./packages/react) | React component library |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development mode
pnpm dev

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## 📁 Repository Structure

```
Brand-System-Aiotize-Inc/
├── packages/
│   ├── tokens/          # Design tokens via Style Dictionary
│   ├── icons/           # SVG icons and React components
│   ├── fonts/           # Typography assets
│   ├── themes/          # Theme configurations
│   ├── css/             # CSS utility layer
│   └── react/           # React component library
├── apps/
│   └── docs/            # Storybook documentation site
├── tools/               # Internal build scripts
└── .github/workflows/   # CI/CD pipelines
```

## 🎨 Design Tokens

Design tokens are the foundation of the brand system. They define:

- **Colors**: Brand palette, semantic colors, neutrals
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale (4px base grid)
- **Shadows**: Elevation levels
- **Border Radius**: Consistent corner radii
- **Motion**: Animation durations and easing curves
- **Breakpoints**: Responsive breakpoints
- **Z-Index**: Layering scale

## 🧩 Components

The React component library provides accessible, customizable components:

- **Primitives**: Button, Text, Icon, Badge, Divider
- **Form Controls**: Input, Textarea, Select, Checkbox, Radio, Toggle
- **Feedback**: Alert, Toast, Spinner, Skeleton
- **Layout**: Box, Stack, Grid
- **Navigation**: Link, Tabs, Breadcrumb

## ♿ Accessibility

All components are built with accessibility in mind:

- WCAG 2.1 AA compliant color contrast
- Full keyboard navigation support
- ARIA attributes and semantic HTML
- Screen reader friendly

## 📝 License

[Apache License 2.0](./LICENSE)
