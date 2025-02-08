import { FC, useState } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Label from "@/components/Label";

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
  const [value, setValue] = useState("");

  const applyMask = (value: string): string => {
    if (!mask || !value) return value;

    const numbers = value.replace(/\D/g, "");

    if (mask === "CPF") {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }

    if (mask === "CNPJ") {
      return numbers
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }

    return numbers;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = applyMask(e.target.value);
    setValue(newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  const { ref, ...registerProps } = register(name, rules);

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
        {...registerProps}
        ref={(e) => {
          ref(e);
        }}
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        className="z-[2] w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition disabled:bg-gray-600 disabled:border-gray-400 disabled:text-gray-300 disabled:placeholder-gray-200 disabled:cursor-not-allowed"
        onBlur={handleBlur}
        value={value}
        onChange={handleChange}
        maxLength={mask === "999.999.999-99" ? 14 : mask === "99.999.999/9999-99" ? 18 : undefined}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default MaskedInput;
