import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CustomerInformation } from "@/types/customer";

interface CustomerState {
  customerInfo: Partial<CustomerInformation>;
  setCustomerInfo: (info: Partial<CustomerInformation>) => void;
  clearCustomerInfo: () => void;
}

const initialState = {
  customerInfo: {},
};

export const useCustomerStore = create<CustomerState>()(
  persist(
    (set) => ({
      ...initialState,
      setCustomerInfo: (info) =>
        set((state) => ({
          customerInfo: { ...state.customerInfo, ...info },
        })),
      clearCustomerInfo: () => set(initialState),
    }),
    {
      name: "customer-storage",
    }
  )
);
