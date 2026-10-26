# Aangan Interiors website

A premium, mobile-first website for **Aangan Interiors**, a boutique interior design studio in Ahmedabad (demo data).
It shows the studio's services, starting prices and portfolio, and turns visitors into free site-visit bookings through
WhatsApp, phone calls and an enquiry form.

Built with **Astro 7** and **Tailwind CSS 4** as a fully static site (no server, no database), hosted on **GitHub Pages**.

- Live preview: https://imrzaveri-beep.github.io/aangan-interiors-website/
- 16 pages + 7 extra project pages, a 404 page, `sitemap.xml` and `robots.txt`

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.23.4 or newer (Node 24 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:4321/aangan-interiors-website/
npm run build      # builds the site into dist/
npm run preview    # serves the built site
npm run check      # type and template checks
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages
(Settings → Pages → Source: **GitHub Actions**). The live site updates 1–2 minutes after a push.

### Moving to your own domain (aanganinteriors.in)

1. Buy the domain and point it to GitHub Pages with your domain provider's DNS settings, as described in GitHub's
   "Managing a custom domain for your GitHub Pages site" guide.
2. In the repository: Settings → Pages → Custom domain → `aanganinteriors.in`.
3. That's it: the workflow reads the address from GitHub Pages and builds with the right base path automatically.
   To build locally for the domain, run `SITE_URL=https://aanganinteriors.in BASE_PATH=/ npm run build`.

## Settings you can change

Everything lives in **`src/config.ts`**:

| Setting | What it is |
|---|---|
| `business` | Name, phone, WhatsApp number and pre-filled message, email, address, hours, Google Maps links, social links, Google rating |
| `integrations.formspreeFormId` | Formspree form ID for the enquiry and callback forms |
| `integrations.ga4Id` | Google Analytics 4 measurement ID (placeholder `G-XXXXXXX`) |
| `integrations.metaPixelId` | Meta Pixel ID (placeholder) |

Placeholders (anything containing `XXXX` or `YOUR_`) are ignored, so no tracking code loads until a real ID is set.

### Connect the forms to email (Formspree)

1. Create a free account at https://formspree.io and add a new form with the email `hello@aanganinteriors.in`.
2. Copy the form ID: the part after `https://formspree.io/f/` (for example `xpzvqkab`).
3. Paste it into `integrations.formspreeFormId` in `src/config.ts`, then commit and push.

Until then the forms run in **demo mode**: visitors see the thank-you message with a note that nothing was emailed, and
the "Send on WhatsApp" button always works (it opens WhatsApp with the form details pre-filled).

### Analytics

Paste your GA4 ID (`G-…`) and Meta Pixel ID into `src/config.ts`. Clicks on Call and WhatsApp buttons are sent as
`contact_click` events, and form submissions as `generate_lead` (GA4) / `Lead` (Meta).

## Content

| File | What it holds |
|---|---|
| `src/data/projects.ts` | Portfolio projects: facts, story, gallery, before/after photos, client quote |
| `src/data/services.ts` | The 8 services with starting prices, and the 3 service pages |
| `src/data/content.ts` | Stats, testimonials, FAQs, process steps, team, promises, "As featured in" names |
| `src/data/tips.ts` | The 3 design tips articles |
| `src/data/photos.ts` | Every photo (Unsplash id + alt text). Swap an id to change a photo everywhere |

Photos are free-to-use images from [Unsplash](https://unsplash.com/license), served resized as WebP/AVIF from the
Unsplash image CDN.

## Project structure

```text
.github/workflows/deploy.yml   GitHub Pages build and deploy
astro.config.mjs               site address and base path
public/                        favicons, logo (original + white version), brand/ logos for header and footer
src/
  config.ts                    business details and integration IDs
  data/                        all text content and the photo list
  components/                  header, footer, forms, before/after slider, gallery + lightbox, carousel…
  layouts/Base.astro           page shell: SEO tags, Open Graph, JSON-LD, analytics, WhatsApp button, mobile bar
  pages/                       one file per page (services/[slug] and portfolio/[slug] generate the detail pages)
  scripts/site.ts              fade-in on scroll, forms, click tracking
  styles/global.css            brand colours, fonts and shared styles
```
