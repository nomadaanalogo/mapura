# AGENTS.md

## Project overview

This repo is a Next.js 15 marketing site for a legal services firm in Palmira, Valle del Cauca. The app is primarily Spanish-language marketing content with SEO metadata, structured data blocks, and a multi-section landing page.

## Stack and conventions

- Framework: Next.js App Router with TypeScript
- Styling: Tailwind CSS via globals.css and component utility classes
- UI structure: reusable React components live under `components/`
- App routes: pages and route groups live under `app/`
- Shared utilities: `lib/utils.ts`
- Asset conventions: static images go in `public/`, especially `public/images/`
- Import alias: the project uses `@/*` from `tsconfig.json`

## Working rules for agents

- Prefer small, focused edits in existing components instead of large rewrites.
- Preserve the Spanish copy and SEO metadata when editing marketing pages.
- Keep contact details, legal service names, and geographic references consistent across sections.
- Use `next/image` for local images when adding visual assets.
- Do not introduce unrelated frameworks or state-management libraries unless the task clearly requires them.
- If a design change affects layout or metadata, verify the change in the browser and keep the page style aligned with the existing legal-brand aesthetic.

## Key commands

```bash
pnpm dev
pnpm build
pnpm lint
```

- `pnpm dev`: start the local development server
- `pnpm build`: production build check
- `pnpm lint`: project lint validation

## Typical file locations

- Landing page entry: `app/page.tsx`
- Global app shell and metadata: `app/layout.tsx`
- Reusable page sections: `components/*.tsx`
- UI primitives and design-system pieces: `components/ui/*.tsx`
- Shared helpers: `lib/utils.ts`

## Important notes

- The site is content-heavy and SEO-oriented; changes to metadata may affect search visibility.
- Contact and legal service copy is often repeated across sections, so keep terminology consistent.
- This repo does not appear to include a formal test suite, so validation is mainly via `pnpm build` and `pnpm lint`.
