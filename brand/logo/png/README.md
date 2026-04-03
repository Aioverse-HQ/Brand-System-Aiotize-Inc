# PNG Logo Files

This folder contains raster logo exports for use in documents, slide decks, emails, and other contexts where SVG is not supported.

## File naming convention

```
aiotize-logo-<variant>-<resolution>.png
```

Example: `aiotize-logo-primary-2x.png`

## Resolutions

| Suffix | Pixel density | Typical use |
|--------|--------------|-------------|
| `1x` | 72 – 96 dpi | Web (non-retina), email |
| `2x` | 144 – 192 dpi | Retina screens, slide decks |
| `3x` | 216 – 288 dpi | High-resolution print |

## Available variants

- `aiotize-logo-primary-{1x,2x,3x}.png`
- `aiotize-logo-reversed-{1x,2x,3x}.png`
- `aiotize-logo-mono-black-{1x,2x,3x}.png`
- `aiotize-logo-mono-white-{1x,2x,3x}.png`
- `aiotize-icon-{1x,2x,3x}.png`

## Re-exporting

Export PNG files from the SVG source in `../svg/` at the dimensions specified in `docs/logo-usage.md`. Do not scale up from a lower-resolution PNG — always re-export from the SVG source.
