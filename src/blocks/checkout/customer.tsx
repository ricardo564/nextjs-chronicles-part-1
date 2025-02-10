"use client";

import type { FC } from "react";
import { useState } from "react";
import { FieldValues, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCustomerStore } from "@/store/customerStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import { TextInput } from "@/components/forms/TextInput";
import { DateInput } from "@/components/forms/DateInput";
import { PhoneInput } from "@/components/forms/PhoneInput";
import { Checkbox } from "@/components/forms/Checkbox";
import Button from "@/components/Button";
import DropdownSelect from "@/components/forms/DropdownSelect";
import { CustomerInformation } from "@/types/customer";
import { getCustomerSchema } from "@/schemas/checkout/customer";
import MaskedInput from "@/components/forms/MaskedInput";
import { Language } from "@/types/language";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "@/components/Link";
import { PasswordStrengthMeter } from "@/components/forms/PasswordStrengthMeter";

interface CustomerStepProps {
  languages: Language[];
  validationMessages: Record<string, string>;
  fullNameLabel: string;
  emailLabel: string;
  phoneNumberLabel: string;
  dateOfBirthLabel: string;
  preferredLanguageLabel: string;
  taxIdNumberLabel: string;
  stateRegistrationLabel: string;
  createAccountLabel: string;
  passwordLabel: string;
  acceptedTermsLabel: string;
  subscribeToNewsletterLabel: string;
  receiveMarketingEmailsLabel: string;
  backLabel: string;
  continueToPaymentLabel: string;
}

const CustomerStep: FC<CustomerStepProps> = ({
  languages,
  validationMessages,
  fullNameLabel,
  emailLabel,
  phoneNumberLabel,
  dateOfBirthLabel,
  preferredLanguageLabel,
  stateRegistrationLabel,
  createAccountLabel,
  passwordLabel,
  acceptedTermsLabel,
  subscribeToNewsletterLabel,
  receiveMarketingEmailsLabel,
  backLabel,
  continueToPaymentLabel,
}) => {
  const router = useRouter();
  const { customerInfo, setCustomerInfo } = useCustomerStore();
  const checkoutStore = useCheckoutStore();
  const { setCurrentStep } = useCheckoutStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CustomerInformation>({
    resolver: zodResolver(getCustomerSchema(validationMessages)),
    defaultValues: customerInfo,
    mode: "onChange",
  });

  const country = checkoutStore.shippingAddress?.country;
  const createAccount = watch("account.createAccount");
  const isBrazil = country === "BR";
  const [taxIdType, setTaxIdType] = useState("CPF");
  const onSubmit = async (data: CustomerInformation) => {
    try {
      setCustomerInfo(data);
      setCurrentStep("payment");
      await router.push("/checkout?step=payment");
    } catch (error) {
      console.error("Failed to process customer information:", error);
    }
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="space-y-6"
    >
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>

        <TextInput
          label={fullNameLabel}
          name="personalInfo.fullName"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: true }}
          error={errors.personalInfo?.fullName?.message}
        />

        <TextInput
          label={emailLabel}
          name="personalInfo.email"
          type="email"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: true }}
          error={errors.personalInfo?.email?.message}
        />

        <PhoneInput
          label={phoneNumberLabel}
          name="personalInfo.phoneNumber"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: true }}
          error={errors.personalInfo?.phoneNumber?.message}
        />

        <DateInput
          label={dateOfBirthLabel}
          name="personalInfo.dateOfBirth"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: true }}
          error={errors.personalInfo?.dateOfBirth?.message}
        />

        <DropdownSelect
          label={preferredLanguageLabel}
          name="personalInfo.preferredLanguage"
          options={languages.map((language) => ({
            value: language.id,
            label: language.name,
          }))}
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: true }}
        />
      </section>

      {isBrazil && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tax Information</h2>

          <DropdownSelect
            label={taxIdType}
            name="brazilianTaxInfo.taxIdType"
            options={[
              { value: "CPF", label: "CPF" },
              { value: "CNPJ", label: "CNPJ" },
            ]}
            onChange={(value: string | number) => setTaxIdType(String(value))}
            register={register as unknown as UseFormRegister<FieldValues>}
            rules={{ required: isBrazil ? true : false }}
          />

          <MaskedInput
            label={taxIdType === "CNPJ" ? "CNPJ" : "CPF"}
            name="brazilianTaxInfo.taxIdNumber"
            register={register as unknown as UseFormRegister<FieldValues>}
            error={errors.brazilianTaxInfo?.taxIdNumber?.message}
            mask={taxIdType === "CNPJ" ? "CNPJ" : "CPF"}
            rules={{ required: isBrazil ? true : false }}
          />

          {taxIdType === "CNPJ" && (
            <TextInput
              label={stateRegistrationLabel}
              name="brazilianTaxInfo.stateRegistration"
              register={register as unknown as UseFormRegister<FieldValues>}
              rules={{ required: isBrazil ? true : false }}
              error={errors.brazilianTaxInfo?.stateRegistration?.message}
            />
          )}
        </section>
      )}

      <section className="space-y-4">
        <Checkbox
          label={createAccountLabel}
          name="account.createAccount"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: false }}
        />

        <div className="flex flex-col">
          <TextInput
            label={passwordLabel}
            name="account.password"
            type={showPassword ? "text" : "password"}
            register={register as unknown as UseFormRegister<FieldValues>}
            disabled={!createAccount}
            error={errors.account?.password?.message}
            rules={{ required: createAccount ? true : false }}
          >
            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-500 border-none bg-transparent"
              disabled={!createAccount}
            >
              {showPassword ?
                <EyeIcon className={`w-8 h-8 ${showPassword ? "text-green-500" : "text-gray-400"}`} />
                :
                <EyeOffIcon className={`w-8 h-8 ${showPassword ? "text-green-500" : "text-gray-400"}`} />
              }
            </Button>
          </TextInput>

          {createAccount && watch("account.password") && (
            <PasswordStrengthMeter
              password={watch("account.password") || ""}
            />
          )}
        </div>

        <Checkbox
          label={acceptedTermsLabel}
          name="account.acceptedTerms"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: createAccount ? true : false }}
          disabled={!createAccount}
          error={errors.account?.acceptedTerms?.message}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Email Preferences</h2>

        <Checkbox
          label={subscribeToNewsletterLabel}
          name="preferences.newsletter"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: false }}
        />

        <Checkbox
          label={receiveMarketingEmailsLabel}
          name="preferences.marketing"
          register={register as unknown as UseFormRegister<FieldValues>}
          rules={{ required: false }}
        />
      </section>

      <div className="grid grid-cols-2 gap-4 items-center justify-between">
        <Link href="/checkout?step=shipping">
          <Button
            type="button"
            label={backLabel}
            className="w-auto"
          />
        </Link>

        <Button
          type="submit"
          label={continueToPaymentLabel}
          className="w-auto ml-auto"
        />
      </div>

      <div className="text-sm text-gray-400">
        {isSubmitting && <p>Submitting...</p>}
        {Object.keys(errors).length > 0 && (
          <p className="text-red-400">There are form errors</p>
        )}
      </div>
    </form>
  );
};

export default CustomerStep;
