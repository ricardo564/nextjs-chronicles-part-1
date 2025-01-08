"use client";

import { Plant } from "@/types/plant.types";
import Image from "next/image";
import shopIcon from "@/assets/svg/shop-icon.svg";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { QuantityShortcut } from "./quantityShortcut";

interface BuyShortcutProps {
  plant: Plant;
  className?: string;
  showIcon?: boolean;
  quantityClassName?: string;
  shopIconClassName?: string;
}

export const BuyShortcut = ({
  plant,
  className,
  shopIconClassName,
  showIcon = true,
  quantityClassName,
}: BuyShortcutProps) => {
  const { addItem } = useShoppingCartStore();

  const itemExistsOnCart = () => {
    const cartItems = useShoppingCartStore.getState().items;
    return cartItems.some((item) => item.item.id === plant.id);
  };

  return itemExistsOnCart() ? (
    <QuantityShortcut
      cartItem={{ item: plant, quantity: 1 }}
      className={`${quantityClassName}`}
    />
  ) : (
    <button
      onClick={() => addItem(plant)}
      type="button"
        className={`w-full md:w-auto place-self-start flex items-center justify-center px-6 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-center ${className}`}
        title={`Buy ${plant.common_name || plant.scientific_name} plants`}
      >
        {showIcon && (
          <Image
            src={shopIcon}
            className={`w-11 h-11 max-w-[44px] max-h-[44px] ${shopIconClassName}`}
            alt="Shop icon"
          />
        )}
      {!showIcon && <span className="text-sm">Buy now</span>}
    </button>
  );
};
