import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IRegisterArg, IRegisterResult } from "./model";

export const register = (arg: IRegisterArg) => {
  return axiosBase.post<IRegisterResult>("api/user/register", arg);
};

export const login = () => {
  return axiosBase.post();
};
