# @aiotize/react

React component library for the Aiotize brand system. Accessible, customizable, and built with design tokens.

## Installation

```bash
pnpm add @aiotize/react
```

## Usage

```tsx
import { Button, Text, Stack, Input } from '@aiotize/react';
import '@aiotize/react/styles.css';

function App() {
  return (
    <Stack gap="md">
      <Text as="h1" variant="heading-1">Welcome</Text>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </Stack>
  );
}
```

## Components

### Primitives
- **Button** — Primary actions with variants (primary, secondary, ghost, destructive)
- **Text** — Typography component with semantic HTML support
- **Icon** — Icon wrapper component
- **Badge** — Labels and status indicators
- **Divider** — Visual separator

### Form Controls
- **Input** — Text input with validation states
- **Textarea** — Multi-line text input
- **Select** — Dropdown selection
- **Checkbox** — Boolean selection
- **Radio** — Single selection from options
- **Toggle** — Switch control

### Feedback
- **Alert** — Contextual feedback messages
- **Spinner** — Loading indicator
- **Skeleton** — Content placeholder

### Layout
- **Box** — Generic layout container
- **Stack** — Flexbox stack (horizontal/vertical)
- **Grid** — CSS Grid layout

## Accessibility

All components are built with accessibility in mind:
- WCAG 2.1 AA compliant
- Full keyboard navigation
- ARIA attributes
- Screen reader friendly
- Focus management
