import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PaymentInformation } from "@/types/payment";

interface PaymentStore {
  paymentInfo: PaymentInformation;
  setPaymentInfo: (info: PaymentInformation) => void;
  clearPaymentInfo: () => void;
}

const paymentInfoDefaultValue: PaymentInformation = {
  paymentMethod: 'bitcoin',
  creditCard: {
    number: '',
    name: '',
    expirationDate: '',
    cvv: ''
  },
  boleto: {
    number: ''
  }
};

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set) => ({
      paymentInfo: paymentInfoDefaultValue,
      setPaymentInfo: (info) => set({ paymentInfo: info }),
      clearPaymentInfo: () => set({ paymentInfo: paymentInfoDefaultValue }),
    }),
    {
      name: 'payment-store',
    }
  )
);