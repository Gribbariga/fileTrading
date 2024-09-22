import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IInfoResponse, ILoginFnArg, IRegisterArg } from "./model";

export const getInfo = () => {
  return axiosBase.get<IInfoResponse>("/info");
};
export const register = (arg: IRegisterArg) => {
  return axiosBase.post("/register", arg);
};

export const loginFn = (arg: ILoginFnArg) => {
  return axiosBase.post("/login", arg);
};
