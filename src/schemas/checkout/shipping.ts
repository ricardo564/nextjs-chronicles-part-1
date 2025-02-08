import { z } from 'zod'

export const getShippingSchema = (messages: Record<string, string>) => z.object({
  street: z.string()
    .min(2, messages['street.min'])
    .max(50, messages['street.max']),
  number: z.string()
    .min(2, messages['number.min'])
    .max(50, messages['number.max']),
  complement: z.string()
    .min(2, messages['complement.min'])
    .max(50, messages['complement.max']),
  neighborhood: z.string()
    .min(2, messages['neighborhood.min'])
    .max(50, messages['neighborhood.max']),
  city: z.string()
    .min(2, messages['city.min'])
    .max(50, messages['city.max']),
  state: z.string()
    .min(2, messages['state.min'])
    .max(50, messages['state.max']),
  zipCode: z.string()
    .min(2, messages['zipCode.min'])
    .max(50, messages['zipCode.max']),
  country: z.string()
    .min(2, messages['country.min'])
    .max(50, messages['country.max'])
})

export type ShippingFormData = z.infer<ReturnType<typeof getShippingSchema>>
