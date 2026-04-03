import StyleDictionary from 'style-dictionary';

const config = {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      prefix: 'aiotize',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/',
      prefix: 'aiotize',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
};

const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();

console.log('✅ Design tokens built successfully!');
