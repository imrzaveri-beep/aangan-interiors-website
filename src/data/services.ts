import type { PhotoKey } from './photos';
import type { ServiceSlug } from './projects';

export interface Service {
  name: string;
  description: string;
  price: string;
  photo: PhotoKey;
  page: ServiceSlug;
}

// The 8 services from the brief, with their starting prices.
export const services: Service[] = [
  {
    name: 'Full home interiors',
    description: '2, 3 and 4 BHK apartments: design to handover, furniture, false ceiling, lighting and painting.',
    price: '2BHK from ₹8 lakh · 3BHK from ₹14 lakh',
    photo: 'livingBeige',
    page: 'residential-interiors',
  },
  {
    name: 'Bungalow & villa interiors',
    description: 'Luxury turnkey interiors, including coordination with your landscape designer.',
    price: 'From ₹25 lakh',
    photo: 'livingArches',
    page: 'residential-interiors',
  },
  {
    name: 'Modular kitchens',
    description: 'BWP plywood, soft-close hardware, quartz tops and a 10-year warranty.',
    price: 'From ₹2.5 lakh',
    photo: 'kitchenWhite',
    page: 'modular-kitchens-wardrobes',
  },
  {
    name: 'Wardrobes & storage',
    description: 'Sliding or hinged wardrobes, lofts and walk-in closets made to measure.',
    price: 'From ₹1,800 per sq ft',
    photo: 'wardrobeTall',
    page: 'modular-kitchens-wardrobes',
  },
  {
    name: 'Office & co-working interiors',
    description: 'Workstations, cabins, meeting rooms and branding walls.',
    price: 'From ₹1,800 per sq ft',
    photo: 'officeOpen',
    page: 'commercial-interiors',
  },
  {
    name: 'Café & restaurant interiors',
    description: 'Theme concept, seating, service counter and signage.',
    price: 'From ₹2,200 per sq ft',
    photo: 'cafeBusy',
    page: 'commercial-interiors',
  },
  {
    name: '3D design & consultation only',
    description: '3D views and working drawings for any room, for you to build with your own team.',
    price: '₹15,000 per room',
    photo: 'studioDrawing',
    page: 'residential-interiors',
  },
  {
    name: 'Renovation & makeover',
    description: 'Kitchen, bathroom or full-home makeover in about 30 days.',
    price: 'Price on request',
    photo: 'bathMarble',
    page: 'residential-interiors',
  },
];

export interface ServicePage {
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string[];
  photo: PhotoKey;
  included: string[];
  prices: { label: string; value: string }[];
  priceNote: string;
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'residential-interiors',
    title: 'Residential Interiors',
    navTitle: 'Residential',
    metaTitle: 'Residential Interior Designer in Ahmedabad | 2, 3, 4 BHK & Bungalows',
    metaDescription:
      'Turnkey home interiors in Ahmedabad: 2BHK from ₹8 lakh, 3BHK from ₹14 lakh, bungalows from ₹25 lakh. 3D design first, one fixed quote, 45-day handover.',
    eyebrow: 'Apartments · Bungalows · Villas',
    heading: 'Interiors for the way your family lives',
    intro: [
      'From a first 2BHK to a family bungalow, we design every room around your routine: where the morning chai happens, where the kids study, where grandparents need good light to read.',
      'You see your home in 3D before any work starts. Then our own team builds it, with one fixed quotation and an average handover of 45 days.',
    ],
    photo: 'livingBeige',
    included: [
      'Free site visit, measurements and a detailed brief',
      '3D views of every room and working drawings',
      'Modular kitchen and wardrobes from our own factory',
      'Living, dining and bedroom furniture made to measure',
      'False ceiling, lighting plan and electrical points',
      'Painting, wallpaper and wall panelling',
      'Bathroom and pooja room upgrades',
      'Soft furnishings: curtains, rugs and décor styling',
      'Weekly photo updates and a site supervisor on every project',
      'Deep clean, handover and a 10-year warranty on woodwork',
    ],
    prices: [
      { label: '2BHK full interiors', value: 'from ₹8 lakh' },
      { label: '3BHK full interiors', value: 'from ₹14 lakh' },
      { label: '4BHK / bungalow', value: 'from ₹25 lakh' },
      { label: '3D design only', value: '₹15,000 per room' },
    ],
    priceNote: 'Final cost depends on size, materials and finishes. You get one itemised, fixed quotation after the 3D design.',
    faqs: [
      { q: 'How long does a 3BHK take?', a: '40–50 days after design sign-off.' },
      { q: 'Can I see 3D designs first?', a: 'Yes, 3D views of every room before work starts.' },
      { q: 'Do you give a fixed quotation?', a: 'Yes, one itemised quote; no hidden costs.' },
      { q: 'Can you design only, and I build with my own contractor?', a: 'Yes. Our 3D design and drawings package is ₹15,000 per room.' },
    ],
  },
  {
    slug: 'commercial-interiors',
    title: 'Commercial Interiors',
    navTitle: 'Commercial',
    metaTitle: 'Office & Café Interior Designer in Ahmedabad | From ₹1,800/sq ft',
    metaDescription:
      'Office, co-working, clinic and café interiors in Ahmedabad. Offices from ₹1,800/sq ft, cafés from ₹2,200/sq ft. Concept, 3D and on-time execution.',
    eyebrow: 'Offices · Cafés · Clinics',
    heading: 'Spaces that work hard for your business',
    intro: [
      'A good workspace helps your team focus. A good café makes guests stay for a second cup. We design commercial interiors that look good and are built to handle daily use.',
      'We plan around your opening date, work in phases if you are already running, and hand over on time.',
    ],
    photo: 'officeLounge',
    included: [
      'Space planning for seats, cabins and customer flow',
      'Theme concept, mood boards and 3D views',
      'Workstations, cabins, meeting rooms and phone booths',
      'Café seating, service counter and back-of-house layout',
      'Branding walls, signage and wayfinding',
      'Lighting, false ceiling, acoustic panels and flooring',
      'Electrical, data and AC coordination',
      'Phased work to reduce downtime',
    ],
    prices: [
      { label: 'Office & co-working', value: 'from ₹1,800 per sq ft' },
      { label: 'Café & restaurant', value: 'from ₹2,200 per sq ft' },
    ],
    priceNote: 'Rates include design, civil work, furniture and lighting. Kitchen equipment and AC units are quoted separately.',
    faqs: [
      { q: 'Do you work outside Ahmedabad?', a: 'Yes, across Gujarat; travel charges apply beyond 50 km.' },
      { q: 'Can you work at night or on weekends to keep my business open?', a: 'Yes, we can plan noisy work outside business hours where your building allows it.' },
      { q: 'Do you handle signage and branding?', a: 'Yes, we design and install signage, branding walls and wayfinding with your brand team.' },
      { q: 'What are the payment terms?', a: '10% booking, 50% on material order, 35% mid-way, 5% on handover.' },
    ],
  },
  {
    slug: 'modular-kitchens-wardrobes',
    title: 'Modular Kitchens & Wardrobes',
    navTitle: 'Kitchens',
    metaTitle: 'Modular Kitchen in Ahmedabad from ₹2.5 lakh | Wardrobes & Storage',
    metaDescription:
      'Modular kitchens in Ahmedabad from ₹2.5 lakh: BWP plywood, soft-close hardware, quartz tops and a 10-year warranty. Wardrobes from ₹1,800/sq ft.',
    eyebrow: 'Made in our Changodar factory',
    heading: 'Kitchens and wardrobes built to last',
    intro: [
      'Your kitchen is the busiest room in the house. We build it in BWP (boiling water proof) plywood with soft-close hardware and quartz tops, so it stays beautiful for years.',
      'Every kitchen and wardrobe is made to measure at our own factory in Changodar and comes with a 10-year warranty on woodwork.',
    ],
    photo: 'kitchenWhite',
    included: [
      'Free site visit and exact measurements',
      '3D design of your kitchen or wardrobe',
      'BWP plywood carcasses with laminate, acrylic or PU finish',
      'Soft-close hinges, drawers and tandem baskets',
      'Quartz or granite countertop with backsplash',
      'Tall pantry, corner carousel and appliance housing',
      'Sliding or hinged wardrobes, lofts and walk-in closets',
      'Installation in 5–7 days once the site is ready',
      '10-year warranty on modular woodwork',
    ],
    prices: [
      { label: 'Modular kitchen', value: 'from ₹2.5 lakh' },
      { label: 'Wardrobes & storage', value: 'from ₹1,800 per sq ft' },
    ],
    priceNote: 'Price depends on the size, finish and hardware you choose. Appliances are not included.',
    faqs: [
      { q: 'What warranty do you give?', a: '10 years on modular woodwork, 1 year on other work.' },
      { q: 'Why BWP plywood?', a: 'Boiling water proof plywood resists moisture far better than MDF or particle board, which matters near a sink.' },
      { q: 'How long does a modular kitchen take?', a: 'About 3 weeks from design sign-off: 2 weeks in our factory and 5–7 days to install.' },
      { q: 'Is the first site visit free?', a: 'Yes, within Ahmedabad and Gandhinagar.' },
    ],
  },
];

export const servicePageBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);
