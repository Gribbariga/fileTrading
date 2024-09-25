export interface ICreateKey2FAResponse {
  key_2fa: string;
}

export interface IVerifyKey2FAArg {
  two_fa_code: string;
  account_id: string;
}

export interface IVerifyKey2FAResponse {
  verify: boolean;
}

export interface ISetTwoFaArg {
  two_fa_key: string;
  two_fa_code: string;
}
