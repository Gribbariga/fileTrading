interface ILoginInfo {
  user_id: number;
}

export interface IUser {
  user_id: number | null;
  setInfo: (info: ILoginInfo) => void;
}
