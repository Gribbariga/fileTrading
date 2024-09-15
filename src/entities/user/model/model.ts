import { IGetUserInfoResponse } from "src/shared/API/user/user/model";

type IUserInfo = IGetUserInfoResponse;

export interface IUser {
  userInfo: IUserInfo | null;
  setInfo: (info: IUserInfo) => void;
}
