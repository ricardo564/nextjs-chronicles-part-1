"use client";

import { useState } from "react";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { CartItem } from "@/types/cartItem";
import { Modal } from "@/components/Modal";

interface ShoppingCartProps {
  cartItem: CartItem;
  className?: string;
  showRemoveButton?: boolean;
}

export function QuantityShortcut({
  className,
  cartItem,
  showRemoveButton = true,
}: ShoppingCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const removeItem = useShoppingCartStore((state) => state.removeItem);
  const incrementItemQuantity = useShoppingCartStore((state) => state.addItem);

  const decrementItemQuantity = useShoppingCartStore(
    (state) => state.decrementItemQuantity
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleWithdrawItem = () => {
    if (cartItem.quantity === 1) {
      toggleModal();
      return;
    }

    decrementItemQuantity(cartItem.item);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id="quantity-shortcut-modal"
        title="Remove item"
      >
        <div className="flex flex-col gap-4 justify-start">
          <p className="text-lg text-center">Are you sure you want to remove this item?</p>
          <div className="flex justify-end gap-2 w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md w-full"
            >
              Cancel
            </button>
            <button
              onClick={() => removeItem(cartItem.item)}
              className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
            >
              Remove
            </button>
          </div>
        </div>
      </Modal>

      <div
        className={`ml-auto mr-3 w-[1rem] flex flex-col items-center justify-between overflow-hidden ${className} ${
          !showRemoveButton ? "gap-4" : ""
        }`}
      >
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-white hover:text-green-500 hover:bg-white/10 rounded-full transition-all duration-300 active:scale-95"
          aria-label="Increase quantity"
          title="Increase quantity"
          onClick={() => incrementItemQuantity(cartItem.item)}
        >
          <span className="text-xl font-medium">+</span>
        </button>

        {showRemoveButton && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 hover:bg-white/10 rounded-full hover:text-red-500 transition-all duration-300 active:scale-95"
            aria-label="Remove item"
            title="Remove item"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        )}

        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-white hover:text-orange-500 hover:bg-white/10 rounded-full transition-all duration-300 active:scale-95"
          aria-label="Decrease quantity"
          title="Decrease quantity"
          onClick={() => handleWithdrawItem()}
        >
          <span className="text-xl font-medium">-</span>
        </button>
      </div>
    </>
  );
}
