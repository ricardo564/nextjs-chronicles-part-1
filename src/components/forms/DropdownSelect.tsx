import type { FC, FocusEvent } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Label from "@/components/Label";
import AnimatedChevron from "@/components/AnimatedChevron";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownSelectProps {
  name: string;
  options: Option[];
  label?: string;
  placeholder?: string;
  initialValue?: string | number;
  className?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: string | number) => void;
}

const DropdownSelect: FC<DropdownSelectProps> = ({
  name,
  label,
  placeholder,
  initialValue,
  className,
  options,
  rules,
  register,
  onBlur,
  onChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setSearchQuery("");
      setFilteredOptions(options);
    }
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value: string | number) => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      setSelectedLabel(selectedOption.label);
      if (onBlur) {
        const event = new FocusEvent('blur') as unknown as FocusEvent<HTMLInputElement>;
        onBlur(event);
      }

      if (onChange) {
        onChange(value);
      }
    }
    setDropdownOpen(false);
    setSearchQuery("");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (initialValue !== undefined) {
      const initialOption = options.find(
        (option) => option.value === initialValue
      );
      if (initialOption) {
        setSelectedLabel(initialOption.label);
      }
    } else if (options.length > 0) {
      setSelectedLabel(options[0].label);
    }
  }, [initialValue, options]);

  if (options.length === 0) {
    return (
      <div className="flex flex-col w-full relative">
        <Label
          className="ml-1 -mb-2 text-white w-max p-2 text-xs font-normal bg-gradient-to-r from-white/10 via-transparent rounded-full"
          value={"Error loading options for " + label}
        />
        <div className="w-full h-[3.1rem] bg-gray-700 border border-gray-600 rounded-lg z-[2] flex items-center justify-between transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"></div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      {label && (
        <Label
          className="ml-1 -mb-2 text-white w-max p-2 text-xs font-normal bg-gradient-to-r from-white/10 via-transparent rounded-full"
          value={label}
        />
      )}
      <button
        type="button"
        className="z-[2] w-full flex items-center justify-between bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
        aria-controls={`${name}-dropdown`}
        onClick={toggleDropdown}
      >
        <input
          {...register(name, rules)}
          className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          value={isDropdownOpen ? searchQuery : selectedLabel}
          onClick={() => {
            if (isDropdownOpen && selectedLabel) {
              setSearchQuery(selectedLabel);
              setSelectedLabel("");
            }
          }}
          onChange={handleSearch}
          placeholder={placeholder}
          readOnly={!isDropdownOpen}
        />
        <div className="px-2">
          <AnimatedChevron
            className="w-8 h-8 text-white"
            isOpen={isDropdownOpen}
            onToggle={toggleDropdown}
          />
        </div>
      </button>

      <div
        role="listbox"
        id={`${name}-dropdown`}
        className={`absolute top-full left-0 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-[20rem] overflow-hidden overflow-y-auto z-10 transition-all duration-200 ease-in-out animate-dropdown ${!isDropdownOpen ? '-translate-y-100 opacity-0 z-[-10]' : 'translate-y-2 opacity-100 z-[10]'}`}
      >
        <ul className="list-none py-2">
          {filteredOptions.map(({ label, value }, index) => (
            <li key={`${name}-${label}-${value}-${index}`}>
              <button
                type="button"
                role="option"
                aria-selected={label === selectedLabel}
                tabIndex={isDropdownOpen ? 0 : -1}
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition-colors"
                onClick={() => handleSelect(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownSelect;
