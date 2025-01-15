import { z } from 'zod'

export const getContactSchema = (messages: Record<string, string>) => z.object({
  firstName: z.string()
    .min(2, messages['firstName.min'])
    .max(50, messages['firstName.max']),
  lastName: z.string()
    .min(2, messages['lastName.min'])
    .max(50, messages['lastName.max']),
  email: z.string()
    .email(messages['email.invalid']),
  phoneNumber: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, messages['phoneNumber.invalid']),
  message: z.string()
    .min(10, messages['message.min'])
    .max(500, messages['message.max'])
})

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>
