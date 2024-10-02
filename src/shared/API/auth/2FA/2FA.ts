import { axiosBaseAuth } from "src/shared/config/axiosConfig/axiosConfig";
import {
  ISetTwoFaArg,
  ISetTwoFaResponse,
  IVerifyKey2FAArg,
  IVerifyKey2FAResponse,
} from "./model";

export const createTwoFa = async () => {
  return await axiosBaseAuth.post("/two_fa/create", {
    responseType: "blob",
    contentType: "image/png",
  });
};

export const verifyTwoFa = (arg: IVerifyKey2FAArg) => {
  return axiosBaseAuth.get<IVerifyKey2FAResponse>(
    `/two_fa/verify/${arg.account_id}/${arg.two_fa_code}`
  );
};

export const setTwoFA = async (arg: ISetTwoFaArg) => {
  return axiosBaseAuth.post<ISetTwoFaResponse>("/two_fa/set", arg);
};

export const deleteKeyTwoFa = async () => {
  return axiosBaseAuth.delete("/two_fa/delete");
};
