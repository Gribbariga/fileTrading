import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IChangePasswordArg } from "./model";

export const updateAccessToken = async () => {
  return axiosBase.post("/api/user/token/refresh");
};

export const changePassword = async (arg: IChangePasswordArg) => {
  return axiosBase.patch<null>("/api/user/password/change", {
    data: arg,
  });
};
