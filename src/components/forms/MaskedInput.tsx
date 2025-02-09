import { FC, useState } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Label from "@/components/Label";
import { formatValueWithMask } from "@/utils/formatValueWithMask";

interface Props {
  name: string;
  type?: "text";
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  mask?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const MaskedInput: FC<Props> = ({
  name,
  type = "text",
  label,
  className,
  placeholder,
  disabled = false,
  error,
  mask,
  register,
  rules,
  onBlur,
}: Props) => {
  const [maskedValue, setMaskedValue] = useState("");

  const applyMask = (value: string): string => {
    if (!mask || !value) return value;
    const numbers = value.replace(/\D/g, "");
    return formatValueWithMask(numbers, mask);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaskedValue = applyMask(e.target.value);
    setMaskedValue(newMaskedValue);

    const unmaskedValue = newMaskedValue.replace(/\D/g, "");
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: unmaskedValue,
        name: e.target.name,
      },
    };

    onChange(newEvent);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const unmaskedValue = maskedValue.replace(/\D/g, "");
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        value: unmaskedValue,
        name: e.target.name,
      },
    };

    if (onBlur) {
      onBlur(newEvent);
    }
  };

  const { ref, onChange, ...restRegisterProps } = register(name, {
    ...rules,
    setValueAs: (value: string) => value.replace(/\D/g, ""),
  });

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <Label
          className="ml-1 -mb-2 text-white w-max p-2 text-xs font-normal bg-gradient-to-r from-white/10 via-transparent rounded-full"
          value={label}
          htmlFor={name}
        />
      )}

      <input
        {...restRegisterProps}
        ref={(e) => {
          ref(e);
        }}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className="z-[2] w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition disabled:bg-gray-600 disabled:border-gray-400 disabled:text-gray-300 disabled:placeholder-gray-200 disabled:cursor-not-allowed"
        onBlur={handleBlur}
        value={maskedValue}
        onChange={handleChange}
        maxLength={mask === "CPF" ? 14 : mask === "CNPJ" ? 18 : undefined}
      />

      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default MaskedInput;
