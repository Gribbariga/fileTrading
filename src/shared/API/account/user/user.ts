import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IGetUserInfoResponse } from "./model";

export const getUserInfo = () => {
  return axiosBase.get<IGetUserInfoResponse>("/api/user/info");
};
