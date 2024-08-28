import { axiosBase } from "shared/config/axiosConfig/axiosConfig";
import { TGetTarrifs } from "./modal";

export const getTarrifs = async () => {
  return await axiosBase.get<TGetTarrifs>("api/subscription/tariffs");
};
