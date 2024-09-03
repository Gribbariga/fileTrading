type TErrorMessages = {
  [key: number]: { [key: string]: string } | string;
};

export const backendCodeError: TErrorMessages = {
  "409": {
    "User already exists": "Этот логин занят",
  },
  "401": {},
  "500": "Что то пошло не так",
};
