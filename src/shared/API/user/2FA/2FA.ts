import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  ICreateKey2FAResponse,
  IVerifyKey2FAArg,
  IVerifyKey2FAResponse,
} from "./model";

export const createKey2FA = () => {
  return axiosBase.get<ICreateKey2FAResponse>("/api/user/2fa/google/create");
};

export const verifyKey2FA = (arg: IVerifyKey2FAArg) => {
  return axiosBase.get<IVerifyKey2FAResponse>(
    `/api/user/2fa/google/verify/${arg.code_2fa}`
  );
};
