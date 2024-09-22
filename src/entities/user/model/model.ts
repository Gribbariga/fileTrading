import { IInfoResponse } from "src/shared/API/account/account/model";

type IUserInfo = IInfoResponse;

export interface IUser {
  userInfo: IUserInfo | null;
  setInfo: (info: IUserInfo) => void;
}
