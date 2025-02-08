import { FC } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Label from "@/components/Label";

interface Props {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextInput: FC<Props> = ({
  name,
  label,
  className,
  placeholder,
  disabled = false,
  error,
  register,
  rules,
  onBlur,
}: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <Label
          className="ml-1 -mb-2 text-white w-max p-2 text-xs font-normal bg-gradient-to-r from-white/10 via-transparent  rounded-full"
          value={label}
          htmlFor={name}
        />
      )}
      <input
        {...register(name, rules)}
        type="text"
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        className="z-[2] w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition disabled:bg-gray-600 disabled:border-gray-400 disabled:text-gray-300 disabled:placeholder-gray-200 disabled:cursor-not-allowed"
        onBlur={onBlur}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};
