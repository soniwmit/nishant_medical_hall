export type PageTab = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  features: string[];
  popular?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  itemCount: number;
  featuredProducts: string[];
  gradient: string;
}

export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  composition: string;
  price: string;
  mrp: string;
  discount: string;
  packaging: string;
  requiresPrescription: boolean;
  inStock: boolean;
  popular?: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Medicines' | 'Orders' | 'Store';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves' | 'Equipment' | 'Products' | 'Staff';
  url: string;
  description: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  category: string;
  address: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  formattedPhone: string;
  whatsapp: string;
  formattedWhatsapp: string;
  email: string;
  googleMapEmbedUrl: string;
  googleMapShareUrl: string;
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFileName?: string;
  prescriptionPreviewUrl?: string;
  preferredTime: string;
  message: string;
}
