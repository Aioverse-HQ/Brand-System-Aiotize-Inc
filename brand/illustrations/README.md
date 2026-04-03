# Illustrations

This folder contains the Aiotize illustration library.

## Structure

Illustrations are grouped by theme:

```
illustrations/
├─ hero/         ← Large feature or landing-page illustrations
├─ empty-states/ ← Empty state and zero-data illustrations
├─ onboarding/   ← Onboarding flow illustrations
└─ marketing/    ← Campaign and social illustrations
```

## Style guide

Aiotize illustrations follow these visual rules:

- **Palette:** Use the brand color palette only (see `docs/color.md`). Illustrations may use the full primary and secondary palette plus white.
- **Line weight:** 2 px stroke on a standard 800 × 600 px canvas; scale proportionally.
- **Corner radius:** Rounded corners (8–16 px) consistent with the product UI.
- **Characters:** Use the approved character library (in `hero/characters/`) — do not introduce new character designs without brand approval.
- **Format:** SVG (master), PNG 2× (export for email / docs).

## Naming conventions

```
<theme>-<descriptive-name>.svg
```

Example: `empty-states-no-results.svg`, `onboarding-step-1.svg`

## Adding illustrations

1. Follow the style guide above.
2. Place the SVG in the correct theme subfolder.
3. Export a PNG 2× alongside the SVG.
4. Update this README if you create a new theme subfolder.
5. Get brand team approval before merging illustration additions.

## Licensing

Illustrations are proprietary to Aiotize Inc. They may not be used by external parties without written permission.
