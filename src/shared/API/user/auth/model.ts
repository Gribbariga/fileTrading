export interface IRegisterArg {
  login: string;
  passwod: string;
  email?: string;
}

export interface IRegisterResponse {
  token: string;
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
  token: string;
  login: string;
  email: string;
  user_id: number;
}
