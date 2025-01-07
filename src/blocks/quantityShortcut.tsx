"use client";

import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { CartItem } from "@/types/cartItem"

interface ShoppingCartProps {
  className?: string;
  showRemoveButton?: boolean;
  cartItem: CartItem;
}

export function QuantityShortcut({ className, cartItem, showRemoveButton = true }: ShoppingCartProps) {
  const removeItem = useShoppingCartStore((state) => state.removeItem);
  const incrementItemQuantity = useShoppingCartStore(
    (state) => state.addItem
  );
  const decrementItemQuantity = useShoppingCartStore(
    (state) => state.decrementItemQuantity
  );
  const handleWithdrawItem = () => {
    if (cartItem.quantity === 1) {
      removeItem(cartItem.item);
    } else {
      decrementItemQuantity(cartItem.item);
    }
  }

  return (
    <div className={`ml-auto mr-3 w-[0.5rem] flex flex-col items-center justify-between ${className} ${!showRemoveButton ? 'gap-4' : ''}`}>
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
          onClick={() => removeItem(cartItem.item)}
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
  );
}
