# @aiotize/icons

SVG icon library with React components for the Aiotize brand system.

## Installation

```bash
pnpm add @aiotize/icons
```

## Usage

### React Components

```tsx
import { IconArrowRight, IconCheck, IconClose } from '@aiotize/icons';

function MyComponent() {
  return (
    <div>
      <IconArrowRight size={24} color="currentColor" />
      <IconCheck size={20} color="#10B981" />
      <IconClose size={16} />
    </div>
  );
}
```

### Raw SVG Files

```tsx
import arrowRightSvg from '@aiotize/icons/svg/arrow-right.svg';
```

## Available Icons

### Navigation
- `IconArrowUp`, `IconArrowDown`, `IconArrowLeft`, `IconArrowRight`
- `IconChevronUp`, `IconChevronDown`, `IconChevronLeft`, `IconChevronRight`
- `IconHome`, `IconMenu`, `IconClose`

### Actions
- `IconCheck`, `IconPlus`, `IconMinus`
- `IconEdit`, `IconTrash`, `IconCopy`
- `IconDownload`, `IconUpload`, `IconRefresh`

### Status
- `IconInfo`, `IconWarning`, `IconError`, `IconSuccess`
- `IconLoading`

### Media
- `IconImage`, `IconVideo`, `IconAudio`
- `IconFile`, `IconFolder`

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size (width and height) |
| `color` | `string` | `currentColor` | Icon fill/stroke color |
| `className` | `string` | - | Additional CSS class |
| `title` | `string` | - | Accessible title for the icon |
| `aria-label` | `string` | - | ARIA label for accessibility |
