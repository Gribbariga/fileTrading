export interface IInfoResponse {
  login: string;
  email: string;
  created_at: string;
  updated_at: string;
  two_fa: boolean;
}
export interface IRegisterArg {
  login: string;
  password: string;
  email?: string;
}

export interface ILoginFnArg {
  login?: string;
  email?: string;
  password: string;
}
