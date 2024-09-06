import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
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
