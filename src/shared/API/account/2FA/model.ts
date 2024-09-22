export interface ICreateKey2FAResponse {
  key_2fa: string;
}

export interface IVerifyKey2FAArg {
  two_fa_code: string;
}

export interface IVerifyKey2FAResponse {
  verify: boolean;
}
