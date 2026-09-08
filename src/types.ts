export interface GownItem {
  id: string;
  name: string;
  category: 'ball-gown' | 'mermaid' | 'a-line' | 'sheath' | 'reception' | 'veils-accessories';
  categoryLabel: string;
  description: string;
  silhouette: string;
  fabric: string;
  embellishments: string;
  trainLength?: string;
  image: string;
  gallery?: string[];
  isAvailableForRent: boolean;
  rentalStartingPrice?: string;
  purchaseStartingPrice?: string;
  isBespokeInspiration?: boolean;
  isFeatured?: boolean;
  tags?: string[];
}

export interface CollectionCategory {
  id: string;
  name: string;
  slug: 'ball-gown' | 'mermaid' | 'a-line' | 'sheath' | 'reception' | 'veils-accessories';
  description: string;
  image: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  brideName: string;
  weddingDate?: string;
  location: string;
  quote: string;
  gownType: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bride' | 'gown-details' | 'fitting' | 'studio' | 'veil';
  image: string;
  caption?: string;
  isVideo?: boolean;
}

export type ActiveModal = 
  | null 
  | 'appointment' 
  | 'collections' 
  | 'rentals' 
  | 'bespoke' 
  | 'gallery' 
  | 'about' 
  | 'contact' 
  | 'search' 
  | 'gown-detail';

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  weddingDate: string;
  serviceType: 'bridal-styling' | 'gown-rental' | 'bespoke-consultation' | 'fitting-alteration';
  budgetRange: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  silhouetteInterest: string[];
}

export type RenterType = 'individual' | 'vendor';

export interface RentalInquiryFormData {
  renterType: RenterType;
  fullName: string;
  phone: string;
  email?: string;
  weddingDate: string;
  selectedGownName: string;
  businessName?: string;
  businessType?: string;
  socialHandle?: string;
  notes?: string;
}
