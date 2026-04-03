# tokens/build

This folder contains **generated** output files produced by the token build pipeline.

> ⚠️ **Do not edit files in this folder by hand.**  
> All files here are regenerated automatically by running `npm run build` inside the `tokens/` folder and by the CI workflow on every PR.

## Generated outputs

| Subfolder | Format | Consumed by |
|-----------|--------|-------------|
| `css/` | CSS custom properties | Web / browser |
| `js/` | ES module (CommonJS + ESM) | Node.js, React, Vue |
| `json/` | Resolved flat JSON | Any platform |
| `android/` | Android XML resources | Android apps |
| `ios/` | Swift / JSON | iOS apps |

## Regenerating

```bash
cd tokens
npm install   # first time only
npm run build
```

Commit the resulting changes to `tokens/build/` together with any source token changes in the same PR.
