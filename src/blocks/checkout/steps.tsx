"use client";

import { FC } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCheckoutStore } from "@/store/checkoutStore";
import { ShippingStep } from "@/blocks/checkout/shipping";
import { CustomerStep } from "@/blocks/checkout/customer";
import { PaymentStep } from "@/blocks/checkout/payment";
import { ConfirmationStep } from "@/blocks/checkout/confirmation";
import { ShippingMethod } from "@/types/shippingMethod";
import { Country } from "@/types/country";

interface CheckoutStepProps {
  shippingValidationMessages: Record<string, string>;
  shippingMethods: ShippingMethod[];
  countries: Country[];
  zipCode: string;
  country: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  title: string;
  process: string;
  complete: string;
}

type CheckoutStep = "shipping" | "customer" | "payment" | "confirmation";

export const CheckoutSteps: FC<CheckoutStepProps> = ({
  shippingMethods,
  shippingValidationMessages,
  countries,
  zipCode,
  country,
  street,
  number,
  complement,
  neighborhood,
  city,
  state,
  title,
  process,
  complete
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentStep, setCurrentStep } = useCheckoutStore();

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
            shippingMethods={shippingMethods}
            countries={countries}
            zipCode={zipCode}
            country={country}
            street={street}
            number={number}
            complement={complement}
            neighborhood={neighborhood}
            city={city}
            state={state}
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
            countries={countries}
            validationMessages={shippingValidationMessages}
            shippingMethods={shippingMethods}
            zipCode={zipCode}
            country={country}
            street={street}
            number={number}
            complement={complement}
            neighborhood={neighborhood}
            city={city}
            state={state}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col w-full">
      <div className="mx-auto flex flex-col items-center justify-center w-full px-4 transition-all duration-300 ease-in-out">
        <div className="text-center my-12 mt-6 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">
            {title}
            <span className="text-green-500">{process}</span>
          </h1>
          <p className="text-white/70 text-lg">{complete}</p>
        </div>

        <div className="w-full min-w-[75vw] mx-auto bg-gradient-to-r from-black/10 via-black/20 to-black/60 backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-xl">
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
  );
}
