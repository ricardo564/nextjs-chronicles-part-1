import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export type CheckoutStep = "shipping" | "customer" | "payment" | "confirmation";

interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  time: string;
}

interface CheckoutState {
  currentStep: CheckoutStep;
  shippingAddress: Address | null;
  billingAddress: Address | null;
  useDifferentBillingAddress: boolean;
  selectedShippingMethod: ShippingMethod | null;
  shippingMethods: ShippingMethod[];
  setCurrentStep: (step: CheckoutStep) => void;
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
  setUseDifferentBillingAddress: (value: boolean) => void;
  setSelectedShippingMethod: (method: ShippingMethod) => void;
  clearCheckoutData: () => void;
  getShippingMethods: () => ShippingMethod[];
}

const initialState = {
  currentStep: "shipping" as CheckoutStep,
  shippingAddress: null,
  billingAddress: null,
  useDifferentBillingAddress: false,
  selectedShippingMethod: null,
  shippingMethods: [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 100,
      time: '5-7 business days'
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: 250,
      time: '2-3 business days'
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      price: 500,
      time: '1 business day'
    }
  ]
};

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setCurrentStep: (step) => set({ currentStep: step }),
      setShippingAddress: (address) => set({ shippingAddress: address }),
      setBillingAddress: (address) => set({ billingAddress: address }),
      setUseDifferentBillingAddress: (value) =>
        set({ useDifferentBillingAddress: value }),
      setSelectedShippingMethod: (method) =>
        set({ selectedShippingMethod: method }),
      clearCheckoutData: () => set(initialState),
      getShippingMethods: () => get().shippingMethods,
    }),
    {
      name: "checkout-storage",
    }
  )
);
