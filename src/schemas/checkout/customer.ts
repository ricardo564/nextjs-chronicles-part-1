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
    taxIdType: z.enum(['CPF', 'CNPJ']),
    taxIdNumber: z.string()
      .transform(val => val.replace(/\D/g, ""))
      .refine(
        (val) => {
          if (!val) return false;
          const length = val.length;
          return length === 11 || length === 14;
        },
        { message: messages.invalidTaxId || "Invalid Tax ID" }
      ),
    stateRegistration: z.string().optional(),
  }).optional(),

  account: z.object({
    createAccount: z.boolean(),
    password: z.string()
      .optional()
      .superRefine((pass, ctx) => {
        if (!pass) return;

        const checks = [
          { condition: pass.length >= 8, message: messages['password.tooShort'] },
          { condition: /[A-Z]/.test(pass), message: messages['password.upperCase'] },
          { condition: /[a-z]/.test(pass), message: messages['password.lowerCase'] },
          { condition: /[0-9]/.test(pass), message: messages['password.number'] },
          { condition: /[!@#$%^&*]/.test(pass), message: messages['password.special'] }
        ];

        checks.forEach(check => {
          if (!check.condition) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: check.message
            });
          }
        });
      }),
    acceptedTerms: z.boolean()
      .optional()
      .superRefine((accepted, ctx) => {
        const createAccount = (ctx as unknown as { parent: { createAccount: boolean } }).parent.createAccount;
        if (createAccount && !accepted) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: messages['terms.required']
          });
        }
      }),
  }),

  preferences: z.object({
    newsletter: z.boolean(),
    marketing: z.boolean(),
  }),
})

export type CustomerFormData = z.infer<ReturnType<typeof getCustomerSchema>>
