/**
 * Build script for fonts package
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Inter font CSS using Google Fonts CDN
const interCSS = `/* Inter Font Family - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
`;

// JetBrains Mono for code
const monoCSS = `/* JetBrains Mono - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
`;

// Combined fonts CSS
const fontsCSS = `/**
 * Aiotize Brand System - Typography
 *
 * Primary: Inter (sans-serif)
 * Monospace: JetBrains Mono
 */

${interCSS}
${monoCSS}

:root {
  --aiotize-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --aiotize-font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', monospace;
}

body {
  font-family: var(--aiotize-font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code, pre, kbd, samp {
  font-family: var(--aiotize-font-mono);
}
`;

writeFileSync(join(distDir, 'inter.css'), interCSS);
writeFileSync(join(distDir, 'fonts.css'), fontsCSS);

console.log('✅ Font CSS files generated!');
