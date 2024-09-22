import { IGetUserInfoResponse } from "src/shared/API/account/account/model";

type IUserInfo = IGetUserInfoResponse;

export interface IUser {
  userInfo: IUserInfo | null;
  setInfo: (info: IUserInfo) => void;
}
