import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IChangePasswordArg } from "./model";

export const changePassword = async (arg: IChangePasswordArg) => {
  return axiosBase.patch<null>("/password/change", {
    data: arg,
  });
};
