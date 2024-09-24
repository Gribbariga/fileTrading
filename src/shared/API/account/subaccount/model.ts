export interface IRegisterSubaccountArg {
  subaccount_login: string;
  subaccount_password: string;
}

export interface IChangePasswordSubaccount {
  new_password: string;
  subaccount_login: string;
  two_fa_code: string;
}

export interface ISubaccount {
  login: string;
}

export interface IAllSubaccountRequest {
  subaccounts: ISubaccount;
}
