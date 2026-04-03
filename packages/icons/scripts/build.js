/**
 * Build script for generating React icon components from SVG files
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import { optimize } from 'svgo';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, '../src/icons');
const outputDir = join(__dirname, '../src/components');

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// SVGO configuration
const svgoConfig = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
  ],
};

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

async function buildIcons() {
  const svgFiles = readdirSync(iconsDir).filter((file) => file.endsWith('.svg'));
  const exports = [];

  console.log(`Building ${svgFiles.length} icons...`);

  for (const file of svgFiles) {
    const name = basename(file, '.svg');
    const componentName = `Icon${toPascalCase(name)}`;
    const svgContent = readFileSync(join(iconsDir, file), 'utf-8');

    // Optimize SVG
    const optimized = optimize(svgContent, svgoConfig);

    // Transform to React component
    const componentCode = await transform(
      optimized.data,
      {
        typescript: true,
        ref: true,
        svgProps: {
          width: '{size}',
          height: '{size}',
          fill: '{color}',
          'aria-hidden': '{!title}',
          role: '{title ? "img" : undefined}',
        },
        template: (variables, { tpl }) => {
          return tpl`
import * as React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

export const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 24, color = 'currentColor', title, ...props }, ref) => {
    return (
      ${variables.jsx}
    );
  }
);

${componentName}.displayName = '${componentName}';
`;
        },
      },
      { componentName }
    );

    writeFileSync(join(outputDir, `${componentName}.tsx`), componentCode);
    exports.push(`export { ${componentName} } from './components/${componentName}';`);
    exports.push(`export type { ${componentName}Props } from './components/${componentName}';`);
  }

  // Generate index file
  const indexContent = `/**
 * @aiotize/icons
 * Auto-generated icon exports
 */

${exports.join('\n')}
`;

  writeFileSync(join(__dirname, '../src/index.ts'), indexContent);
  console.log('✅ Icons built successfully!');
}

buildIcons().catch(console.error);
