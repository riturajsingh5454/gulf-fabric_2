
export interface Product {
  id: string;
  title: string;
  category: 'Play Systems' | 'Art & Statues' | 'Planters' | 'Infrastructure' | 'Event Decor' | 'Furniture';
  description: string;
  imageUrl: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  location: string;
  category: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'Facebook' | 'LinkedIn' | 'YouTube' | 'Twitter' | 'WhatsApp';
  url: string;
}
