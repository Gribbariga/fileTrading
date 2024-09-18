import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  ILoginArg,
  ILoginResponse,
  IRecoveryWith2FaArg,
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

export const recoveryWith2Fa = async (arg: IRecoveryWith2FaArg) => {
  return axiosBase.get("/api/user/recovery/two-fa/2fa", {
    data: arg,
  });
};
