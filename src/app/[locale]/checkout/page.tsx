import DefaultLayout from "@/layouts/DefaultLayout";
import { useTranslations } from "next-intl";
import { ShippingMethod } from "@/types/shippingMethod";
import { CheckoutSteps } from "@/blocks/checkout/steps";

export default function CheckoutPage() {
  const t = useTranslations('checkout')

  const shippingValidationMessages = {
    street: t('shipping.street.required'),
    number: t('shipping.number.required'),
    complement: t('shipping.complement.required'),
    neighborhood: t('shipping.neighborhood.required'),
    city: t('shipping.city.required'),
    state: t('shipping.state.required'),
    zipCode: t('shipping.zipCode.required'),
    country: t('shipping.country.required'),
  };

  const shippingMethods: ShippingMethod[] = [
    {
      id: 'standard',
      name: t('shipping.methods.standard'),
      price: 100,
      time: `5-7 ${t('shipping.methods.days')}`
    },
    {
      id: 'express',
      name: t('shipping.methods.express'),
      price: 250,
      time: `2-3 ${t('shipping.methods.days')}`
    },
    {
      id: 'overnight',
      name: t('shipping.methods.overnight'),
      price: 500,
      time: `1 ${t('shipping.methods.day')}`
    }
  ]

  return (
    <DefaultLayout>
      <CheckoutSteps
        shippingMethods={shippingMethods}
        shippingValidationMessages={shippingValidationMessages}
        title={t('title')}
        process={t('process')}
        complete={t('complete')}
        zipCode={t('shipping.zipCode.label')}
        country={t('shipping.country.label')}
        street={t('shipping.street.label')}
        number={t('shipping.number.label')}
        complement={t('shipping.complement.label')}
        neighborhood={t('shipping.neighborhood.label')}
        city={t('shipping.city.label')}
        state={t('shipping.state.label')}
      />
    </DefaultLayout>
  );
}
