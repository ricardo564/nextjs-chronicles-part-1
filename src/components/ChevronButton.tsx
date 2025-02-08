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
  const buttonStyle = isOpen ? "bg-transparent" : "";

  function handleToggle(event: React.MouseEvent) {
    event.stopPropagation();
    onToggle();
  }

  return (
    <button
      type="button"
      className={`text-white flex justify-center items-center gap-4 p-2 w-full transition-colors duration-200 hover:bg-white/10 ${buttonStyle} ${className}`}
      onClick={handleToggle}
    >
      <div
        className={`${chevronStyle} transition-transform duration-200`}
      >
        <FaChevronDown className="text-white/80" />
      </div>
      {label && (
        <span className="text-white/90">
          {label}
        </span>
      )}
    </button>
  );
};

export default ChevronButton;
