"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useCheckoutStore } from "@/store/checkoutStore";
import { ShippingStep } from "@/blocks/checkout/shipping";
import { CustomerStep } from "@/blocks/checkout/customer";
import { PaymentStep } from "@/blocks/checkout/payment";
import { ConfirmationStep } from "@/blocks/checkout/confirmation";
import { useTranslations } from "next-intl";

type CheckoutStep = "shipping" | "customer" | "payment" | "confirmation";

export default function CheckoutPage() {
  const router = useRouter();
  const t = useTranslations('checkout')
  const searchParams = useSearchParams();
  const { currentStep, setCurrentStep } = useCheckoutStore();


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

  useEffect(() => {
    const stepParam = searchParams.get('step') as CheckoutStep;

    if (stepParam && ["shipping", "customer", "payment", "confirmation"].includes(stepParam)) {
      setCurrentStep(stepParam);
    } else if (currentStep) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('step', currentStep);
      router.push(`/checkout?${newSearchParams.toString()}`);
    }
  }, [searchParams, currentStep, setCurrentStep, router]);

  const renderStep = () => {
    switch (currentStep) {
      case "shipping":
        return (
          <ShippingStep
            validationMessages={shippingValidationMessages}
          />
        );
      case "customer":
        return <CustomerStep />;
      case "payment":
        return <PaymentStep />;
      case "confirmation":
        return <ConfirmationStep />;
      default:
        return (
          <ShippingStep
            validationMessages={shippingValidationMessages}
          />
        );
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen text-white flex flex-col w-full">
        <div className="mx-auto flex flex-col items-center justify-center w-full">
          <div className="text-center my-12 mt-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              Checkout <span className="text-green-500">Process</span>
            </h1>
            <p className="text-white/70 text-lg">
              Complete your purchase by following the steps below
            </p>
          </div>

          <div className="max-w-3xl w-full mx-auto bg-gradient-to-r from-black/10 via-black/20 to-black/60 backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-xl">
            <div className="flex justify-center items-center space-x-4 mb-8">
              {["shipping", "customer", "payment", "confirmation"].map(
                (step, index) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step
                        ? "bg-green-500 text-white"
                        : "bg-white/20 text-white/60"
                        }`}
                    >
                      {index + 1}
                    </div>
                    {index < 3 && <div className="w-20 h-1 mx-2 bg-white/20" />}
                  </div>
                )
              )}
            </div>

            {renderStep()}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
