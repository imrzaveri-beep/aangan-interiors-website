// Builds a link that works both on GitHub Pages (/aangan-interiors-website/...)
// and on the final domain (/...). Always use it for internal links and files.
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

// Unsplash photos are served from their image CDN, resized and converted to
// WebP/AVIF on the fly (auto=format), so each file stays small.
export function photo(id: string, width: number, ratio?: number, quality = 60): string {
  const height = ratio ? `&h=${Math.round(width * ratio)}` : '';
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}${height}&q=${quality}`;
}

export function photoSrcset(id: string, maxWidth: number, ratio?: number): string {
  const widths = [400, 640, 960, 1280, 1600, 1920].filter((w) => w <= maxWidth);
  if (!widths.includes(maxWidth)) widths.push(maxWidth);
  return widths.map((w) => `${photo(id, w, ratio)} ${w}w`).join(', ');
}
