"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/forms/TextInput";
import { useCheckoutStore } from "@/store/checkoutStore";
import {
  getShippingSchema,
  ShippingFormData,
} from "@/schemas/checkout/shipping";
import { useAddressByCep } from "@/hooks/useAddressByCep";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { ShippingMethod } from "@/types/shippingMethod";
import { FaTruck, FaStore } from "react-icons/fa";
import Link from "@/components/Link";
import DropdownSelect from "@/components/forms/DropdownSelect";
import { Country } from "@/types/country";

interface ShippingStepProps {
  countries: Country[];
  shippingMethods: ShippingMethod[];
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

const ShippingStep: FC<ShippingStepProps> = ({
  shippingMethods,
  validationMessages,
  countries,
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
    setShippingMethods,
    shippingFormData,
    setShippingFormData,
    isDelivery,
    setIsDelivery,
  } = useCheckoutStore();

  const [selectedCountry, setSelectedCountry] = useState(
    shippingFormData.country || countries[0]?.cca2 || ''
  );
  const [disabledFields, setDisabledFields] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(getShippingSchema(validationMessages)),
    defaultValues: {
      ...shippingFormData,
      country: shippingFormData.country || countries[0]?.cca2 || ''
    }
  });

  const { isLoadingCep, fetchAddressByCep } = useAddressByCep(setValue);

  const onSubmit = async (data: ShippingFormData) => {
    if (!selectedShippingMethod) {
      return;
    }

    try {
      setShippingAddress(data);
      setShippingFormData(data);
      setCurrentStep("customer");
      await router.push(`/checkout?step=customer`);
    } catch (error) {
      console.error('Failed to process shipping information:', error);
    }
  };

  useEffect(() => {
    setShippingAddress({
      ...shippingFormData,
      country: selectedCountry,
      neighborhood: shippingFormData.complement || '',
      street: shippingFormData.street || '',
      number: shippingFormData.number || '',
      complement: shippingFormData.complement || '',
      city: shippingFormData.city || '',
      state: shippingFormData.state || '',
      zipCode: shippingFormData.zipCode || ''
    });
  }, [selectedCountry]);

  useEffect(() => {
    setShippingMethods(shippingMethods);
  }, [shippingMethods]);

  useEffect(() => {
    setDisabledFields(selectedCountry === 'BR' ? true : false);
  }, [selectedCountry]);

  useEffect(() => {
    setValue('country', selectedCountry);
  }, [selectedCountry, setValue]);

  return (
    <div className="w-full flex flex-col items-center justify-start md:mx-auto p-0 md:p-6 transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Button
          label="Delivery"
          icon={<FaTruck />}
          className={`flex-row-reverse text-2xl font-bold mb-6 gap-4 ${isDelivery ? "bg-green-500" : "bg-gray-500"}`}
          onClick={() => setIsDelivery(true)}
        >
          <input
            checked={isDelivery}
            onChange={(e) => setIsDelivery(e.target.checked)}
            className={`w-6 h-6 transition-all duration-300 ease-in-out ${isDelivery ? "scale-100" : "scale-0"}`}
            type="radio"
            name="shippingType"
            value="delivery"
          />
        </Button>

        <Button
          label="Pickup"
          icon={<FaStore />}
          className={`flex-row-reverse text-2xl font-bold mb-6 gap-4 ${isDelivery ? "bg-gray-500" : "bg-green-500"}`}
          onClick={() => setIsDelivery(false)}
        >
          <input
            checked={!isDelivery}
            onChange={(e) => setIsDelivery(!e.target.checked)}
            className={`w-6 h-6 transition-all duration-300 ease-in-out ${isDelivery ? "scale-0" : "scale-100"}`}
            type="radio"
            name="shippingType"
            value="pickup"
          />
        </Button>
      </div>

      {isDelivery ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:space-y-6 w-full min-w-full transition-all duration-300 ease-in-out grid gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label={zipCode}
              name="zipCode"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.zipCode?.message}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                fetchAddressByCep(e.target.value.replace(/\D/g, ""));
              }}
              disabled={isLoadingCep}
            />

            <DropdownSelect
              options={countries.map((country: Country) => ({
                label: country.name.common + " - " + country.cca2,
                value: country.cca2,
              }))}
              label={country}
              name="country"
              register={register as unknown as UseFormRegister<FieldValues>}
              rules={{ required: true }}
              onChange={(value: string | number) => setSelectedCountry(String(value))}
            />
          </div>

          <TextInput
            label={street}
            name="street"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.street?.message}
            disabled={disabledFields}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              rules={{ required: false }}
            />
          </div>

          <TextInput
            label={neighborhood}
            name="neighborhood"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.neighborhood?.message}
            disabled={disabledFields}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label={city}
              name="city"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.city?.message}
              disabled={disabledFields}
            />
            <TextInput
              label={state}
              name="state"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors.state?.message}
              disabled={disabledFields}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {shippingMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center justify-between p-4 border rounded-lg w-full z-[2] px-4 py-3 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 ease-in-out cursor-pointer ${selectedShippingMethod?.id === method.id
                    ? "border-green-500 bg-green-50 !text-black"
                    : "border-gray-200"
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
                      <p className="font-medium">{method.name}</p>
                      <p className={`text-sm text-gray-100 ${selectedShippingMethod?.id === method.id ? "text-green-500" : ""}`}>{method.time}</p>
                    </div>
                  </div>
                  <span className="font-medium">${method.price}</span>
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
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <DropdownSelect
            options={countries.map((country: Country) => ({
              label: country.name.common + " - " + country.cca2,
                value: country.cca2,
              }))}
              label={country}
              name="country"
              register={register as unknown as UseFormRegister<FieldValues>}
              rules={{ required: true }}
              onChange={(value: string | number) => setSelectedCountry(String(value))}
            />
          <Link
            href="/checkout?step=customer"
            className="w-full mt-6 md:w-auto place-self-start flex items-center justify-center px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 ease-in-out text-center disabled:cursor-not-allowed"
          >
            Continue to Customer Information
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShippingStep
