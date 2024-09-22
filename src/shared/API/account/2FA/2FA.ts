import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import { IVerifyKey2FAArg, IVerifyKey2FAResponse } from "./model";

export const createTwoFa = () => {
  return axiosBase.get("/two_fa/create", {
    responseType: "blob",
  });
};

export const verifyTwoFa = (arg: IVerifyKey2FAArg) => {
  return axiosBase.get<IVerifyKey2FAResponse>(
    `/two_fa/verify//${arg.two_fa_code}`
  );
};
