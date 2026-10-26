import type { PhotoKey } from './photos';

export type Category = 'Apartments' | 'Bungalows' | 'Kitchens' | 'Offices' | 'Cafés';
export type ServiceSlug = 'residential-interiors' | 'commercial-interiors' | 'modular-kitchens-wardrobes';

export interface Project {
  slug: string;
  title: string;
  label: string;
  category: Category;
  service: ServiceSlug;
  /** other service pages this project is shown on */
  alsoIn?: ServiceSlug[];
  location: string;
  size: string;
  timeline: string;
  budget: string;
  summary: string;
  hero: PhotoKey;
  gallery: PhotoKey[];
  before: PhotoKey;
  after: PhotoKey;
  story: string[];
  quote?: { text: string; author: string };
  featured?: boolean;
}

// Demo projects. Facts, photos and stories are placeholders until Aangan sends
// real project details (see DELIVERY.md).
export const projects: Project[] = [
  {
    slug: 'the-shah-residence',
    title: 'The Shah Residence',
    label: '4BHK apartment',
    category: 'Apartments',
    service: 'residential-interiors',
    location: 'Bodakdev, Ahmedabad',
    size: '2,450 sq ft · 4BHK',
    timeline: '43 days',
    budget: '₹28–32 lakh',
    summary: 'A calm, light-filled family home with warm wood, brass details and storage in every corner.',
    hero: 'heroLiving',
    gallery: ['livingBeige', 'diningGreen', 'kitchenIsland', 'bedroomClassic', 'bathMarble', 'shelvesWall'],
    before: 'beforeEmpty',
    after: 'livingBeige',
    story: [
      'Priya and Ankit moved into their Bodakdev flat with two school-going children and Ankit’s parents. They wanted a home that felt open and quiet, yet had a place for everyone’s things.',
      'We kept the palette soft: ivory walls, oak-finish laminates and brass handles. The living room opens into a six-seater dining area with a crockery unit that doubles as a display for family photos. The parents’ room has a low bed, good reading light and an easy-access wardrobe with no lofts to climb to.',
      'Every bedroom has full-height wardrobes, and the kitchen has tall pull-out units so nothing gets lost at the back. The family saw each room in 3D before work began, and the site was handed over clean, with a warranty card, on day 43.',
    ],
    quote: { text: 'They finished our 3BHK in 43 days, exactly as the 3D showed.', author: 'Priya & Ankit Shah, Bodakdev' },
    featured: true,
  },
  {
    slug: 'brew-lab-cafe',
    title: 'Brew Lab Café',
    label: 'Specialty coffee café',
    category: 'Cafés',
    service: 'commercial-interiors',
    location: 'Prahlad Nagar, Ahmedabad',
    size: '1,600 sq ft · 48 covers',
    timeline: '35 days',
    budget: '₹35–38 lakh',
    summary: 'A warm, plant-filled coffee bar built for long conversations and great photos.',
    hero: 'cafeBusy',
    gallery: ['cafeIndustrial', 'cafeWindow', 'cafeSign', 'cafeBusy'],
    before: 'beforeSparse',
    after: 'cafeIndustrial',
    story: [
      'Karan wanted Brew Lab to feel like a neighbourhood living room for Prahlad Nagar’s students and office crowd: somewhere you stay for a second cup.',
      'We planned three seating zones: a long communal table for laptops, cosy two-seaters by the window, and bar seating facing the brew counter so guests can watch the coffee being made. Exposed ceilings were painted deep slate, and warm pendant lights pull the eye to the counter.',
      'Easy-clean surfaces, hidden power points at every table and a durable wooden floor keep the café practical. Signage and a feature wall were designed to look good on Instagram, without being loud.',
    ],
    quote: { text: 'Our café footfall went up after the redesign. Customers love the space.', author: 'Karan Joshi, Brew Lab Café' },
    featured: true,
  },
  {
    slug: 'patel-bungalow',
    title: 'Patel Bungalow',
    label: '5BHK bungalow',
    category: 'Bungalows',
    service: 'residential-interiors',
    location: 'Thaltej, Ahmedabad',
    size: '5,200 sq ft · 5BHK',
    timeline: '68 days',
    budget: '₹55–60 lakh',
    summary: 'A double-height family bungalow with arched windows, a floating staircase and a courtyard feel.',
    hero: 'livingArches',
    gallery: ['livingDouble', 'bungalowNight', 'diningOpen', 'bedroomGrey', 'bathGrey', 'kitchenLuxe'],
    before: 'beforeSparse',
    after: 'livingArches',
    story: [
      'Dr. Mehul Patel’s family wanted their Thaltej bungalow to feel grand when guests came over, and simple and peaceful on every other day.',
      'The double-height living room was built around the arched windows, with a light stone floor and a wooden ceiling that brings the scale down to a human level. A floating staircase leads up to the bedrooms, each with its own walk-in wardrobe and a bathroom finished in matt grey and marble.',
      'We coordinated with the landscape team so the garden, the pooja room and the family lounge all look onto the same green court: an aangan at the heart of the home. One fixed quotation covered the whole project.',
    ],
    quote: { text: 'One fixed quote and not a rupee extra. Rare in this industry.', author: 'Dr. Mehul Patel, Thaltej' },
    featured: true,
  },
  {
    slug: 'iyer-apartment',
    title: 'Iyer Apartment',
    label: '3BHK apartment',
    category: 'Apartments',
    service: 'residential-interiors',
    location: 'Gota, Ahmedabad',
    size: '1,850 sq ft · 3BHK',
    timeline: '46 days',
    budget: '₹16–18 lakh',
    summary: 'A home designed and built while the family was in Canada, with weekly photo updates.',
    hero: 'livingSage',
    gallery: ['livingSage', 'bedroomWarm', 'kitchenGrey', 'livingYellow'],
    before: 'beforeEmpty',
    after: 'livingSage',
    story: [
      'Ritu and her husband bought their Gota flat while living in Canada. Every design meeting happened on video calls, with material samples couriered to her parents in Ahmedabad.',
      'Sage walls, natural wood and cane give the home a relaxed feel. A study nook in the second bedroom works for video calls across time zones, and the kitchen has a tall unit for the family’s large steel-utensil collection.',
      'Weekly photo updates on WhatsApp kept the family in the loop, and the keys were handed to Ritu’s parents on day 46.',
    ],
    quote: { text: 'We were in Canada; weekly photo updates made it stress-free.', author: 'Ritu Iyer (NRI), Gota' },
    featured: true,
  },
  {
    slug: 'trivedi-home',
    title: 'Trivedi Home',
    label: '2BHK apartment',
    category: 'Apartments',
    service: 'residential-interiors',
    alsoIn: ['modular-kitchens-wardrobes'],
    location: 'Vastrapur, Ahmedabad',
    size: '1,150 sq ft · 2BHK',
    timeline: '38 days',
    budget: '₹9–10 lakh',
    summary: 'Smart storage and light colours that make a compact 2BHK feel twice its size.',
    hero: 'livingCompact',
    gallery: ['livingCompact', 'livingApartment', 'wardrobeTall', 'bedroomCalm'],
    before: 'beforeSparse',
    after: 'livingCompact',
    story: [
      'Sneha’s 2BHK in Vastrapur had good light but very little storage. The brief: make space for a growing family without the home feeling crowded.',
      'We used a storage bed with hydraulic lift-up, a TV wall with closed cabinets, a foldable study table and ceiling-height wardrobes with a mirror shutter. Light finishes and slim legs on furniture keep the floor visible and the rooms airy.',
    ],
    quote: { text: 'Smart storage in a small 2BHK. Feels twice as big now.', author: 'Sneha Trivedi, Vastrapur' },
    featured: true,
  },
  {
    slug: 'desai-modular-kitchen',
    title: 'Desai Modular Kitchen',
    label: 'L-shaped modular kitchen',
    category: 'Kitchens',
    service: 'modular-kitchens-wardrobes',
    location: 'Satellite, Ahmedabad',
    size: '140 sq ft kitchen',
    timeline: '21 days',
    budget: '₹3.2 lakh',
    summary: 'A bright L-shaped kitchen with quartz tops, soft-close drawers and a tall pantry.',
    hero: 'kitchenWhite',
    gallery: ['kitchenWhite', 'kitchenClassic', 'kitchenGrey'],
    before: 'beforeEmpty',
    after: 'kitchenClassic',
    story: [
      'The Desai family cooks three fresh meals a day, so the kitchen had to work hard and clean up easily.',
      'We built the carcasses in BWP plywood at our Changodar factory, added a quartz countertop, a tall pantry unit, a corner carousel and deep drawers for heavy vessels. The whole kitchen was installed in under a week once the site was ready.',
    ],
    featured: true,
  },
  {
    slug: 'nexa-cowork-office',
    title: 'Nexa Co-work Office',
    label: 'Co-working office',
    category: 'Offices',
    service: 'commercial-interiors',
    location: 'SG Highway, Ahmedabad',
    size: '4,000 sq ft · 60 seats',
    timeline: '50 days',
    budget: '₹72–76 lakh',
    summary: 'A flexible co-working floor with glass cabins, quiet zones and a café-style lounge.',
    hero: 'officeOpen',
    gallery: ['officeOpen', 'officeLounge', 'cafeWindow'],
    before: 'officeBare',
    after: 'officeOpen',
    story: [
      'Nexa needed a co-working space that could switch between hot desks, small team cabins and event evenings without a big rebuild.',
      'Glass partitions keep the floor bright, acoustic panels make the phone booths and meeting rooms quiet, and a café-style lounge doubles as an event area. Branding walls and wayfinding were designed with the client’s brand team.',
    ],
  },
  {
    slug: 'mehta-kitchen-wardrobes',
    title: 'Mehta Kitchen & Wardrobes',
    label: 'Kitchen and wardrobes',
    category: 'Kitchens',
    service: 'modular-kitchens-wardrobes',
    location: 'Gandhinagar',
    size: 'Kitchen + 3 wardrobes',
    timeline: '25 days',
    budget: '₹6.5 lakh',
    summary: 'A charcoal-and-marble kitchen and three made-to-measure wardrobes for a new flat.',
    hero: 'kitchenMarble',
    gallery: ['kitchenMarble', 'wardrobeDoor', 'wardrobeTall'],
    before: 'beforeEmpty',
    after: 'kitchenMarble',
    story: [
      'The Mehtas wanted the two things they use most, the kitchen and the wardrobes, done well before moving into their Gandhinagar flat.',
      'A charcoal kitchen with a marble-look quartz top, and three wardrobes with sliding shutters, lofts and internal drawers, were all made at our factory and installed in 25 days.',
    ],
  },
  {
    slug: 'smile-studio-dental-clinic',
    title: 'Smile Studio Dental Clinic',
    label: 'Dental clinic',
    category: 'Offices',
    service: 'commercial-interiors',
    location: 'Alkapuri, Vadodara',
    size: '1,200 sq ft · 3 chairs',
    timeline: '30 days',
    budget: '₹22–24 lakh',
    summary: 'A calm, easy-to-clean clinic where nervous patients feel at ease.',
    hero: 'officeLounge',
    gallery: ['officeLounge', 'livingYellow', 'shelvesWall'],
    before: 'officeBare',
    after: 'officeLounge',
    story: [
      'Dr. Bhatt wanted her clinic to feel more like a quiet lounge than a hospital, while meeting every hygiene need.',
      'Soft lighting, warm wood and comfortable seating set the tone in the waiting area. Treatment rooms use seamless, easy-to-clean surfaces, and hidden storage keeps instruments out of sight. The clinic was finished in 30 days, with work planned so patients could still be seen at the old address.',
    ],
  },
  {
    slug: 'vora-villa',
    title: 'Vora Villa',
    label: '4BHK villa',
    category: 'Bungalows',
    service: 'residential-interiors',
    location: 'Shela, Ahmedabad',
    size: '4,100 sq ft · 4BHK',
    timeline: '60 days',
    budget: '₹42–45 lakh',
    summary: 'A contemporary villa with a pool-facing living room and timber-and-stone finishes.',
    hero: 'bungalowPool',
    gallery: ['bungalowPool', 'bungalowWood', 'livingModern', 'bedroomBold'],
    before: 'beforeSparse',
    after: 'livingModern',
    story: [
      'The Voras wanted their weekend villa in Shela to feel like a resort, but with the comfort of home.',
      'A wooden feature wall, a pool-facing living room and easy-care stone floors make the villa ready for big family get-togethers. Every bedroom opens onto greenery.',
    ],
  },
];

export const categories: Category[] = ['Apartments', 'Bungalows', 'Kitchens', 'Offices', 'Cafés'];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
