type TErrorMessages = {
  [key: number]: { [key: string]: string } | string;
};

export const backendCodeError: TErrorMessages = {
  "409": {
    "User already exists": "Этот логин занят",
  },
  "403": {
    "Wrong password": "Неправильный логин или пароль",
  },
  "404": {
    '"User not found"': "Неправильный логин или пароль",
  },
  "500": "Что то пошло не так",
};
