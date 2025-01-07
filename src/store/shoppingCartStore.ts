import { create } from "zustand";
import { Plant } from "@/types/plant.types";

interface ShoppingCartItem {
  item: Plant;
  quantity: number;
}

interface ShoppingCartState {
  items: ShoppingCartItem[];
  addItem: (item: Plant, quantity?: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

const ifItemExistsOnlyIncreaseQuantity = (cartItems: ShoppingCartItem[], item: Plant) => {
  if(!item.id) return cartItems;

  const itemExists = cartItems.find((cartItem) => cartItem.item.id === item.id);

  if (itemExists) {
    return cartItems.map((cartItem) => cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }

  return [...cartItems, { item, quantity: 1 }];
}

export const useShoppingCartStore = create<ShoppingCartState>()((set) => ({
  items: [],
  addItem: (item: Plant) => set((state) => ({
    items: ifItemExistsOnlyIncreaseQuantity(state.items, item)
  })),
  removeItem: (itemId: number) => set((state) => ({
    items: state.items.filter((item) => item.item.id !== itemId)
  })),
  clearCart: () => set({ items: [] }),
}));
