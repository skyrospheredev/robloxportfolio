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

## Forms

The contact and feedback forms validate on the client only. **Nothing is stored or sent.**
The `TODO(backend)` comments in `src/components/ContactForm.tsx` and `src/components/FeedbackForm.tsx` mark where a backend or email service goes.
