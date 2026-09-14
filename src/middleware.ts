import { defineMiddleware } from 'astro:middleware';

// Site-wide URL normalisation (SEO):
//  1. www.chiangraibazaar.com  ->  https://chiangraibazaar.com  (301)
//  2. /en  ->  /en/  (301) — language roots keep a trailing slash, matching the
//     canonical convention used in BaseLayout; deeper pages have no trailing slash
//     (handled for static assets via the Cloudflare assets html_handling setting).
const LANGS = new Set(['th', 'en', 'zh']);

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  if (url.hostname.startsWith('www.')) {
    const bare = url.hostname.slice(4);
    return context.redirect(`${url.protocol}//${bare}${url.pathname}${url.search}`, 301);
  }

  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length === 1 && LANGS.has(segments[0]) && !url.pathname.endsWith('/')) {
    return context.redirect(`/${segments[0]}/${url.search}`, 301);
  }

  return next();
});
