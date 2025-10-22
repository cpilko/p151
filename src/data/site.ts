export const SITE_TITLE = 'Cub Scout Pack 151 - Broomall, PA';
export const SITE_DESC =
  'Cub Scout Pack 151 is a family pack for Kindergarten through 5th Grade in Broomall, PA. Building confidence, leadership, and character for over 60 years with weekly meetings, monthly hikes, and year-round family events.';
export const MEETING_TIME = '7 PM Mondays';
export const MEETING_LOCATION = 'Marple Presbyterian Church';

// Canonical site origin for SEO. Set to your production domain or GitHub Pages URL.
export const SITE_URL = 'https://cpilko.github.io/p151/';

export const BEASCOUT_URL = 'https://beascout.scouting.org/listing?unit_key=YOUR_UNIT_KEY';
export const GOOGLE_FORM_URL = 'https://forms.gle/AdFmrX8vEHyTvVFS7'; // TODO: replace with Google Form URL

// Base-aware helper for assets so GitHub Pages subpath works
export const BASE_URL = import.meta.env.BASE_URL;
export const asset = (p: string) => `${BASE_URL}${p.replace(/^\//, '')}`;

// Public asset paths (base-aware)
export const LOGO_IMAGE = asset('CubScout_4K-Logo-CSBC.png');
export const HERO_IMAGE = asset('hero.jpg');
export const GALLERY_1 = asset('2019-06-12-RM-0315 copy1_photo_CSBC.jpg');
export const GALLERY_2 = asset('AT4A3393-photo-CSBC.JPG');

// Default social share image and alt text (for og:image/twitter:image)
export const OG_IMAGE = HERO_IMAGE;
export const OG_IMAGE_ALT = 'Cub Scout Pack 151 in Broomall, PA';

// Anchor IDs for in-page navigation
export const IDS = {
  whoWeAre: 'who-we-are',
  whyJoin: 'why-join',
  program: 'program',
  getInvolved: 'get-involved',
  contact: 'contact',
} as const;