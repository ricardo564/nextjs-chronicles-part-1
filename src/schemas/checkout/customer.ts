import { z } from 'zod'

export const getCustomerSchema = (validationMessages: Record<string, string>) => {
  const accountSchema = z.object({
    createAccount: z.boolean().default(false),
    password: z.string().optional(),
    acceptedTerms: z.boolean().default(false),
  }).refine((data) => {
    if (data.createAccount) {
      return !!data.password && data.password.length >= 8;
    }
    return true;
  }, {
    message: validationMessages.passwordTooShort,
    path: ["password"]
  }).refine((data) => {
    if (data.createAccount) {
      return data.acceptedTerms;
    }
    return true;
  }, {
    message: validationMessages.termsRequired,
    path: ["acceptedTerms"]
  });

  return z.object({
    personalInfo: z.object({
      fullName: z.string().min(1, validationMessages.required),
      email: z.string().email(validationMessages.invalidEmail),
      phoneNumber: z.string().min(1, validationMessages.required),
      dateOfBirth: z.string().min(1, validationMessages.required),
      preferredLanguage: z.string().min(1, validationMessages.required),
    }),
    account: accountSchema,
    preferences: z.object({
      newsletter: z.boolean().default(false),
      marketing: z.boolean().default(false),
    }),
    brazilianTaxInfo: z.object({
      taxIdType: z.string().optional(),
      taxIdNumber: z.string().optional(),
      stateRegistration: z.string().optional(),
    }).optional(),
  });
};

export type CustomerFormData = z.infer<ReturnType<typeof getCustomerSchema>>
