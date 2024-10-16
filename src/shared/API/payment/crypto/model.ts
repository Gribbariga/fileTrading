export interface ICreateCryptoPaymentPayload {
  tariff_id: number;
  duration: number;
  currency: number;
}

export interface ICreateCryptoPaymentResponse {
  address: string;
  price: string;
  currency: string;
  payment_id: 0;
}

export interface ICanselCryptoPaymentPayload {
  payment_id: number;
}

export interface IPaidPaymentPayload {
  payment_id: number;
}

export interface IcryptoPaymentStatusPayload {
  payment_id: number;
}

export interface IcryptoPaymentStatusResponse {
  price: string;
  address: string;
  currency: string;
  paid: boolean;
  status: string;
  tariff_id: number;
  duration: number;
  created_at: string;
  updated_at: string;
}
