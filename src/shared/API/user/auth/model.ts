export interface IRegisterArg {
  login: string;
  password: string;
  email?: string;
}

export interface IRegisterResponse {
  login: string;
  email: string;
  user_id: number;
}

export interface ILoginArg {
  login?: string;
  email?: string;
  password: string;
}

export interface ILoginResponse {
  login: string;
  email: string;
  user_id: number;
}
