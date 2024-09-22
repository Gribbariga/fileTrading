import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";

export const refreshTokens = async () => {
  return axiosBase.post("/token/refresh");
};
