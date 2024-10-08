import { axiosBaseAccount } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IInfoResponse,
  ILoginFnArg,
  ILoginFnResponse,
  IRegisterArg,
} from "./model";

export const getInfo = () => {
  return axiosBaseAccount.get<IInfoResponse>("/info");
};
export const register = (arg: IRegisterArg) => {
  return axiosBaseAccount.post("/register", arg);
};

export const loginFn = (arg: ILoginFnArg) => {
  return axiosBaseAccount.post<ILoginFnResponse>("/login", arg);
};
