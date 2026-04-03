# SVG Logo Files

This folder contains the master vector logo files for Aiotize Inc.

## Files

| File | Description |
|------|-------------|
| `aiotize-logo-primary.svg` | Full-color primary logo — use on white or light gray backgrounds |
| `aiotize-logo-reversed.svg` | White logo — use on dark or brand-color backgrounds |
| `aiotize-logo-mono-black.svg` | All-black logo — for single-color applications |
| `aiotize-logo-mono-white.svg` | All-white logo — for single-color dark substrates |
| `aiotize-icon.svg` | Standalone icon mark — for favicons, app icons, and social avatars |

## Guidelines

- Always use the SVG files as the source of truth.
- Do **not** modify the SVG files (colors, paths, proportions) without approval from the brand team.
- SVG files are optimised with [SVGO](https://github.com/svg/svgo). Run `npx svgo <file>` if you need to re-optimise after edits.
- For raster exports, use the PNG files in `../png/` — do not screenshot or export from SVG at low resolution.

See [`docs/logo-usage.md`](../../../docs/logo-usage.md) for the full usage specification.
