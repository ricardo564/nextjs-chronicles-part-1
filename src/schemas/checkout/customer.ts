import { z } from 'zod'

export const getCustomerSchema = (messages: Record<string, string>) => z.object({
  fullName: z.string().min(2, messages['fullName.min']).max(50, messages['fullName.max']),
  email: z.string().email(messages['email.invalid']),
  phoneNumber: z.string().min(2, messages['phoneNumber.min']).max(50, messages['phoneNumber.max']),
  dateOfBirth: z.date(),
  preferredLanguage: z.string(),
  taxId: z.string().min(1, messages['taxId.min']).max(18, messages['taxId.max']),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string().min(1, messages['zipCode.min']).max(18, messages['zipCode.max']),
  street: z.string().min(1, messages['street.min']).max(50, messages['street.max']),
  number: z.string().min(1, messages['number.min']).max(18, messages['number.max']),
  complement: z.string().min(1, messages['complement.min']).max(50, messages['complement.max']),
  neighborhood: z.string().min(1, messages['neighborhood.min']).max(50, messages['neighborhood.max']),
  addressType: z.string(),
})

