'use client';

import type { FC } from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '@/components/forms/TextInput';
import { useCheckoutStore } from '@/store/checkoutStore';
import { getShippingSchema, ShippingFormData } from '@/schemas/checkout/shipping';
import { useAddressByCep } from '@/hooks/useAddressByCep';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

interface ShippingStepProps {
  validationMessages: Record<string, string>;
  zipCode: string;
  country: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export const ShippingStep: FC<ShippingStepProps> = ({
  validationMessages,
  zipCode,
  country,
  street,
  number,
  complement,
  neighborhood,
  city,
  state,
}) => {
  const router = useRouter();

  const {
    setShippingAddress,
    setCurrentStep,
    setSelectedShippingMethod,
    selectedShippingMethod,
    getShippingMethods,
  } = useCheckoutStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(getShippingSchema(validationMessages)),
  });

  const { isLoadingCep, fetchAddressByCep } = useAddressByCep(setValue);

  const onSubmit = (data: ShippingFormData) => {
    if (!selectedShippingMethod) return;

    setShippingAddress(data);
    setCurrentStep('customer');

    router.push(`/checkout?step=customer`);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-6">
        Shipping Information
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full min-w-full"
      >
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label={zipCode}
            name="zipCode"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.zipCode?.message}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              fetchAddressByCep(e.target.value.replace(/\D/g, ''))
            }}
            disabled={isLoadingCep}
          />
          <TextInput
            label={country}
            name="country"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.country?.message}
          />
        </div>

        <TextInput
          label={street}
          name="street"
          register={register as unknown as UseFormRegister<FieldValues>}
          error={errors.street?.message}
          disabled={isLoadingCep}
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label={number}
            name="number"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.number?.message}
          />
          <TextInput
            label={complement}
            name="complement"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.complement?.message}
          />
        </div>

        <TextInput
          label={neighborhood}
          name="neighborhood"
          register={register as unknown as UseFormRegister<FieldValues>}
          error={errors.neighborhood?.message}
          disabled={isLoadingCep}
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label={city}
            name="city"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.city?.message}
            disabled={isLoadingCep}
          />
          <TextInput
            label={state}
            name="state"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.state?.message}
            disabled={isLoadingCep}
          />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>
          <div className="space-y-4">
            {getShippingMethods().map((method) => (
              <label
                key={method.id}
                className={`flex items-center justify-between p-4 border rounded-lg w-full z-[2] px-4 py-3 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ease-in-out cursor-pointer ${selectedShippingMethod?.id === method.id
                  ? 'border-green-500 bg-green-50 !text-black'
                  : 'border-gray-200'
                  }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={method.id}
                    checked={selectedShippingMethod?.id === method.id}
                    onChange={() => setSelectedShippingMethod(method)}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium">
                      {method.name}
                    </p>
                    <p className="text-sm text-gray-100">
                      {method.time}
                    </p>
                  </div>
                </div>
                <span className="font-medium">
                  ${method.price}
                </span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-6 md:w-auto place-self-start flex items-center justify-center px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-center disabled:cursor-not-allowed"
        >
          Continue to Customer Information
        </Button>
      </form>
    </div>
  );
};
