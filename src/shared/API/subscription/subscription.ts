import { axiosBase } from "shared/config/axiosConfig/axiosConfig";
import { ISubscriptionStatusResponse, TGetTarrifs } from "./model";

export const getTarrifs = async () => {
  return await axiosBase.get<TGetTarrifs>("/api/subscription/tariffs");
};

export const subscriptionStatus = async () => {
  return await axiosBase.get<ISubscriptionStatusResponse>(`/status`);
};
