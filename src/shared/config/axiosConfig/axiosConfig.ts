import axios, { AxiosError, isAxiosError } from "axios";
import { refreshTokens } from "src/shared/API/auth/token/token";
// import { userCodeError } from "src/shared/constant/backendCodeError/User";
// baseURL: "https://" + import.meta.env.VITE_DOMAIN,
import { userCodeError } from "src/shared/constant/backendCodeError/User";
export const axiosBase = axios.create({
  baseURL: "https://" + import.meta.env.VITE_DOMAIN,
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
        return refreshTokens()
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
export const axiosBaseAccount = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://" + import.meta.env.VITE_DOMAIN + "/api/account",
});
export const axiosBaseStorage = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://" + import.meta.env.VITE_DOMAIN + "/api/storage",
});
export const axiosBaseSubscription = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://" + import.meta.env.VITE_DOMAIN + "/api/subscription",
});
export const axiosBasePayment = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://" + import.meta.env.VITE_DOMAIN + "/api/payment",
});

export const axiosBaseAuth = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://" + import.meta.env.VITE_DOMAIN + "/api/auth",
});
