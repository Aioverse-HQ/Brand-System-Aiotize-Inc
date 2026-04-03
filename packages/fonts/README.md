# @aiotize/fonts

Typography assets and @font-face declarations for the Aiotize brand system.

## Installation

```bash
pnpm add @aiotize/fonts
```

## Usage

### Import all fonts

```css
@import '@aiotize/fonts/css';
```

### Import Inter font only

```css
@import '@aiotize/fonts/inter';
```

### Preload hints

Add to your HTML `<head>` for optimal loading:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### JavaScript utilities

```typescript
import { fontFamilies, preloadFonts } from '@aiotize/fonts';

console.log(fontFamilies.sans); // Inter font stack
```

## Font Families

### Primary (Sans-serif)
**Inter** — A modern sans-serif optimized for screens

- Regular (400)
- Medium (500)
- Semibold (600)
- Bold (700)

### Monospace
**JetBrains Mono** — For code blocks and technical content
