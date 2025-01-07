"use client";

import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { CartItem } from "@/types/cartItem"

interface ShoppingCartProps {
  className?: string;
  cartItem: CartItem;
}

export function QuantityShortcut({ className, cartItem }: ShoppingCartProps) {
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
    <div className={`ml-auto  mr-3 w-[0.5rem] flex flex-col items-center justify-center ${className}`}>
      <button
        className="text-white text-xl hover:text-red-500 rounded-full p-2 transition-all duration-300"
        onClick={() => incrementItemQuantity(cartItem.item)}
      >
        +
      </button>
      <button
        onClick={() => removeItem(cartItem.item)}
        className="p-2 hover:bg-white/10 rounded-full hover:text-red-500 transition-all duration-300"
        aria-label="Remove item"
        title="Remove item"
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
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </button>
      <button
        className="text-white text-xl hover:text-red-500 rounded-full p-2 transition-all duration-300"
        onClick={() => handleWithdrawItem()}
      >
        -
      </button>
    </div>
  );
}
