import { IInfoResponse } from "src/shared/API/account/account/model";

type IUserInfo = IInfoResponse;

export interface IUser {
  two_fa?: boolean;
  userInfo: IUserInfo | null;
  setInfo: (info: IUserInfo) => void;
  setTwoFa: (value: boolean) => void;
}
