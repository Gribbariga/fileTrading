interface ILoginInfo {
  user_id: number;
  email: string;
  login: string;
}

export interface IUser {
  user_id: number | null;
  email: string;
  login: string;
  setInfo: (info: ILoginInfo) => void;
}
