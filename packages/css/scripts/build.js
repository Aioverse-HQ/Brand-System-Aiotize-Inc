/**
 * Build script for CSS utilities
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const resetCSS = `/**
 * Aiotize CSS Reset
 * Modern CSS reset based on modern-normalize
 */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
}

body {
  margin: 0;
  font-family: var(--aiotize-font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  background-color: var(--aiotize-color-background, #fff);
  color: var(--aiotize-color-text-primary, #18181B);
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

abbr[title] {
  text-decoration: underline dotted;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: var(--aiotize-font-mono, ui-monospace, monospace);
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button, select {
  text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
}

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

:-moz-focusring {
  outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
  box-shadow: none;
}

legend {
  padding: 0;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}
`;

const typographyCSS = `/**
 * Aiotize Typography Utilities
 */

/* Headings */
.text-heading-1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.text-heading-2 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.text-heading-3 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.375;
}

.text-heading-4 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.375;
}

.text-heading-5 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
}

.text-heading-6 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
}

/* Body text */
.text-body-lg {
  font-size: 1.125rem;
  line-height: 1.625;
}

.text-body {
  font-size: 1rem;
  line-height: 1.5;
}

.text-body-sm {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Caption and labels */
.text-caption {
  font-size: 0.75rem;
  line-height: 1.5;
}

.text-label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
}

/* Font weights */
.font-regular { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Text colors */
.text-primary { color: var(--aiotize-color-text-primary); }
.text-secondary { color: var(--aiotize-color-text-secondary); }
.text-muted { color: var(--aiotize-color-text-muted); }
.text-brand { color: var(--aiotize-color-brand-primary); }
.text-success { color: var(--aiotize-color-success); }
.text-warning { color: var(--aiotize-color-warning); }
.text-error { color: var(--aiotize-color-error); }
.text-info { color: var(--aiotize-color-info); }
`;

const utilitiesCSS = `/**
 * Aiotize Utility Classes
 */

/* Display */
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Flex direction */
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }

/* Flex wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }

/* Justify content */
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

/* Align items */
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Gap */
.gap-0 { gap: 0; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-5 { gap: 1.25rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

/* Padding */
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
.p-5 { padding: 1.25rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }

.px-0 { padding-left: 0; padding-right: 0; }
.px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }

.py-0 { padding-top: 0; padding-bottom: 0; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }

/* Margin */
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 0.75rem; }
.m-4 { margin: 1rem; }
.m-auto { margin: auto; }

.mx-0 { margin-left: 0; margin-right: 0; }
.mx-auto { margin-left: auto; margin-right: auto; }

.my-0 { margin-top: 0; margin-bottom: 0; }
.my-auto { margin-top: auto; margin-bottom: auto; }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }

/* Background colors */
.bg-background { background-color: var(--aiotize-color-background); }
.bg-foreground { background-color: var(--aiotize-color-foreground); }
.bg-muted { background-color: var(--aiotize-color-muted); }
.bg-brand { background-color: var(--aiotize-color-brand-primary); }
.bg-success { background-color: var(--aiotize-color-success-light); }
.bg-warning { background-color: var(--aiotize-color-warning-light); }
.bg-error { background-color: var(--aiotize-color-error-light); }
.bg-info { background-color: var(--aiotize-color-info-light); }

/* Border */
.border { border: 1px solid var(--aiotize-color-border); }
.border-0 { border: none; }
.border-strong { border: 1px solid var(--aiotize-color-border-strong); }

/* Border radius */
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }

/* Shadows */
.shadow-none { box-shadow: none; }
.shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
.shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }

/* Width & Height */
.w-full { width: 100%; }
.w-auto { width: auto; }
.h-full { height: 100%; }
.h-auto { height: auto; }
.min-h-screen { min-height: 100vh; }

/* Overflow */
.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-scroll { overflow: scroll; }

/* Position */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Cursor */
.cursor-pointer { cursor: pointer; }
.cursor-not-allowed { cursor: not-allowed; }

/* Opacity */
.opacity-0 { opacity: 0; }
.opacity-50 { opacity: 0.5; }
.opacity-100 { opacity: 1; }

/* Transition */
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;

// Combined bundle
const aiotizeCSS = `/**
 * Aiotize CSS Utilities
 * Version: 0.1.0
 */

${resetCSS}

${typographyCSS}

${utilitiesCSS}
`;

writeFileSync(join(distDir, 'reset.css'), resetCSS);
writeFileSync(join(distDir, 'typography.css'), typographyCSS);
writeFileSync(join(distDir, 'utilities.css'), utilitiesCSS);
writeFileSync(join(distDir, 'aiotize.css'), aiotizeCSS);

console.log('✅ CSS utility files generated!');
