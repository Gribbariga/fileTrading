export interface ICreateKey2FAResponse {
  key_2fa: string;
}

export interface IVerifyKey2FAArg {
  code_2fa: string;
}

export interface IVerifyKey2FAResponse {
  verify: boolean;
}
