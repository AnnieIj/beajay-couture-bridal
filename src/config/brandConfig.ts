/**
 * Centralized Brand & Contact Configuration for BEAJAY COUTURE BRIDAL
 * Owner-confirmed brand facts, contact points, and contextual WhatsApp utilities.
 */

export interface SocialPlatformConfig {
  readonly label: string;
  readonly handle: string;
  readonly url: string | null;
  readonly isClickable: boolean;
}

export const BRAND_CONTACT = {
  brandName: 'BEAJAY COUTURE BRIDAL',
  tagline: 'Crafted in Nigeria. Made for Brides Everywhere.',
  location: 'Enugu, Nigeria',
  logo: {
    src: '/media/brand/beajay-logo.png',
    originalSrc: '/media/brand/beajay-logo-original.png',
    alt: 'BEAJAY COUTURE BRIDAL',
    aspectRatio: '815 / 1080',
    width: 815,
    height: 1080,
  },
  founder: {
    name: 'Beauty Okiemute',
    title: 'Founder & Creative Director'
  },
  whatsapp: {
    localDisplay: '09117028264',
    internationalDisplay: '+234 911 702 8264',
    numericNumber: '2349117028264',
    directUrl: 'https://wa.me/2349117028264'
  },
  socials: {
    instagram: {
      handle: '@Beajaycouture_bridal',
      url: 'https://instagram.com/beajaycouture_bridal',
      label: 'Instagram',
      isClickable: true
    },
    facebook: {
      handle: 'Beajaycouture Bridal',
      url: 'https://www.facebook.com/share/1GqdFF9iQE/',
      label: 'Facebook',
      isClickable: true
    },
    tiktok: {
      handle: '@Beajaycouture_bridal',
      // Profile URL has not yet been supplied by the owner.
      // Once provided, replace null with the exact URL to activate the link.
      url: null as string | null,
      label: 'TikTok',
      isClickable: false
    },
    global: {
      handle: '@beajayglobal',
      // Profile URL has not yet been supplied by the owner.
      // Once provided, replace null with the exact URL to activate the link.
      url: null as string | null,
      label: 'Global',
      isClickable: false
    }
  }
} as const;

export type WhatsAppEnquiryContext = 
  | { type: 'general' }
  | { type: 'rental'; gownName?: string; gownCode?: string }
  | { type: 'appointment'; serviceName?: string }
  | { type: 'gown'; gownName: string; gownCode?: string };

/**
 * Builds standard compliant WhatsApp click-to-chat URL with owner-approved messaging.
 */
export function buildWhatsAppUrl(context?: WhatsAppEnquiryContext): string {
  let message = 'Hello BEAJAY COUTURE BRIDAL, I would like to make an enquiry.';
  
  if (context) {
    if (context.type === 'rental') {
      if (context.gownName) {
        const identifier = context.gownCode 
          ? `${context.gownName} (${context.gownCode})` 
          : context.gownName;
        message = `Hello BEAJAY COUTURE BRIDAL, I would like to enquire about rental availability for ${identifier}.`;
      } else {
        message = 'Hello BEAJAY COUTURE BRIDAL, I would like to enquire about rental availability.';
      }
    } else if (context.type === 'appointment') {
      message = 'Hello BEAJAY COUTURE BRIDAL, I would like to enquire about booking an appointment.';
    } else if (context.type === 'gown') {
      const identifier = context.gownCode 
        ? `${context.gownName} (${context.gownCode})` 
        : context.gownName;
      message = `Hello BEAJAY COUTURE BRIDAL, I would like to enquire about ${identifier}.`;
    }
  }
  
  return `https://wa.me/2349117028264?text=${encodeURIComponent(message)}`;
}
