import { axiosBaseAccount } from "src/shared/config/axiosConfig/axiosConfig";
import { IVerifyKey2FAArg, IVerifyKey2FAResponse } from "./model";

export const createTwoFa = () => {
  return axiosBaseAccount.post("/two_fa/create", {
    responseType: "blob",
  });
};

export const verifyTwoFa = (arg: IVerifyKey2FAArg) => {
  return axiosBaseAccount.get<IVerifyKey2FAResponse>(
    `/two_fa/verify//${arg.two_fa_code}`
  );
};
