# @aiotize/css

CSS utility layer for the Aiotize brand system. Provides reset, typography, and utility classes.

## Installation

```bash
pnpm add @aiotize/css
```

## Usage

### Full Bundle

```css
@import '@aiotize/css';
```

### Individual Modules

```css
/* CSS Reset */
@import '@aiotize/css/reset';

/* Typography utilities */
@import '@aiotize/css/typography';

/* Spacing and color utilities */
@import '@aiotize/css/utilities';
```

## Included Utilities

### Typography

```html
<h1 class="text-heading-1">Large Heading</h1>
<p class="text-body">Body text</p>
<span class="text-caption">Caption text</span>
```

### Spacing

```html
<div class="p-4 m-2">Padding 16px, Margin 8px</div>
<div class="px-4 py-2">Padding x:16px y:8px</div>
<div class="mt-4 mb-2">Margin top:16px bottom:8px</div>
```

### Colors

```html
<p class="text-primary">Primary colored text</p>
<div class="bg-muted">Muted background</div>
<div class="border border-default">Default border</div>
```

### Display

```html
<div class="flex items-center justify-between">...</div>
<div class="grid grid-cols-3 gap-4">...</div>
<span class="hidden md:block">Responsive visibility</span>
```
