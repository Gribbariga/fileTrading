import { axiosBaseAccount } from "src/shared/config/axiosConfig/axiosConfig";

export const refreshTokens = async () => {
  return axiosBaseAccount.post("/token/refresh");
};
