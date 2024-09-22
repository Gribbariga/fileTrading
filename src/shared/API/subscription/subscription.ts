import { axiosBaseSubscription } from "shared/config/axiosConfig/axiosConfig";
import { ISubscriptionStatusResponse, TGetTarrifs } from "./model";

export const getTarrifs = async () => {
  return await axiosBaseSubscription.get<TGetTarrifs>(
    "/api/subscription/tariffs"
  );
};

export const subscriptionStatus = async () => {
  return await axiosBaseSubscription.get<ISubscriptionStatusResponse>(
    `/status`
  );
};
