import { axiosBaseAuth } from "src/shared/config/axiosConfig/axiosConfig";

export const refreshTokens = async () => {
  return axiosBaseAuth.post("/token/refresh");
};
