import {
  ICanselCryptoPaymentPayload,
  ICreateCryptoPaymentPayload,
  ICreateCryptoPaymentResponse,
  IcryptoPaymentStatusPayload,
  IcryptoPaymentStatusResponse,
  IPaidPaymentPayload,
} from "src/shared/API/payment/crypto/model";
import { axiosBasePayment } from "src/shared/config/axiosConfig/axiosConfig";

export const createCryptoPayment = async (
  data: ICreateCryptoPaymentPayload
) => {
  return axiosBasePayment.post<ICreateCryptoPaymentResponse>(
    "/crypto/create",
    data
  );
};

export const canselCryptoPayment = async (
  data: ICanselCryptoPaymentPayload
) => {
  return axiosBasePayment.patch(`/crypto/cancel/${data.payment_id}`);
};

export const paidPayment = async (data: IPaidPaymentPayload) => {
  return axiosBasePayment.patch(`crypto/paid/${data.payment_id}`);
};

export const cryptoPaymentStatus = async (
  data: IcryptoPaymentStatusPayload
) => {
  return axiosBasePayment.get<IcryptoPaymentStatusResponse>(
    `/crypto/status/${data.payment_id}`
  );
};
