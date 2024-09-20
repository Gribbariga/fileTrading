import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IChangePasswordArg,
  ILoginArg,
  ILoginResponse,
  IRegisterArg,
  IRegisterResponse,
} from "./model";

export const register = (arg: IRegisterArg) => {
  return axiosBase.post<IRegisterResponse>("/api/user/register", arg);
};

export const login = (arg: ILoginArg) => {
  return axiosBase.post<ILoginResponse>("/api/user/login", arg);
};

export const updateAccessToken = async () => {
  return axiosBase.post("/api/user/token/refresh");
};

export const changePassword = async (arg: IChangePasswordArg) => {
  return axiosBase.patch<null>("/api/user/password/change", {
    data: arg,
  });
};
