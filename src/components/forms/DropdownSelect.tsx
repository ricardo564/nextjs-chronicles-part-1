import { FC } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import Label from "@/components/Label";
import ChevronButton from "@/components/ChevronButton";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  name: string;
  options: Option[];
  label?: string;
  placeholder?: string;
  initialValue?: string | number;
  className?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, Path<FieldValues>>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const DropdownSelect: FC<Props> = ({
  name,
  label,
  placeholder,
  initialValue,
  className,
  options,
  rules,
  register,
  onBlur,
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
        const event = { type: 'blur', target: null } as unknown as React.FocusEvent<HTMLInputElement>;

        onBlur(event);
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
    return null;
  }

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      {label && <Label value={label} />}
      <button
        type="button"
        className="d-input bg-transparent w-full flex items-center justify-center min-h-[41px] border-base-gray rounded-none disabled:bg-gray-200 disabled:border-base-gray disabled:cursor-not-allowed focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200 delay-50 relative"
        onClick={toggleDropdown}
      >
        <input
          {...register(name, rules)}
          className="p-2 w-full text-left focus:outline-none"
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
        <div className="inset-y-0 right-0">
          <ChevronButton
            className="w-8 h-8 flex-row-reverse bg-transparent"
            isOpen={isDropdownOpen}
            onToggle={toggleDropdown}
          />
        </div>
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-base-gray rounded-none shadow-md max-h-[20rem] overflow-hidden overflow-y-auto -mt-5">
          <ul className="list-none py-2">
            {filteredOptions.map(({ label, value }, index) => (
              <li key={`${name}-${label}-${value}-${index}`}>
                <button
                  type="button"
                  className="w-full p-2 text-left hover:bg-gray-200 focus:outline-none"
                  onClick={() => handleSelect(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
