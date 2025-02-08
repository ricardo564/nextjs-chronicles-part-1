import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ShippingMethod, CheckoutStep, Address } from "@/types/shippingMethod";
import { ShippingFormData } from "@/types/shippingFormData";

interface CheckoutState {
  currentStep: CheckoutStep;
  shippingAddress: Address | null;
  billingAddress: Address | null;
  useDifferentBillingAddress: boolean;
  selectedShippingMethod: ShippingMethod | null;
  shippingMethods: ShippingMethod[];
  shippingFormData: Partial<ShippingFormData>;
  isDelivery: boolean;
  setCurrentStep: (step: CheckoutStep) => void;
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
  setUseDifferentBillingAddress: (value: boolean) => void;
  setSelectedShippingMethod: (method: ShippingMethod) => void;
  clearCheckoutData: () => void;
  setShippingMethods: (methods: ShippingMethod[]) => void;
  setShippingFormData: (data: Partial<ShippingFormData>) => void;
  setIsDelivery: (isDelivery: boolean) => void;
}

const initialState = {
  currentStep: "shipping" as CheckoutStep,
  shippingAddress: null,
  billingAddress: null,
  useDifferentBillingAddress: false,
  selectedShippingMethod: null,
  shippingMethods: [],
  shippingFormData: {},
  isDelivery: true,
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
      setShippingFormData: (data) => 
        set((state) => ({
          shippingFormData: { ...state.shippingFormData, ...data }
        })),
      setIsDelivery: (isDelivery) => set({ isDelivery }),
    }),
    {
      name: "checkout-storage",
    }
  )
);
