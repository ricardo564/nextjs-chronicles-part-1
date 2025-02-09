import { z } from 'zod'

export const getCustomerSchema = (messages: Record<string, string>) => z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, messages['fullName.min']).max(50, messages['fullName.max']),
    email: z.string().email(messages['email.invalid']),
    phoneNumber: z.string().min(2, messages['phoneNumber.min']).max(50, messages['phoneNumber.max']),
    dateOfBirth: z.string(),
    preferredLanguage: z.string(),
  }),

  brazilianTaxInfo: z.object({
    taxIdType: z.string(),
    taxIdNumber: z.string().min(1, messages['taxId.min']).max(18, messages['taxId.max']),
    stateRegistration: z.string().optional(),
  }).optional(),

  account: z.object({
    createAccount: z.boolean(),
    password: z.string().optional(),
    acceptedTerms: z.boolean().optional(),
  }),

  preferences: z.object({
    newsletter: z.boolean(),
    marketing: z.boolean(),
  }),
})

export type CustomerFormData = z.infer<ReturnType<typeof getCustomerSchema>>
