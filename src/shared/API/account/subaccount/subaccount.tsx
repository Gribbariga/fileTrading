import { axiosBaseAccount } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IAllSubaccountRequest,
  IChangePasswordSubaccount,
  IRegisterSubaccountArg,
} from "./model";

export const registerSubaccount = (arg: IRegisterSubaccountArg) => {
  return axiosBaseAccount.post("/subaccount/register", arg);
};

export const changePasswordSubaccount = (arg: IChangePasswordSubaccount) => {
  return axiosBaseAccount.patch("/subaccount/password/change", arg);
};

export const getAllSubaccount = () => {
  return axiosBaseAccount.get<IAllSubaccountRequest>("/subaccount/all");
};
