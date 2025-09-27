// Feature flags for BE IN HAIR DESIGN
export const FEATURE_FLAGS = {
  // Booking system - disabled for now (informative website only)
  ENABLE_BOOKING: false,
  ENABLE_CALENDAR: false,
  ENABLE_ADMIN_PANEL: false,
  ENABLE_ONLINE_PAYMENT: false,

  // Future features
  ENABLE_BLOG: false,
  ENABLE_TESTIMONIALS: true,
  ENABLE_GALLERY: true,
  ENABLE_CONTACT_FORM: true,
  ENABLE_NEWSLETTER: false,
} as const;

// Salon information
export const SALON_INFO = {
  name: 'BE IN HAIR DESIGN',
  tagline: 'Vaš stil, naša strast',
  description:
    'Profesionalni frizerski salon koji pruža najbolje usluge šišanja, bojanja i stylinga.',

  // Contact information
  phone: '+387 61 106 522',
  email: 'info@beinhairdesign.com',
  address: 'Nedima Filipovića 10, Sarajevo 71000',

  // Social media
  instagram: 'https://instagram.com/frizerski.salon.be.in',
  facebook: 'https://facebook.com/frizerski.salon.be.in',

  // Working hours
  workingHours: {
    monday: '11:30 - 20:00',
    tuesday: '11:30 - 20:00',
    wednesday: '11:30 - 20:00',
    thursday: '11:30 - 20:00',
    friday: '11:30 - 20:00',
    saturday: '08:00 - 16:00',
    sunday: 'Zatvoreno',
  },
} as const;

// Services with actual pricing
export const SERVICES = {
  zene: {
    sisanje: [
      { name: 'Kratka kosa', price: '25 KM', duration: '60 min' },
      { name: 'Srednja kosa', price: '30 KM', duration: '75 min' },
      { name: 'Duga kosa', price: '35 KM', duration: '90 min' },
      { name: 'Extra duga kosa', price: '40 KM', duration: '105 min' },
    ],
    feniranje: [
      { name: 'Kratka kosa', price: '10 KM', duration: '30 min' },
      { name: 'Srednja kosa', price: '15 KM', duration: '45 min' },
      { name: 'Duga kosa', price: '20 KM', duration: '60 min' },
      { name: 'Extra duga kosa', price: '25 KM', duration: '75 min' },
    ],
    talasi: [
      { name: 'Kratka kosa', price: '15 KM', duration: '45 min' },
      { name: 'Srednja kosa', price: '20 KM', duration: '60 min' },
      { name: 'Duga kosa', price: '25 KM', duration: '75 min' },
      { name: 'Extra duga kosa', price: '30 KM', duration: '90 min' },
    ],
    farbanje: [
      { name: 'Kratka kosa', price: '50-60 KM', duration: '120 min' },
      { name: 'Srednja kosa', price: '70-80 KM', duration: '150 min' },
      { name: 'Duga kosa', price: '80-110 KM', duration: '180 min' },
      { name: 'Extra duga kosa', price: '100-140 KM', duration: '210 min' },
    ],
    minival: [
      { name: 'Kratka kosa', price: '50 KM', duration: '120 min' },
      { name: 'Srednja kosa', price: '60 KM', duration: '150 min' },
      { name: 'Duga kosa', price: '70 KM', duration: '180 min' },
      { name: 'Extra duga kosa', price: '80 KM', duration: '210 min' },
    ],
    balayage: [
      { name: 'Kratka kosa', price: '110 KM', duration: '180 min' },
      { name: 'Srednja kosa', price: '130 KM', duration: '210 min' },
      { name: 'Duga kosa', price: '150 KM', duration: '240 min' },
      { name: 'Extra duga kosa', price: '200-250 KM', duration: '270 min' },
    ],
    tretmani: [
      { name: 'Olaplex tretman', price: '60 KM', duration: '90 min' },
      { name: 'Olaplex 1-2 doze', price: '25-40 KM', duration: '60 min' },
      { name: 'Kaypro botox', price: '45 KM', duration: '75 min' },
      { name: 'Cocochoco/Keratin', price: '80-140 KM', duration: '180 min' },
    ],
  },
  muskarci: [
    { name: 'Šišanje', price: '10-15 KM', duration: '30 min' },
    { name: 'Šišanje i pranje', price: '20 KM', duration: '45 min' },
    { name: 'Brijanje/uređenje brade', price: '5-10 KM', duration: '20 min' },
    { name: 'Vosak', price: '5-20 KM', duration: '30 min' },
    { name: 'Farbanje kose', price: '30 KM', duration: '60 min' },
  ],
  dodatne: [
    { name: 'Pletenice', price: '5-50 KM', duration: '30-120 min' },
    { name: 'Svecane frizure', price: '40-60 KM', duration: '90 min' },
    { name: 'Depilacija lice (konac)', price: '5-10 KM', duration: '30 min' },
    { name: 'Vosak', price: '10-20 KM', duration: '45 min' },
    { name: 'Farbanje/kupljenje obrva', price: '5 KM', duration: '20 min' },
    { name: 'Obrve mix', price: '10 KM', duration: '30 min' },
  ],
} as const;

// Gallery categories
export const GALLERY_CATEGORIES = {
  beforeAfter: 'Prije i poslije',
  portfolio: 'Portfolio',
  salon: 'Salon',
  events: 'Događaji',
} as const;

// SEO configuration
export const SEO_CONFIG = {
  title: 'BE IN HAIR DESIGN - Profesionalni frizerski salon',
  description:
    'Profesionalni frizerski salon BE IN HAIR DESIGN. Šišanje, bojanje, tretmani i styling. Rezervirajte termin danas!',
  keywords: [
    'frizerski salon',
    'šišanje',
    'bojanje kose',
    'meliranje',
    'balayage',
    'keratinska ravnanje',
    'tretmani za kosu',
    'styling',
  ],
  author: 'BE IN HAIR DESIGN',
  ogImage: '/images/og-image.jpg',
} as const;
