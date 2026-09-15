export type GownCategory = 'ball-gown' | 'mermaid' | 'a-line' | 'sheath' | 'reception' | 'veils-accessories';

export type GownAvailability = 'available' | 'reserved' | 'unavailable' | 'coming-soon' | 'unknown';

export interface GownItem {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: GownCategory;
  categoryLabel: string;
  silhouette: string;
  description: string;
  images: string[];
  image: string; // Primary image for compatibility
  gallery?: string[]; // Supporting gallery for compatibility
  sizes?: string[];
  fabric?: string;
  details?: string;
  embellishments?: string; // Compatibility
  trainStyle?: string;
  trainLength?: string; // Compatibility
  rentalEligible: boolean;
  isAvailableForRent?: boolean; // Compatibility
  availability: GownAvailability;
  featured?: boolean;
  isFeatured?: boolean; // Compatibility
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

export type GalleryCategory =
  | 'all'
  | 'bridal-looks'
  | 'couture-details'
  | 'veils-accessories'
  | 'behind-the-craft'
  | 'bride'
  | 'gown-details'
  | 'fitting'
  | 'studio'
  | 'veil';

export interface GalleryItem {
  id: string;
  title: string;
  alt?: string;
  category: GalleryCategory;
  categoryLabel?: string;
  image: string;
  caption?: string;
  isVideo?: boolean;
  videoUrl?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
  aspectRatio?: string;
  objectPosition?: string;
}

export type ActiveModal = 
  | null 
  | 'appointment' 
  | 'collections' 
  | 'rentals' 
  | 'gallery' 
  | 'about' 
  | 'contact' 
  | 'search' 
  | 'gown-detail';

export type AppointmentServiceType = 
  | 'bridal-consultation'
  | 'gown-viewing'
  | 'rental-fitting'
  | 'fitting-alteration';

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  weddingDate: string;
  serviceType: AppointmentServiceType;
  budgetRange: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  silhouetteInterest: string[];
}

export type RenterType = 'individual' | 'vendor';

export interface RentalInquiryFormData {
  renterType: RenterType;
  selectedGownName: string;
  selectedGownId?: string;
  selectedGownCode?: string;
  // Event & Dates
  eventDate: string;
  collectionDate: string;
  returnDate: string;
  weddingDate?: string; // Backwards compatibility
  // Individual / Bride details
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  // Bridal Vendor / Business details
  businessName?: string;
  contactPerson?: string;
  businessType?: string;
  socialHandle?: string;
  // Additional information
  notes?: string;
}

export type ContactEnquiryType = 
  | 'Gown Enquiry'
  | 'Rental Availability'
  | 'Fitting / Appointment'
  | 'General Enquiry';

export interface GeneralContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  enquiryType: ContactEnquiryType;
  message: string;
}
