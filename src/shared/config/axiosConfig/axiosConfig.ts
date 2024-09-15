import axios, { AxiosError, isAxiosError } from "axios";
import { updateAccessToken } from "src/shared/API/user/auth/auth";
// import { userCodeError } from "src/shared/constant/backendCodeError/User";
// baseURL: "http://" + import.meta.env.VITE_DOMAIN,
import { userCodeError } from "src/shared/constant/backendCodeError/User";
export const axiosBase = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

axiosBase.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: Error | AxiosError) => {
    if (isAxiosError(error)) {
      const originalRequest = error.config;
      if (error.response?.data.status === userCodeError.JWT_INVALID) {
        window.location.href = "/login";
      } else if (
        error.response?.data.status === userCodeError.JWT_EXPIRED &&
        originalRequest
      ) {
        return updateAccessToken()
          .then(() => {
            return axiosBase.request(originalRequest);
          })
          .catch(() => {
            window.location.href = "/login";
          });
      }
    }

    throw error;
  }
);
