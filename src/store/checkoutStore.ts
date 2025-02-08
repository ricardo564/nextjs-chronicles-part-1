import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShippingMethod, CheckoutStep, Address } from "@/types/shippingMethod";

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
  setShippingMethods: (methods: ShippingMethod[]) => void;
}

const initialState = {
  currentStep: "shipping" as CheckoutStep,
  shippingAddress: null,
  billingAddress: null,
  useDifferentBillingAddress: false,
  selectedShippingMethod: null,
  shippingMethods: [],
};

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      ...initialState,
      setCurrentStep: (step) => set({ currentStep: step }),
      setShippingAddress: (address) => set({ shippingAddress: address }),
      setBillingAddress: (address) => set({ billingAddress: address }),
      setUseDifferentBillingAddress: (value) =>
        set({ useDifferentBillingAddress: value }),
      setSelectedShippingMethod: (method) =>
        set({ selectedShippingMethod: method }),
      clearCheckoutData: () => set(initialState),
      setShippingMethods: (methods) => set({ shippingMethods: methods }),
    }),
    {
      name: "checkout-storage",
    }
  )
);
