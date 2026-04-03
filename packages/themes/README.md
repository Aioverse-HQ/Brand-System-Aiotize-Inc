# @aiotize/themes

Theme configurations and ThemeProvider for the Aiotize brand system.

## Installation

```bash
pnpm add @aiotize/themes
```

## Usage

### CSS Themes

```html
<!-- Light theme (default) -->
<link rel="stylesheet" href="@aiotize/themes/light" />

<!-- Dark theme -->
<link rel="stylesheet" href="@aiotize/themes/dark" />
```

### React ThemeProvider

```tsx
import { ThemeProvider, useTheme } from '@aiotize/themes';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <MyApp />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Available Themes

- **light** — Default light theme
- **dark** — Dark mode theme
- **system** — Follows user's OS preference

## Theme API

### ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark' \| 'system'` | `'system'` | Initial theme |
| `storageKey` | `string` | `'aiotize-theme'` | localStorage key |
| `children` | `ReactNode` | - | App content |

### useTheme Hook

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `string` | Current theme |
| `setTheme` | `(theme: string) => void` | Set specific theme |
| `toggleTheme` | `() => void` | Toggle light/dark |
