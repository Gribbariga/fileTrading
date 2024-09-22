import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";

export const updateAccessToken = async () => {
  return axiosBase.post("/api/user/token/refresh");
};
