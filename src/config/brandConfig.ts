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
    name: 'Okiemute Beauty',
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
      handle: '@beajaycouture_bridal',
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
      handle: '@beajaycouture_bridal',
      url: 'https://www.tiktok.com/@beajaycouture_bridal',
      label: 'TikTok',
      isClickable: true
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

/**
 * Official Bridal Consultation Policy & Fee Configuration
 * Confirmed by Owner: ₦15,000 fixed fee, non-refundable, deductible upon gown booking.
 */
export interface ConsultationPolicyConfig {
  readonly feeNGN: number;
  readonly feeNGNFormatted: string;
  readonly feeUSDC: number;
  readonly feeUSDCFormatted: string;
  readonly isRefundable: boolean;
  readonly deductibleAmountNGN: number;
  readonly deductibleAmountFormatted: string;
  readonly duration: string;
  readonly formats: readonly string[];
  readonly coverage: readonly string[];
  readonly terms: readonly string[];
  readonly journeySteps: readonly {
    readonly step: number;
    readonly title: string;
    readonly summary: string;
  }[];
}

export const BRIDAL_CONSULTATION_POLICY: ConsultationPolicyConfig = {
  feeNGN: 15000,
  feeNGNFormatted: '₦15,000',
  feeUSDC: 20,
  feeUSDCFormatted: '$20 USDC',
  isRefundable: false,
  deductibleAmountNGN: 10000,
  deductibleAmountFormatted: '₦10,000',
  duration: '45 minutes – 1 hour',
  formats: ['Physical Consultation (Enugu)', 'Virtual Consultation'],
  coverage: [
    'Bridal style assessment',
    'Body shape & gown recommendation',
    'Budget planning guidance',
    'Fabric & design selection advice',
    'Access to available bridal packages'
  ],
  terms: [
    'Consultation fee is non-refundable.',
    'Rescheduling must be requested 24–48 hours before the appointment.',
    'No-shows require a new booking fee.',
    'Consultation is required before proceeding with gown booking/customization.',
    'If the client proceeds with a gown or bridal package, ₦10,000 from the consultation fee is deducted from the total payment.'
  ],
  journeySteps: [
    { step: 1, title: 'Consultation Details', summary: 'Select appointment type and enter bridal preferences' },
    { step: 2, title: '₦15,000 Consultation Fee', summary: 'Non-refundable consultation fee ($20 USDC for international clients)' },
    { step: 3, title: 'Payment Required', summary: 'Consultation payment required prior to final scheduling' },
    { step: 4, title: 'Schedule Arrangement', summary: 'Preferred date & time confirmed after payment arrangement with BEAJAY' },
    { step: 5, title: 'Gown Deduction Benefit', summary: '₦10,000 deducted upon proceeding with gown or bridal package' }
  ]
} as const;

export type WhatsAppEnquiryContext = 
  | { type: 'general'; notes?: string }
  | { type: 'rental'; gownName?: string; gownCode?: string }
  | { 
      type: 'appointment'; 
      serviceName?: string; 
      clientName?: string; 
      isConsultation?: boolean; 
      preferredDate?: string; 
      preferredTime?: string;
      format?: string;
      currency?: 'NGN' | 'USDC';
      interestedGown?: string;
    }
  | { type: 'gown'; gownName: string; gownCode?: string }
  | { type: 'academy' };

/**
 * Builds standard compliant WhatsApp click-to-chat URL with owner-approved messaging.
 */
export function buildWhatsAppUrl(context?: WhatsAppEnquiryContext): string {
  let message = 'Hello BEAJAY COUTURE BRIDAL, I would like to make an enquiry.';
  
  if (context) {
    if (context.type === 'academy') {
      message = 'Hello BEAJAY COUTURE BRIDAL, I would like to know more about BEAJAY Academy and future training opportunities.';
    } else if (context.type === 'general' && context.notes) {
      message = `Hello BEAJAY COUTURE BRIDAL, I would like to make an enquiry:\n\n${context.notes}`;
    } else if (context.type === 'rental') {
      if (context.gownName) {
        const identifier = context.gownCode 
          ? `${context.gownName} (${context.gownCode})` 
          : context.gownName;
        message = `Hello BEAJAY COUTURE BRIDAL, I would like to enquire about rental availability for ${identifier}.`;
      } else {
        message = 'Hello BEAJAY COUTURE BRIDAL, I would like to enquire about rental availability.';
      }
    } else if (context.type === 'appointment') {
      if (context.isConsultation) {
        const clientLine = context.clientName ? `\n• Client: ${context.clientName}` : '';
        const formatLabel = context.format === 'Virtual'
          ? 'Virtual Consultation'
          : (context.format === 'Physical' ? 'Physical Consultation (Enugu)' : (context.format || ''));
        const formatLine = formatLabel ? `\n• Format: ${formatLabel}` : '';
        const dateLine = context.preferredDate ? `\n• Preferred Date: ${context.preferredDate}` : '';
        const timeLine = context.preferredTime ? `\n• Preferred Time: ${context.preferredTime}` : '';
        const gownLine = context.interestedGown ? `\n• Interested Gown: ${context.interestedGown}` : '';
        const feeLine = context.currency === 'USDC'
          ? '\n• Fee Acknowledgement: $20 USDC consultation option'
          : '\n• Fee Acknowledgement: ₦15,000 consultation fee (Non-refundable)';

        message = `Hello BEAJAY COUTURE BRIDAL, I would like to continue my Bridal Consultation booking.${clientLine}${formatLine}${dateLine}${timeLine}${gownLine}${feeLine}\n\nPlease share payment details to arrange and confirm my consultation schedule.`;
      } else if (context.serviceName) {
        message = `Hello BEAJAY COUTURE BRIDAL, I would like to enquire about booking a ${context.serviceName}.`;
      } else {
        message = 'Hello BEAJAY COUTURE BRIDAL, I would like to enquire about booking an appointment.';
      }
    } else if (context.type === 'gown') {
      const identifier = context.gownCode 
        ? `${context.gownName} (${context.gownCode})` 
        : context.gownName;
      message = `Hello BEAJAY COUTURE BRIDAL, I would like to enquire about ${identifier}.`;
    }
  }
  
  return `https://wa.me/2349117028264?text=${encodeURIComponent(message)}`;
}
