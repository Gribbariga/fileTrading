import { axiosBaseSubscription } from "shared/config/axiosConfig/axiosConfig";
import { ISubscriptionStatusResponse, TGetTarrifs } from "./model";

export const getTarrifs = async () => {
  return await axiosBaseSubscription.get<TGetTarrifs>("/tariffs");
};

export const subscriptionStatus = async () => {
  return await axiosBaseSubscription.get<ISubscriptionStatusResponse>(
    `/status`
  );
};
