import { Product, Testimonial, TimelineEvent, GalleryItem, SocialLink } from '../types';

export const BUSINESS_INFO = {
  name: 'Gulf Fabrication',
  tagline: 'Global Leader in FRP Engineering & Thematic Manufacturing',
  location: 'Industrial Hub, India',
  phone: '+91 99999 88888',
  whatsapp: '919999988888',
  email: 'info@gulffabrication.com',
  globalReach: ['GCC Nations', 'European Union', 'Southeast Asia', 'North America', 'India'],
  metrics: {
    established: '2008',
    clients: '1500+',
    countries: '25+',
    capacity: '25,000+ Units/Year'
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: '#' },
  { platform: 'LinkedIn', url: '#' },
  { platform: 'Facebook', url: '#' },
  { platform: 'WhatsApp', url: `https://wa.me/${BUSINESS_INFO.whatsapp}` },
];

export const PRODUCTS: Product[] = [
  // PLAY SYSTEMS
  { id: 'p-0', title: 'Grand Multi-Play Complex', category: 'Play Systems', description: 'Commercial-grade playground system with UV-stabilized slides and heavy-duty steel structural frames.', imageUrl: '/img-0.png' },
  { id: 'p-1', title: 'Thematic Pavilion Slide', category: 'Play Systems', description: 'Spiral chute system with castle-themed guardrails for premium educational institutes.', imageUrl: '/img-1.png' },
  { id: 'p-3', title: 'Tri-Color Racing Slide', category: 'Play Systems', description: 'High-capacity straight slide modules designed for public parks and water resorts.', imageUrl: '/img-3.png' },
  { id: 'p-7', title: 'Resort Wave Chutes', category: 'Play Systems', description: 'Glossy FRP water slides engineered for extreme weather and high-traffic use.', imageUrl: '/img-7.png' },
  { id: 'p-8', title: 'Enclosed Spiral Tube', category: 'Play Systems', description: 'Precision-molded spiral slides for indoor amusement parks and mall play zones.', imageUrl: '/img-8.png' },
  { id: 'p-18', title: 'Kids Car Carousel', category: 'Play Systems', description: 'Interactive carousel with colorful car-themed seating for toddlers.', imageUrl: '/img-18.png' },
  { id: 'p-19', title: 'Carousel Structural Frame', category: 'Play Systems', description: 'Heavy-duty steel carousel frame designed for high-capacity amusement rides.', imageUrl: '/img-19.png' },
  { id: 'p-20', title: 'Olympic Water Slide Complex', category: 'Play Systems', description: 'Multi-lane racing slide system with integrated water management plumbing.', imageUrl: '/img-20.png' },
  { id: 'p-21', title: 'Express Mall Train', category: 'Play Systems', description: 'LED-integrated trackless passenger train system with premium hand-finished FRP cabins.', imageUrl: '/img-21.png' },
  { id: 'p-25', title: 'Professional Trampoline', category: 'Play Systems', description: 'High-bounce safety-enclosed trampoline for recreation centers.', imageUrl: '/img-25.png' },
  { id: 'p-26', title: 'Outdoor Swing Set', category: 'Play Systems', description: 'Durable red and yellow swing set for community parks.', imageUrl: '/img-26.png' },
  { id: 'p-28', title: 'Penguin Kiddy Ride', category: 'Play Systems', description: 'Thematic character ride module for preschools.', imageUrl: '/img-28.png' },

  // ART & STATUES
  { id: 's-4', title: 'Kangaroo Waste Bins', category: 'Art & Statues', description: 'Creative kangaroo-shaped dustbins with automotive-grade glossy finishes.', imageUrl: '/img-4.png' },
  { id: 's-17', title: 'Life-Size Giraffe Statuary', category: 'Art & Statues', description: 'Hand-painted fiberglass giraffes for premium botanical gardens.', imageUrl: '/img-17.png' },
  { id: 's-22', title: 'Thematic Penguin Bin', category: 'Art & Statues', description: 'Charismatic penguin-shaped bin designed to encourage public hygiene.', imageUrl: '/img-22.png' },
  { id: 's-27', title: 'Master Chef Statue', category: 'Art & Statues', description: 'Iconic hospitality sculpture for fine dining entrances.', imageUrl: '/img-27.png' },
  { id: 's-32', title: 'Guardian Lion Monument', category: 'Art & Statues', description: 'Detailed royal lion sculpture for gate pillars.', imageUrl: '/img-32.png' },
  { id: 's-44', title: 'Grand Minnie Statuary', category: 'Art & Statues', description: 'Large-format character statue with intricate paint detailing.', imageUrl: '/img-44.png' },

  // PLANTERS
  { id: 'pl-2', title: 'Gold-Striped Regency Vases', category: 'Planters', description: 'Premium white ceramic-look FRP planters with metallic gold detailing.', imageUrl: '/img-2.png' },
  { id: 'pl-6', title: 'Geometric Industrial Pots', category: 'Planters', description: 'Modern rectangular planters in varied finishes.', imageUrl: '/img-6.png' },
  { id: 'pl-12', title: 'Pink Ribbed Pillar Pot', category: 'Planters', description: 'Textured designer planter for high-end retail.', imageUrl: '/img-12.png' },
  { id: 'pl-13', title: 'Luxury Oval Basin Pots', category: 'Planters', description: 'Seamless white oval planters for contemporary garden decor.', imageUrl: '/img-13.png' },
  { id: 'pl-14', title: 'Teardrop Art Vases', category: 'Planters', description: 'Sculptural matte-finish planters designed for luxury corridors.', imageUrl: '/img-14.png' },
  { id: 'pl-16', title: 'White Ribbed Round Planters', category: 'Planters', description: 'Classic ribbed design for indoor and outdoor use.', imageUrl: '/img-16.png' },

  // INFRASTRUCTURE
  { id: 'i-15', title: 'Portable Site Sanitation', category: 'Infrastructure', description: 'Self-contained FRP portable toilet unit with integrated plumbing.', imageUrl: '/img-15.png' },
  { id: 'i-29', title: 'Security Observation Cabin', category: 'Infrastructure', description: 'Insulated, all-weather guard cabin with high-impact windows.', imageUrl: '/img-29.png' },
  { id: 'i-10', title: 'Geometric Relief Door', category: 'Infrastructure', description: 'Termite-proof, sound-dampening FRP door system.', imageUrl: '/img-10.png' },

  // FURNITURE & EVENTS
  { id: 'f-5', title: 'Modular Canteen Seating', category: 'Furniture', description: 'Fixed table-and-bench system for high-capacity dining halls.', imageUrl: '/img-5.png' },
  { id: 'f-11', title: 'Classroom School Bench', category: 'Furniture', description: 'Ergonomic dual-seater benches with high-durability surfaces.', imageUrl: '/img-11.png' },
  { id: 'e-9', title: 'Architectural Stage Backdrop', category: 'Event Decor', description: 'Ornate relief panels for events and exhibitions.', imageUrl: '/img-9.png' },
  { id: 'e-23', title: 'Imperial Roman Archway', category: 'Event Decor', description: 'Modular pillar and arch system for grand entryways.', imageUrl: '/img-23.png' },
  { id: 'e-24', title: 'Gold Royal Entrance Gate', category: 'Event Decor', description: 'Traditional ornate entrance system with premium gold-finish relief work.', imageUrl: '/img-24.png' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Khalid Al-Hajri', role: 'Real Estate Developer, GCC', content: 'The playground systems delivered were beyond expectations. The engineering quality meets international standards perfectly.', image: 'https://i.pravatar.cc/100?u=khalid' },
  { id: '2', name: 'Binod Tamang', role: 'Resort Owner, Nepal', content: 'Gulf Fabrication delivered 40 sets of aquatic slides on schedule. Their export logistics are highly professional.', image: 'https://i.pravatar.cc/100?u=binod' },
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2008', title: 'Inception', description: 'Established as a specialist in composite fabrication for industrial components.' },
  { year: '2015', title: 'Global Expansion', description: 'Launched dedicated export centers to serve Europe and the GCC region.' },
  { year: '2023', title: 'Innovation Hub', description: 'Introduction of modular infrastructure and high-precision thematic molding.' },
];

export const GALLERY_ITEMS: GalleryItem[] = PRODUCTS.map((p) => ({
  id: `g-${p.id}`,
  type: 'image',
  url: p.imageUrl,
  thumbnail: p.imageUrl,
  title: p.title,
  location: 'Manufacturing Center',
  category: p.category
}));
