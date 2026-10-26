import type { PhotoKey } from './photos';

export interface Tip {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  photo: PhotoKey;
  blocks: ({ type: 'p'; text: string } | { type: 'h'; text: string } | { type: 'list'; items: string[] })[];
}

export const tips: Tip[] = [
  {
    slug: 'smart-storage-2bhk',
    title: '7 smart storage ideas for a 2BHK',
    excerpt: 'Small home, big family? These ideas from our Ahmedabad projects add storage without making rooms feel crowded.',
    readTime: '4 min read',
    photo: 'livingCompact',
    blocks: [
      { type: 'p', text: 'Most 2BHK flats in Ahmedabad are between 1,000 and 1,250 sq ft. With a family of four, every wall counts. Here is what works best in the homes we design.' },
      {
        type: 'list',
        items: [
          'Take wardrobes to the ceiling. A loft above the wardrobe holds suitcases and seasonal clothes you open twice a year.',
          'Choose a storage bed with a hydraulic lift-up. It holds as much as a small wardrobe and is easy to open.',
          'Build a closed TV unit. Open shelves collect dust and clutter; shutters keep the living room calm.',
          'Use the space under the window. A low seat with drawers becomes a reading corner and a place for toys.',
          'Add a tall pull-out in the kitchen. A 300 mm unit can store all your masalas, oils and dry snacks.',
          'Put a shoe rack with a seat near the door so shoes never travel inside.',
          'Pick light colours and furniture with slim legs. Seeing more floor makes a room feel larger.',
        ],
      },
      { type: 'p', text: 'Plan storage in the 3D design stage, not after the furniture arrives. It is much cheaper to add a loft on paper than on site.' },
    ],
  },
  {
    slug: 'choosing-modular-kitchen',
    title: 'Choosing a modular kitchen: materials made simple',
    excerpt: 'BWP or MR plywood? Laminate or acrylic? Quartz or granite? A plain-English guide before you sign a kitchen quote.',
    readTime: '5 min read',
    photo: 'kitchenClassic',
    blocks: [
      { type: 'p', text: 'A modular kitchen is a 10 to 15 year decision. The finish you see is only half the story; what lies behind it decides how long it lasts.' },
      { type: 'h', text: 'The box (carcass)' },
      { type: 'p', text: 'Ask for BWP (boiling water proof) plywood for the sink and hob units. It handles water and steam far better than MR plywood, MDF or particle board. It costs a little more, and it is worth it.' },
      { type: 'h', text: 'The shutters (finish)' },
      { type: 'p', text: 'Laminates are tough, easy to clean and budget-friendly. Acrylic gives a high-gloss mirror look but shows fingerprints. PU paint offers any colour with a smooth finish and is the most premium of the three.' },
      { type: 'h', text: 'The countertop' },
      { type: 'p', text: 'Quartz does not stain, needs no polishing and comes in many colours. Granite is natural, very strong and a little cheaper. Avoid marble near the hob: haldi and oil stain it quickly.' },
      { type: 'h', text: 'The hardware' },
      { type: 'p', text: 'Soft-close hinges and drawer channels are small parts that you use hundreds of times a week. Choose a known brand with a long warranty, and ask your designer to show you a working sample.' },
    ],
  },
  {
    slug: 'new-flat-timeline',
    title: 'Got the keys to a new flat? Your 45-day interiors plan',
    excerpt: 'What to decide first, what can wait, and how to move in on time, step by step.',
    readTime: '4 min read',
    photo: 'livingApartment',
    blocks: [
      { type: 'p', text: 'Getting the keys is exciting. Then the questions start: where do we begin, and how long will it take? Here is the plan we follow with our clients.' },
      { type: 'h', text: 'Week 1: brief and measurements' },
      { type: 'p', text: 'Book a site visit. Walk through each room and talk about how you live: who cooks, who works from home, who needs a pooja corner. Bring photos of homes you like.' },
      { type: 'h', text: 'Week 2: 3D design and a fixed quote' },
      { type: 'p', text: 'Review the 3D views room by room. This is the time to change your mind. Once you sign off, you get one fixed, itemised quotation.' },
      { type: 'h', text: 'Weeks 3 to 6: build' },
      { type: 'p', text: 'Civil and electrical work happens first, then the false ceiling, then furniture installation. Kitchens and wardrobes are made at the factory at the same time, so nothing waits.' },
      { type: 'h', text: 'Week 7: finishing and handover' },
      { type: 'p', text: 'Painting, lights, curtains and a deep clean. Walk through the snag list with your designer, collect your warranty card and move in.' },
    ],
  },
];
