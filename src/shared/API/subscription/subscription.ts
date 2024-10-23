import { axiosBaseSubscription } from "shared/config/axiosConfig/axiosConfig";
import {
  IGetPriceArg,
  IGetPriceResponse,
  ISubscriptionStatusResponse,
  TGetTarrifs,
} from "./model";

export const getTarrifs = async () => {
  return await axiosBaseSubscription.get<TGetTarrifs>("/tariffs");
};

export const subscriptionStatus = async () => {
  return await axiosBaseSubscription.get<ISubscriptionStatusResponse>(
    `/status`
  );
};

export const getPrice = async (data: IGetPriceArg) => {
  return await axiosBaseSubscription.get<IGetPriceResponse>(
    `/price/${data.currency}/${data.tariff_id}/${data.duration}/${data.account_id}`
  );
};
