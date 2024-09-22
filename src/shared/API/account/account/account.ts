import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IInfoResponse, ILoginFnArg, IRegisterArg } from "./model";

export const getInfo = () => {
  return axiosBase.get<IInfoResponse>("/info");
};
export const register = (arg: IRegisterArg) => {
  return axiosBase.post("/api/account/register", arg);
};

export const loginFn = (arg: ILoginFnArg) => {
  return axiosBase.post("/api/account/login", arg);
};
