# Delivery report: Aangan Interiors

## Summary

We built a premium, mobile-first website for Aangan Interiors with all 16 pages from your brief, plus a page for each portfolio project. It uses your logo, brand colours and fonts (Cormorant Garamond + Inter), large warm interior photos, and a calm, editorial layout inspired by your reference screenshots. Every page ends with a "Get a free 3D concept" call-to-action, and visitors can reach you on every page through a floating WhatsApp button, a Call | WhatsApp bar on phones, an enquiry form and a footer callback form. The site is fast (Google Lighthouse mobile scores of 99–100) and ready for Google search with titles, descriptions, a sitemap and business details for Google.

## What was built

- Home: sticky header with logo, menu and "Book visit" button; full-width hero "Homes that feel like you." with "Book free consultation" (WhatsApp) and "View portfolio" buttons; stats strip (120+ projects, 11 years, 4.9★, 45-day handover); 3 service cards with starting prices; 6 featured projects with hover zoom; before/after slider; 5-step process timeline; swipeable testimonials carousel (5 reviews); "As featured in" strip; 4-question FAQ teaser; CTA band; footer.
- About Us: founders' story (your text), mission, studio photos, team of 4 with illustrated avatars, numbers and the 5 things that make you different.
- Services: all 8 services with description and starting price, plus "Why Aangan".
- Residential Interiors, Commercial Interiors, Modular Kitchens & Wardrobes: intro, starting prices, "What's included" list, 3 related projects, FAQ and CTA on each.
- Portfolio: filter chips (All / Apartments / Bungalows / Kitchens / Offices / Cafés) and a masonry grid; every card opens its project page.
- Project pages: The Shah Residence, Brew Lab Café and Patel Bungalow, plus 7 more demo projects (Iyer Apartment, Trivedi Home, Desai Modular Kitchen, Nexa Co-work Office, Mehta Kitchen & Wardrobes, Smile Studio Dental Clinic, Vora Villa). Each has a hero photo, facts row (location, size, timeline, budget), story, photo gallery with full-screen lightbox (swipe and keyboard friendly), before/after slider, client quote where we have one, and previous/next project links.
- Our Process: the 5 steps with icons and days, your promises and payment terms.
- Testimonials: all 5 reviews and a Google rating badge (4.9 from 180+ reviews).
- FAQs: all 8 questions in an accordion.
- Design Tips: 3 article cards; each opens the full article further down the same page (storage ideas for a 2BHK, choosing a modular kitchen, a 45-day plan for a new flat).
- Contact & Book a Site Visit: the full "Book a site visit" form (name, phone, email, city, property type, BHK/size, budget, preferred date, message) with a "Send on WhatsApp instead" button, WhatsApp and Call buttons, address, email, opening hours and an embedded Google Map.
- Privacy Policy: written for India's DPDP Act, linked in the footer and under both forms.
- Footer callback form (name + phone) with "Send on WhatsApp", on every page.
- Thank-you message after a form is sent; "Send on WhatsApp" opens WhatsApp with everything the visitor typed already filled in.
- Floating WhatsApp button on every page (pre-filled "Hi Aangan, I want a free consultation for my home") and a sticky Call | WhatsApp bar on phones.
- Logo in the header, a white version in the footer, and a favicon made from the arch icon.
- Subtle fade-up on scroll and gentle image zoom on hover, switched off for visitors who prefer reduced motion. No pop-ups, no auto-play video.
- SEO: unique title and description on every page, Open Graph images for WhatsApp/Facebook sharing, sitemap.xml, robots.txt, LocalBusiness details for Google, FAQ and breadcrumb data, and a 404 page.
- Google Analytics 4 and Meta Pixel ready: they switch on as soon as you add your IDs.

## How to see it

- Live preview: https://imrzaveri-beep.github.io/aangan-interiors-website/ (it goes live 1 to 2 minutes after the code is pushed).
- To run it on a computer: install Node.js 24, then in the project folder run `npm install` and `npm run dev`, and open http://localhost:4321/aangan-interiors-website/ (full steps in README.md).

## Questions for you

- Your brief lists The Shah Residence as a 4BHK, but the Shahs' review says "They finished our 3BHK in 43 days". Which is right? We used 4BHK on the project page and kept the review word for word.
- We added 7 extra demo projects so every portfolio filter and service page has examples. Should we keep them, change them, or replace them with your real projects?
- The "As featured in" strip shows placeholder publication names. Which magazines, papers or websites have actually featured you?
- Would you like to show any awards on the About page? The brief mentioned "awards/numbers" but did not list awards.

## What we need from you

- Formspree form ID: create a free form at formspree.io for hello@aanganinteriors.in and send us the ID (it goes in `src/config.ts`). Until then the forms run in demo mode and nothing is emailed.
- Google Analytics 4 measurement ID (G-…) and Meta Pixel ID (they go in `src/config.ts`).
- Real project photos, including matching before/after pairs taken from the same angle, for The Shah Residence, Brew Lab Café, Patel Bungalow and any other projects you want to show.
- Real facts for each project (size, timeline, budget range, area) and a short story; current figures are placeholders.
- Your real Google rating and review count, and the reviewers' permission to show their names.
- Studio and team photos, if you would like them instead of the illustrated avatars.
- Logos of publications that featured you, with their permission.
- Your Google Business Profile link, so the map and "Open in Google Maps" point to your exact office.
- The domain aanganinteriors.in, once bought (we will connect it; the base address is already configurable).

## Please check

- This is a demo build: every project fact, project story, the 7 extra projects, the press names and the 4.9★ rating are placeholders or taken from the demo brief. Please replace them with real details before launch. Showing reviews, ratings or press mentions that are not real is not allowed under Indian consumer law.
- All photos are free stock photos from Unsplash, chosen in warm neutral tones. The "before" photos are empty stock rooms (shown slightly faded), not the same rooms as the "after" photos.
- The forms are in demo mode: after submit, the visitor sees the thank-you message with a note that nothing was emailed. "Send on WhatsApp" works now.
- Analytics and the Meta Pixel do not load yet (placeholder IDs). Once you switch them on, you may want a small cookie notice; we did not add one because the brief asked for no pop-ups.
- The Design Tips articles open further down the same page, as the brief asked ("article pages content inside list page"), not as separate pages.
- The map shows Shivalik Arcade, Prahlad Nagar from a Google Maps search, not an exact pin.
- Wardrobe prices show "from ₹1,800 per sq ft", as in your services list. Prices are shown as starting prices with a note that the final quote comes after the 3D design.
- The logo's lettering uses the font named inside your SVG file (Georgia), so it looks the same everywhere.

## Suggestions

- Give each Design Tips article its own page and add one new article a month: this helps you rank for "interior designer in Ahmedabad" searches.
- Add a simple cost estimator (choose 2/3/4 BHK and finish level, see a price range, then book on WhatsApp).
- Link the testimonials page to your Google reviews so visitors can read them all.
- Add a Gujarati or Hindi version for families who prefer it.
- Add short Instagram reels of finished projects to project pages (click to play, no auto-play).

## Bugs fixed

- Astro 6 had known security problems, so the site uses Astro 7.4.2 (0 known vulnerabilities in all packages).
- The hero photo looked stretched on phones; phones now get their own square crop, which is also faster.
- The phone menu's last links were hidden behind the Call | WhatsApp bar; fixed, and the menu button now changes to a close (X) icon.
- The floating WhatsApp button covered the last footer line on phones; the footer now has room for it.
- The "As featured in" text was slightly too light to read easily; it is now darker (meets WCAG AA contrast).
- The full-screen photo viewer let the page show through; it now has a dark background.

## Technical notes

- Stack: Astro 7.4.2 (static output) + Tailwind CSS 4.3.3, plain JavaScript for the slider, lightbox, carousel, filters and forms. No backend, no database. Exact versions are pinned and package-lock.json is committed. Node.js 22.23.4 or newer (the deploy uses Node 24 LTS).
- Folders: `src/pages` (one file per page; `services/[slug]` and `portfolio/[slug]` create the detail pages), `src/components`, `src/layouts/Base.astro` (SEO, JSON-LD, analytics, WhatsApp button), `src/data` (all text, projects, services and the photo list), `src/config.ts` (business details and IDs), `public` (logos and favicons).
- Settings: phone, WhatsApp number and message, email, address, hours, social links, Formspree ID, GA4 ID and Meta Pixel ID are all in `src/config.ts`. No secrets are stored in the code.
- Address of the site: `SITE_URL` and `BASE_PATH` (in `astro.config.mjs`, or as environment variables). The deploy workflow fills them in from GitHub Pages, so a custom domain works without code changes.
- Deploy: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` (and can be run by hand).
- Photos come from the Unsplash image CDN, resized and converted to WebP/AVIF automatically, lazy-loaded below the fold.
- Checked: `npm run build` and `npm run check` with 0 errors; every internal link and photo tested; tested at 360 px and 1440 px wide; Lighthouse mobile 99–100 for performance, accessibility, best practices and SEO on the pages tested.
