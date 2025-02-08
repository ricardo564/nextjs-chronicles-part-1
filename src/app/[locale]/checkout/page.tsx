import DefaultLayout from "@/layouts/DefaultLayout";
import { useTranslations } from "next-intl";
import { ShippingMethod } from "@/types/shippingMethod";
import { CheckoutSteps } from "@/blocks/checkout/steps";
import { CountriesService } from "@/services/countries.service";
import { Suspense } from "react";

export default function CheckoutPage() {
  const t = useTranslations('checkout');

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
  ];

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

  return (
    <DefaultLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutContent
          shippingMethods={shippingMethods}
          shippingValidationMessages={shippingValidationMessages}
          t={t}
        />
      </Suspense>
    </DefaultLayout>
  );
}

async function CheckoutContent({
  shippingMethods,
  shippingValidationMessages,
  t
}: {
  shippingMethods: ShippingMethod[],
  shippingValidationMessages: Record<string, string>,
  t: any
}) {
  const countriesService = new CountriesService();
  const countries = await countriesService.getAllCountries();

  return (
    <CheckoutSteps
      shippingMethods={shippingMethods}
      shippingValidationMessages={shippingValidationMessages}
      countries={countries}
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
  );
}
