# Roblox developer portfolio

Next.js (App Router) + React + TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

Everything you'd change lives in `src/data/content.ts`: profile, about, projects, pricing and testimonials.
Search for `[PLACEHOLDER]` to find values to replace. Put real screenshots in `public/` and update the `src` paths.

## Contact

The Contact page has two buttons: a Gmail compose link and a Discord link. Both URLs are in `contactLinks` in `src/data/content.ts`;
the Gmail link is built from `profile.email`.
