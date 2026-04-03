/**
 * Build script for theme CSS files
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const lightCSS = `/**
 * Aiotize Light Theme
 */
:root,
[data-theme="light"] {
  /* Brand Colors */
  --aiotize-color-brand-primary: #6366F1;
  --aiotize-color-brand-primary-hover: #4F46E5;
  --aiotize-color-brand-primary-active: #4338CA;
  --aiotize-color-brand-secondary: #8B5CF6;
  --aiotize-color-brand-accent: #06B6D4;

  /* Semantic Colors */
  --aiotize-color-success: #10B981;
  --aiotize-color-success-light: #D1FAE5;
  --aiotize-color-warning: #F59E0B;
  --aiotize-color-warning-light: #FEF3C7;
  --aiotize-color-error: #EF4444;
  --aiotize-color-error-light: #FEE2E2;
  --aiotize-color-info: #3B82F6;
  --aiotize-color-info-light: #DBEAFE;

  /* Surface Colors */
  --aiotize-color-background: #FFFFFF;
  --aiotize-color-foreground: #FAFAFA;
  --aiotize-color-muted: #F4F4F5;
  --aiotize-color-border: #E4E4E7;
  --aiotize-color-border-strong: #D4D4D8;

  /* Text Colors */
  --aiotize-color-text-primary: #18181B;
  --aiotize-color-text-secondary: #52525B;
  --aiotize-color-text-muted: #71717A;
  --aiotize-color-text-inverse: #FFFFFF;
  --aiotize-color-text-link: #6366F1;
}
`;

const darkCSS = `/**
 * Aiotize Dark Theme
 */
[data-theme="dark"] {
  /* Brand Colors - Same as light */
  --aiotize-color-brand-primary: #818CF8;
  --aiotize-color-brand-primary-hover: #6366F1;
  --aiotize-color-brand-primary-active: #4F46E5;
  --aiotize-color-brand-secondary: #A78BFA;
  --aiotize-color-brand-accent: #22D3EE;

  /* Semantic Colors */
  --aiotize-color-success: #34D399;
  --aiotize-color-success-light: #064E3B;
  --aiotize-color-warning: #FBBF24;
  --aiotize-color-warning-light: #78350F;
  --aiotize-color-error: #F87171;
  --aiotize-color-error-light: #7F1D1D;
  --aiotize-color-info: #60A5FA;
  --aiotize-color-info-light: #1E3A8A;

  /* Surface Colors */
  --aiotize-color-background: #09090B;
  --aiotize-color-foreground: #18181B;
  --aiotize-color-muted: #27272A;
  --aiotize-color-border: #3F3F46;
  --aiotize-color-border-strong: #52525B;

  /* Text Colors */
  --aiotize-color-text-primary: #FAFAFA;
  --aiotize-color-text-secondary: #A1A1AA;
  --aiotize-color-text-muted: #71717A;
  --aiotize-color-text-inverse: #18181B;
  --aiotize-color-text-link: #818CF8;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Brand Colors */
    --aiotize-color-brand-primary: #818CF8;
    --aiotize-color-brand-primary-hover: #6366F1;
    --aiotize-color-brand-primary-active: #4F46E5;
    --aiotize-color-brand-secondary: #A78BFA;
    --aiotize-color-brand-accent: #22D3EE;

    /* Semantic Colors */
    --aiotize-color-success: #34D399;
    --aiotize-color-success-light: #064E3B;
    --aiotize-color-warning: #FBBF24;
    --aiotize-color-warning-light: #78350F;
    --aiotize-color-error: #F87171;
    --aiotize-color-error-light: #7F1D1D;
    --aiotize-color-info: #60A5FA;
    --aiotize-color-info-light: #1E3A8A;

    /* Surface Colors */
    --aiotize-color-background: #09090B;
    --aiotize-color-foreground: #18181B;
    --aiotize-color-muted: #27272A;
    --aiotize-color-border: #3F3F46;
    --aiotize-color-border-strong: #52525B;

    /* Text Colors */
    --aiotize-color-text-primary: #FAFAFA;
    --aiotize-color-text-secondary: #A1A1AA;
    --aiotize-color-text-muted: #71717A;
    --aiotize-color-text-inverse: #18181B;
    --aiotize-color-text-link: #818CF8;
  }
}
`;

writeFileSync(join(distDir, 'light.css'), lightCSS);
writeFileSync(join(distDir, 'dark.css'), darkCSS);

console.log('✅ Theme CSS files generated!');
