export interface EnquiryData {
  fullName: string;
  phoneNumber: string;
  requirement: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryData, string>>;
}

export function validateEnquiry(data: EnquiryData): ValidationResult {
  const errors: Partial<Record<keyof EnquiryData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const cleanPhone = data.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
  }

  if (!data.requirement || data.requirement.trim().length < 5) {
    errors.requirement = 'Please describe your property interest or corridor of interest.';
  }

  if (!data.consent) {
    errors.consent = 'Please agree to receive site enquiry info.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppLink(data: EnquiryData, targetNumber: string = '918919635055'): string {
  const message = `Hello IRA Promoters,\n\nI am interested in acquiring an architectural plot / land parcel in Visakhapatnam.\n\n*Name:* ${data.fullName.trim()}\n*Phone:* ${data.phoneNumber.trim()}\n*Requirement:* ${data.requirement.trim()}\n\nPlease share the layout brochure and statutory document packet.`;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
}
