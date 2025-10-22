export const SITE_TITLE = 'Cub Scout Pack 151 - Broomall, PA';
export const SITE_DESC =
  'Cub Scout Pack 151 is a family pack for Kindergarten through 5th Grade in Broomall, PA. Building confidence, leadership, and character for over 60 years with weekly meetings, monthly hikes, and year-round family events.';
export const MEETING_TIME = '7 PM Mondays';
export const MEETING_LOCATION = 'Marple Presbyterian Church';

// Canonical site origin for SEO (no trailing slash). Set to your production domain.
export const SITE_URL = 'https://pack151.org';

export const BEASCOUT_URL = 'https://beascout.scouting.org/listing?unit_key=YOUR_UNIT_KEY';
export const GOOGLE_FORM_URL = 'https://forms.gle/AdFmrX8vEHyTvVFS7'; // TODO: replace with Google Form URL

// Temporary placeholder images (Picsum). Replace with public asset paths later.
export const LOGO_IMAGE = '/CubScout_4K-Logo-CSBC.png';
export const HERO_IMAGE = '/hero.jpg';
export const GALLERY_1 = '/2019-06-12-RM-0315 copy1_photo_CSBC.jpg';
export const GALLERY_2 = '/AT4A3393-photo-CSBC.JPG';

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