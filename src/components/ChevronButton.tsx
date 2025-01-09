import type { FC } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onToggle: () => void;
  label?: string;
  className?: string;
  isOpen?: boolean;
}

const ChevronButton: FC<Props> = ({ label, className, isOpen, onToggle }) => {
  const chevronStyle = isOpen ? "" : "transform rotate-180";
  const buttonStyle = isOpen ? "bg-gray-100" : "";

  function handleToggle(event: React.MouseEvent) {
    event.stopPropagation();
    onToggle();
  }

  return (
    <button
      type="button"
      className={`text-black flex justify-center items-center gap-4 p-1 w-full mx-auto ${buttonStyle} ${className}`}
      onClick={handleToggle}
    >
      <div
        className={`${chevronStyle} transition-transform duration-200`}
      >
        <FaChevronDown />
      </div>
      {label && (
        <span>
          {label}
        </span>
      )}
    </button>
  );
};

export default ChevronButton;
