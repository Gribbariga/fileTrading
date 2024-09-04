import { axiosBase } from "shared/config/axiosConfig/axiosConfig";
import {
  ISubscriptionStatusArg,
  ISubscriptionStatusResponse,
  TGetTarrifs,
} from "./model";

export const getTarrifs = async () => {
  return await axiosBase.get<TGetTarrifs>("api/subscription/tariffs");
};

export const subscriptionStatus = async (arg: ISubscriptionStatusArg) => {
  return await axiosBase.get<ISubscriptionStatusResponse>(
    `api/subscription/status/${arg.user_id}`
  );
};
