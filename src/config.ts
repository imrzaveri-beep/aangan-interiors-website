// All business details and third-party IDs live here. Change a value once and it
// updates on every page.

export const business = {
  name: 'Aangan Interiors',
  legalName: 'Aangan Interiors (demo)',
  tagline: 'Turnkey interiors for apartments, bungalows & cafés in Ahmedabad since 2014.',
  founded: 2014,
  founders: ['Neha Desai', 'Rohan Desai'],
  phoneDisplay: '+91 98250 41122',
  phoneE164: '+919825041122',
  whatsappNumber: '919825041122',
  whatsappMessage: 'Hi Aangan, I want a free consultation for my home',
  email: 'hello@aanganinteriors.in',
  address: {
    street: '402, Shivalik Arcade, Prahlad Nagar',
    city: 'Ahmedabad',
    region: 'Gujarat',
    postalCode: '380015',
    country: 'IN',
  },
  addressOneLine: '402, Shivalik Arcade, Prahlad Nagar, Ahmedabad, Gujarat 380015',
  hours: [
    { days: 'Monday – Saturday', time: '10:30 am – 7:30 pm IST' },
    { days: 'Sunday', time: 'Studio visits by appointment only' },
  ],
  serviceArea: ['Ahmedabad', 'Gandhinagar', 'Vadodara', 'All of Gujarat'],
  mapsLink: 'https://maps.google.com/?q=Prahlad+Nagar,+Ahmedabad,+Gujarat+380015',
  mapsEmbed: 'https://maps.google.com/maps?q=Shivalik+Arcade,+Prahlad+Nagar,+Ahmedabad,+Gujarat+380015&z=15&output=embed',
  social: {
    instagram: 'https://instagram.com/aanganinteriors',
    facebook: 'https://facebook.com/aanganinteriors',
    pinterest: 'https://pinterest.com/aanganinteriors',
    youtube: 'https://youtube.com/@aanganinteriors',
  },
  googleRating: '4.9',
  googleReviewCount: '180+',
};

// Third-party services. Placeholders containing "XXXX" or "YOUR_" are ignored, so
// nothing loads until you paste a real ID (see README.md).
export const integrations = {
  // Formspree form ID: the part after https://formspree.io/f/ (e.g. "xpzvqkab").
  formspreeFormId: 'YOUR_FORMSPREE_FORM_ID',
  // Google Analytics 4 measurement ID.
  ga4Id: 'G-XXXXXXX',
  // Meta (Facebook) Pixel ID.
  metaPixelId: 'XXXXXXXXXXXXXXX',
};

export const isPlaceholder = (value: string) => !value || /XXXX|YOUR_/.test(value);

export const whatsappLink = (text: string = business.whatsappMessage) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${business.phoneE164}`;
export const mailLink = `mailto:${business.email}`;
