interface ILoginInfo {
  token?: string;
  user_id: number;
  email: string;
  login: string;
}

export interface IUser {
  token?: string;
  user_id: number | null;
  email: string;
  login: string;
  setInfo: (token: ILoginInfo) => void;
}
