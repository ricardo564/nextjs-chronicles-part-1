import { z } from 'zod';

export const getPaymentSchema = (validationMessages: Record<string, string>) => {
  const creditCardSchema = z.object({
    number: z.string().min(1, validationMessages.number),
    name: z.string().min(1, validationMessages.name),
    expirationDate: z.string().min(1, validationMessages.expirationDate),
    cvv: z.string().min(1, validationMessages.cvv),
  });

  return z
    .object({
      paymentMethod: z.enum(['creditCard', 'boleto', 'pix', 'bitcoin', 'paypal']),
      creditCard: creditCardSchema.optional(),
    })
    .refine(
      (data) => {
        if (data.paymentMethod === 'creditCard') {
          return !!data.creditCard;
        }

        return true;
      },
      {
        message: validationMessages.paymentInfoRequired,
        path: ['paymentMethod'],
      }
    );
};

export type PaymentFormData = z.infer<ReturnType<typeof getPaymentSchema>>;
