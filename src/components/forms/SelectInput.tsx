import type { FC } from "react";
import { useState, useEffect } from "react";
import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  Path,
} from "react-hook-form";
import Label from "@/components/forms/Label";

interface Props {
  name: string;
  options:any[];
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>;
}

const SelectInput: FC<Props> = ({
  name,
  label,
  className,
  placeholder,
  disabled = false,
  error,
  register,
  rules,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<HTMLOptionElement[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<HTMLOptionElement[]>([]);

  useEffect(() => {
    const optionElements = Array.from(
      document.querySelectorAll(`#${name} option`)
    ) as HTMLOptionElement[];
    setOptions(optionElements.filter((opt) => opt.value !== ""));
    setFilteredOptions(optionElements.filter((opt) => opt.value !== ""));
  }, [name]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = options.filter((option) =>
      option.text.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={name}>{label}</Label>}

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-2"
        disabled={disabled}
      />

      <select
        id={name}
        className={`w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${className}`}
        disabled={disabled}
        {...register(name, rules)}
        size={5}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No results found
          </option>
        )}
      </select>
      {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
    </div>
  );
};

export default SelectInput;
