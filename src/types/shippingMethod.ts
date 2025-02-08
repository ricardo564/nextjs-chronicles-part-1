export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  time: string;
}

export type CheckoutStep = "shipping" | "customer" | "payment" | "confirmation";

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
