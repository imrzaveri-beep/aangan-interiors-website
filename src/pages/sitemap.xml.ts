import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { servicePages } from '../data/services';
import { url } from '../lib/url';

// Every public page, for search engines.
const staticPages = [
  '/',
  '/about/',
  '/services/',
  '/portfolio/',
  '/process/',
  '/testimonials/',
  '/faqs/',
  '/design-tips/',
  '/contact/',
  '/privacy-policy/',
];

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...staticPages,
    ...servicePages.map((s) => `/services/${s.slug}/`),
    ...projects.map((p) => `/portfolio/${p.slug}/`),
  ];
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url><loc>${new URL(url(p), site).href}</loc><lastmod>${lastmod}</lastmod><priority>${p === '/' ? '1.0' : '0.7'}</priority></url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
