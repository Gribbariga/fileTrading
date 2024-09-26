import { axiosBaseAccount } from "src/shared/config/axiosConfig/axiosConfig";
import { IChangePasswordArg } from "./model";

export const changePassword = async (arg: IChangePasswordArg) => {
  return axiosBaseAccount.patch<null>("/password/change", arg);
};
