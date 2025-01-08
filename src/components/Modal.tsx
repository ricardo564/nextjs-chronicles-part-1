import type { FC } from "react";
import { ReactNode, useEffect, useRef } from "react";
import { isClickOutsideElement } from "@/utils/isClickOutsideElement";

interface ModalProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  isModal?: boolean;
  className?: string;
}

export const Modal: FC<ModalProps> = ({
  id,
  title,
  isOpen,
  onClose,
  children,
  isModal = true,
  className,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && isClickOutsideElement(modalRef.current, event)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm transition-opacity !z-[999] h-full overflow-hidden">
          <dialog
            ref={modalRef}
            id={id}
            open={isOpen}
            className={`
          w-full max-w-md rounded-lg bg-white p-6 shadow-xl
          transition-all duration-200 !z-[999]
          ${className}
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
            role={isModal ? "dialog" : "alertdialog"}
            aria-labelledby={`${id}-title`}
            aria-modal={isModal}
          >
            <h2
              id={`${id}-title`}
              className="border-b text-xl font-semibold text-center md:text-start text-gray-900 mb-4 w-full"
            >
              {title}
            </h2>

            <div className="mt-2">{children}</div>

            <button
              type="button"
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500
          rounded-full p-2 inline-flex items-center justify-center
          hover:bg-gray-100 focus:outline-none focus:ring-2
          focus:ring-inset focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">
                Close {isModal ? "modal" : "dialog"}
              </span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </dialog>
        </div>
      )}
    </>
  );
};
