"use client";

import { useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Link from "@/components/Link";
import { TextInput } from "@/components/forms/TextInput";
import { RadioGroup } from "@/components/forms/RadioGroup";
import { usePaymentStore } from "@/store/paymentStore";
import { PaymentInformation } from "@/types/payment";
import { getPaymentSchema } from "@/schemas/checkout/payment";
import MaskedInput from "@/components/forms/MaskedInput";

const PaymentStep = () => {
  const t = useTranslations('checkout');
  const [selectedMethod, setSelectedMethod] = useState<string>("creditCard");
  const { paymentInfo, setPaymentInfo } = usePaymentStore();

  const paymentValidationMessages = {
    number: t('payment.creditCard.number.required'),
    name: t('payment.creditCard.name.required'),
    expirationDate: t('payment.creditCard.expirationDate.required'),
    cvv: t('payment.creditCard.cvv.required'),
    boletoNumber: t('payment.boleto.number.required'),
    paymentInfoRequired: t('payment.information.required'),
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentInformation>({
    resolver: zodResolver(getPaymentSchema(paymentValidationMessages)),
    defaultValues: paymentInfo,
    mode: "onChange",
  });

  const paymentMethods = [
    { value: "creditCard", label: t('payment.methods.creditCard') },
    { value: "boleto", label: t('payment.methods.boleto') },
    { value: "pix", label: t('payment.methods.pix') },
    { value: "bitcoin", label: t('payment.methods.bitcoin') },
    { value: "paypal", label: t('payment.methods.paypal') },
  ];

  const onSubmit = async (data: PaymentInformation) => {
    try {
      setPaymentInfo(data);

      console.log("paymentInfo:", paymentInfo);
    } catch (error) {
      console.error("Failed to process payment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <section className="space-y-4">
        <RadioGroup
          name="paymentMethod"
          options={paymentMethods}
          value={selectedMethod}
          onChange={(value) => setSelectedMethod(value)}
          register={register as unknown as UseFormRegister<FieldValues>}
        />

        {selectedMethod === "creditCard" && (
          <div className="flex flex-col gap-4">
            <MaskedInput
              label={t('payment.creditCard.number.label')}
              name="creditCard.number"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.creditCard?.number?.message}
              mask="creditCard"
            />

            <TextInput
              label={t('payment.creditCard.name.label')}
              name="creditCard.name"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.creditCard?.name?.message}
            />

            <div className="grid grid-cols-2 gap-4">
              <MaskedInput
                label={t('payment.creditCard.expirationDate.label')}
                name="creditCard.expirationDate"
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.creditCard?.expirationDate?.message}
                mask="expirationDate"
              />

              <MaskedInput
                label={t('payment.creditCard.cvv.label')}
                name="creditCard.cvv"
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.creditCard?.cvv?.message}
                mask="cvv"
              />
            </div>
          </div>
        )}

        {selectedMethod === "boleto" && (
          <div className="p-4 bg-primary/70 rounded-lg">
            <p className="text-center">{t('payment.boleto.description')}</p>
          </div>
        )}

        {selectedMethod === "pix" && (
          <div className="p-4 bg-primary/70 rounded-lg">
            <p className="text-center">{t('payment.pix.description')}</p>
          </div>
        )}

        {selectedMethod === "bitcoin" && (
          <div className="p-4 bg-primary/70 rounded-lg">
            <p className="text-center">{t('payment.bitcoin.description')}</p>
          </div>
        )}

        {selectedMethod === "paypal" && (
          <div className="p-4 bg-primary/70 rounded-lg">
            <p className="text-center">{t('payment.paypal.description')}</p>
          </div>
        )}
      </section>

      <div className="grid grid-cols-2 gap-4 items-center justify-between">
        <Link href="/checkout?step=customer">
          <Button
            type="button"
            loading={isSubmitting}
            label={t('payment.back.label')}
            className="w-auto"
          />
        </Link>

        <Button
          type="submit"
          loading={isSubmitting}
          label={t('payment.next.label')}
          className="w-auto ml-auto"
        />
      </div>
    </form>
  );
};

export default PaymentStep;
