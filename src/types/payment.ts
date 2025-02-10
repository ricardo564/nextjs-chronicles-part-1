export interface CreditCardInfo {
  number: string;
  name: string;
  expirationDate: string;
  cvv: string;
}

export interface BoletoInfo {
  number: string;
}

export interface PaymentInformation {
  paymentMethod: 'creditCard' | 'boleto' | 'pix' | 'bitcoin' | 'paypal';
  creditCard?: CreditCardInfo;
  boleto?: BoletoInfo;
}
