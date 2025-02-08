export interface CustomerInformation {
  personalInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
    preferredLanguage: string;
  };

  address: {
    country: string;
    street: string;
    unit?: string;
    city: string;
    stateRegion: string;
    postalCode: string;
    deliveryInstructions?: string;
  };

  brazilianTaxInfo?: {
    taxIdType: 'CPF' | 'CNPJ';
    taxIdNumber: string;
    stateRegistration?: string;
  };

  account?: {
    createAccount: boolean;
    password?: string;
    acceptedTerms: boolean;
  };

  preferences: {
    newsletter: boolean;
    marketing: boolean;
  };
}
