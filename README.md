# IPTV til Norge

Norwegian-language Next.js App Router site for `iptvtilnorge.com`.

Run `npm install` and `npm run dev` for local development. `npm run build` creates a static export in `out/`.

## Cloudflare Pages

Use the **Next.js (Static HTML Export)** preset:

- Build command: `npm run build`
- Build output directory: `out`
- Deploy command: leave empty (Pages deploys the output automatically)

## Cloudflare Workers Static Assets

The included `wrangler.jsonc` points Wrangler at the generated `out/` directory. Use:

```bash
npm run build
npx wrangler deploy
```

For Cloudflare Workers Builds, set **Build command** to `npm run build` and **Deploy command** to `npx wrangler deploy`. Alternatively use `npm run deploy` as the deploy command; it builds first automatically.

Do not use the OpenNext migration for this project; it is a static export and does not need an SSR Worker.
