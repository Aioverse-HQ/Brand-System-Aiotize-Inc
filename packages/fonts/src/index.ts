/**
 * @aiotize/fonts
 * Typography utilities and font family definitions
 */

/**
 * Font family stacks for the Aiotize brand
 */
export const fontFamilies = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', monospace",
} as const;

/**
 * Font weights used in the design system
 */
export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Font preload links for optimal loading
 */
export const preloadLinks = [
  {
    href: 'https://fonts.googleapis.com',
    rel: 'preconnect',
  },
  {
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    rel: 'stylesheet',
  },
] as const;

/**
 * Generate preload link HTML for SSR
 */
export function getPreloadHTML(): string {
  return `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
`.trim();
}
