import DefaultLayout from "@/layouts/DefaultLayout";
import { useTranslations } from "next-intl";
import { ShippingMethod } from "@/types/shippingMethod";
import { CheckoutSteps } from "@/blocks/checkout/steps";
import { CountriesService } from "@/services/countries.service";
import { Suspense } from "react";
import RandomBackground from "@/blocks/randomBackground";
import { Language } from "@/types/language";
import { mockCountries } from "@/static/mockCountries";
import Loading from "@/components/Loading";

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

  const customerValidationMessages = {
    'fullName.min': t('customer.fullName.min'),
    'fullName.max': t('customer.fullName.max'),
    'email.invalid': t('customer.email.invalid'),
    'phoneNumber.min': t('customer.phoneNumber.min'),
    'phoneNumber.max': t('customer.phoneNumber.max'),
    'dateOfBirth.required': t('customer.dateOfBirth.required'),
    'preferredLanguage.required': t('customer.preferredLanguage.required'),
    'taxId.min': t('customer.taxId.min'),
    'taxId.max': t('customer.taxId.max'),
    'password.required': t('customer.password.required'),
    'terms.required': t('customer.acceptedTerms.required'),
  };

  return (
    <DefaultLayout>
      <Suspense fallback={<Loading />}>
        <CheckoutContent
          shippingMethods={shippingMethods}
          shippingValidationMessages={shippingValidationMessages}
          customerValidationMessages={customerValidationMessages}
          t={t}
        />
      </Suspense>
    </DefaultLayout>
  );
}

async function CheckoutContent({
  shippingMethods,
  shippingValidationMessages,
  customerValidationMessages,
  t

}: {
  shippingMethods: ShippingMethod[],
  shippingValidationMessages: Record<string, string>,
  customerValidationMessages: Record<string, string>,
  t: (key: string) => string
}) {
  const countriesService = new CountriesService();
  const countries = await countriesService.getAllCountries()
    .then((countries) => countries.filter((country) => country.languages))
    .catch((error) => {
      console.error('Error fetching countries:', error);

      return mockCountries
    });

  const languages: Language[] = []

  countries.forEach(country => {
    if (country.languages) {
      Object.entries(country.languages).forEach(([code, name]) => {
        if (!languages.some(lang => lang.id === code)) {
          languages.push({
            id: code,
            name: name as string
          });
        }
      });
    }
  });

  return (
    <>
      <RandomBackground />

      <CheckoutSteps
        shippingMethods={shippingMethods}
        shippingValidationMessages={shippingValidationMessages}
        customerValidationMessages={customerValidationMessages}
        languages={languages}
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
        fullNameLabel={t('customer.fullName.label')}
        emailLabel={t('customer.email.label')}
        phoneNumberLabel={t('customer.phoneNumber.label')}
        dateOfBirthLabel={t('customer.dateOfBirth.label')}
        preferredLanguageLabel={t('customer.preferredLanguage.label')}
        taxIdTypeLabel={t('customer.taxId.label')}
        taxIdNumberLabel={t('customer.taxIdNumber.label')}
        stateRegistrationLabel={t('customer.stateRegistration.label')}
        createAccountLabel={t('customer.createAccount.label')}
        passwordLabel={t('customer.password.label')}
        acceptedTermsLabel={t('customer.acceptedTerms.label')}
        subscribeToNewsletterLabel={t('customer.subscribeToNewsletter.label')}
        receiveMarketingEmailsLabel={t('customer.receiveMarketingEmails.label')}
        backLabel={t('customer.back.label')}
        continueToPaymentLabel={t('customer.continueToPayment.label')}
        createAccount={t('customer.createAccount.label')}
        password={t('customer.password.label')}
        acceptedTerms={t('customer.acceptedTerms.label')}
        subscribeToNewsletter={t('customer.subscribeToNewsletter.label')}
        receiveMarketingEmails={t('customer.receiveMarketingEmails.label')}
        back={t('customer.back.label')}
        continueToPayment={t('customer.continueToPayment.label')}
      />
    </>
  );
}
