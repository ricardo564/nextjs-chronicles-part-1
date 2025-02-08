"use client";

import { FC } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCheckoutStore } from "@/store/checkoutStore";
import ShippingStep from "@/blocks/checkout/shipping";
import CustomerStep from "@/blocks/checkout/customer";
import PaymentStep from "@/blocks/checkout/payment";
import ConfirmationStep from "@/blocks/checkout/confirmation";
import { ShippingMethod } from "@/types/shippingMethod";
import { Country } from "@/types/country";
import { useCountriesStore } from "@/store/countriesStore";

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
  const CHECKOUT_STEPS = ["shipping", "customer", "payment", "confirmation"];
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentStep, setCurrentStep } = useCheckoutStore();
  const countriesStore = useCountriesStore();

  function isStepValid(step: CheckoutStep) {
    return true;
  }

  useEffect(() => {
    const stepParam = searchParams.get('step') as CheckoutStep;

    if (stepParam && CHECKOUT_STEPS.includes(stepParam)) {
      setCurrentStep(stepParam);
    } else if (currentStep) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('step', currentStep);
      router.push(`/checkout?${newSearchParams.toString()}`);
    }
  }, [searchParams, currentStep, setCurrentStep, router]);

  useEffect(() => {
    if (countries.length > 0) {
      countriesStore.setCountries(countries);
    }
  }, [countries]);

  function handleStepChange(step: CheckoutStep) {
    const currentStepIndex = CHECKOUT_STEPS.indexOf(currentStep);
    const targetStepIndex = CHECKOUT_STEPS.indexOf(step);

    if (targetStepIndex > currentStepIndex && !isStepValid(currentStep)) {
      return;
    }

    setCurrentStep(step);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('step', step);
    router.push(`/checkout?${newSearchParams.toString()}`);
  }

  const renderStepHeader = () => {
    return (
      ["shipping", "customer", "payment", "confirmation"].map(
        (step, index) => {
          const stepIndex = ["shipping", "customer", "payment", "confirmation"].indexOf(currentStep);
          const isCompleted = index <= stepIndex;
          const animationDelay = `${index * 0.3}s`;

          return (
            <div key={step} className="flex w-full items-center justify-between gap-2 ml-8 md:ml-[14%]">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 duration-300 ease-in-out transform cursor-pointer hover:bg-green-600 hover:text-white ${isCompleted
                    ? "bg-green-500 text-white scale-110"
                    : "bg-white/20 text-white/60"
                  }`}
                style={{ transitionDelay: animationDelay }}
                onClick={() => handleStepChange(step as CheckoutStep)}
              >
                {index + 1}
              </div>
              {index < 3 && (
                <div className="h-1 flex-1 relative bg-white/20">
                  <div
                    className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300 ease-in-out"
                    style={{
                      width: index < stepIndex ? '100%' :
                        index === stepIndex ? '50%' : '0%',
                      opacity: index <= stepIndex ? 1 : 0,
                      transitionDelay: animationDelay
                    }}
                  />
                </div>
              )}
            </div>
          );
        }
      )
    );
  };

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
    <div className="text-white flex flex-col w-full">
      <div className="md:mx-auto flex flex-col md:items-center md:justify-center w-full md:px-4 transition-all duration-300 ease-in-out">
        <div className="text-center my-12 mt-6 w-full z-[50]">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
            <span className="text-green-500">{process}</span>
          </h1>
          <p className="text-white/70 text-sm md:text-lg">{complete}</p>
        </div>

        <div className="w-full min-w-[90vw] max-h-[1300px] md:min-w-[75vw] max-w-7xl mx-auto bg-gradient-to-r from-black/10 via-black/20 to-black/60 backdrop-blur-md rounded-[32px] p-4 md:p-8 border border-white/20 shadow-xl">
          <div className="flex justify-center items-center space-x-4 mb-8">
            {renderStepHeader()}
          </div>

          {renderStep()}
        </div>
      </div>
    </div>
  );
}
