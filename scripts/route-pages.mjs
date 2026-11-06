// After `vite build`: write dist/<route>/index.html for each page, with that page's title,
// description and canonical URL, so Hostinger serves /now-hiring etc. with the right metadata.
import fs from 'node:fs';
import { PAGE_META } from '../src/lib/meta.js';

const base = fs.readFileSync('dist/index.html', 'utf8');
const home = PAGE_META['/'];
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const [route, meta] of Object.entries(PAGE_META)) {
  if (route === '/') continue;
  const html = base
    .replaceAll(esc(home.title), esc(meta.title))
    .replaceAll(esc(home.description), esc(meta.description))
    .replaceAll('href="https://hhcstax.com/"', `href="https://hhcstax.com${route}"`)
    .replaceAll('content="https://hhcstax.com/"', `content="https://hhcstax.com${route}"`);
  fs.mkdirSync(`dist${route}`, { recursive: true });
  fs.writeFileSync(`dist${route}/index.html`, html);
}
console.log('Route pages written:', Object.keys(PAGE_META).length - 1);
