export interface ICreateKey2FAResponse {
  key_2fa: string;
}

export interface IVerifyKey2FAArg {
  two_fa_code: string;
  account_id: string;
}

export interface IVerifyKey2FAResponse {
  verified: boolean;
}

export interface ISetTwoFaArg {
  two_fa_key: string;
  two_fa_code: string;
}

export interface ISetTwoFaResponse {
  message: string;
}
