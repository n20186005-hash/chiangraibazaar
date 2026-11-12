import type { APIRoute } from 'astro';
import { guides } from '../data/guides';
import { languagesList } from '../i18n/ui';

export const prerender = true;
export const GET: APIRoute = () => {
  const base = 'https://chiangraibazaar.com';
  const routes = languagesList.flatMap(lang => [
    `/${lang}/`,
    `/${lang}/guides/`,
    ...guides.map(g => `/${lang}/guides/${g.slug}/`),
  ]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path=>`<url><loc>${base}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, {headers: {'Content-Type':'application/xml; charset=utf-8'}});
};
