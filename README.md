# hhcstax.com

React (Vite + Tailwind) source for the HHCS public website.

This source was rebuilt on Nov 5, 2026 from the compiled site that was uploaded to Hostinger, because the original source was not saved. The rebuilt code produced the same pages, text and page heights as the original before the redesigns.

## Commands

```
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # writes the upload-ready site to dist/
```

`npm run build` also writes `dist/<page>/index.html` for each page with that page's title and description (see `scripts/route-pages.mjs` and `src/lib/meta.js`).

## Deploy to Hostinger

Upload everything inside `dist/` (including the hidden `.htaccess`) into `public_html`. The `.htaccess` sends `/admin`, `/admin-login` and `/sign` to app.hhcstax.com.

## Where things live

- `src/lib/site.js`: contact details, Supabase form endpoint (`site-submit`)
- `src/lib/meta.js`: page titles and descriptions
- `src/lib/photos.js`: the site images (local file paths in `public/images` and alt text)
- `src/components/ui.jsx`: shared pieces (page hero, navy bands, option cards, photo blocks, FAQ)
- `src/pages/`: one file per page

## Photos

The site uses realistic, everyday AI-generated photos (Higgsfield) stored in `public/images`, with alt text in `src/lib/photos.js`. They are not HHCS staff, tax pros or clients, and must not be captioned as if they were. The footer says "Images are AI-generated and do not show HHCS staff or clients."

## Design

Bright, friendly look: white and light gray sections, solid navy bands for the main options, gold accents, Plus Jakarta Sans. Colors live in `tailwind.config.js` and shared classes (`.btn-*`, `.card`, `.field`) in `src/index.css`.
