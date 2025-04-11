import axios, { AxiosError, isAxiosError } from "axios";
import { refreshTokens } from "src/shared/API/auth/token/token";
// import { userCodeError } from "src/shared/constant/backendCodeError/User";
// baseURL: "https://" + import.meta.env.VITE_DOMAIN,
import { userCodeError } from "src/shared/constant/backendCodeError/User";
export const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
  withCredentials: true,
});

const JwtExpired = async (error: Error | AxiosError) => {
  if (isAxiosError(error)) {
    const originalRequest = error.config;

    const status = error.response?.data.status;
    console.log(status);

    if (
      status === userCodeError.JWT_INVALID ||
      status === userCodeError.USER_UNAUTHORIZED
    ) {
      window.location.href = "/login";
      return Promise.reject(error); // Прерываем цепочку
    }

    if (status === userCodeError.JWT_EXPIRED && originalRequest) {
      try {
        await refreshTokens();
        return axiosBase.request(originalRequest); // Повторяем оригинальный запрос
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError); // Прерываем цепочку
      }
    }
  }

  return Promise.reject(error); // Отдаём дальше, если не наш случай
};

axiosBase.interceptors.response.use((config) => {
  return config;
}, JwtExpired);
export const axiosBaseAccount = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://filesharing-dev.ru/api/account",
});
export const axiosBaseStorage = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://filesharing-dev.ru/api/storage",
});
export const axiosBaseSubscription = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://filesharing-dev.ru/api/subscription",
});
export const axiosBasePayment = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://filesharing-dev.ru/api/payment",
});

export const axiosBaseAuth = axios.create({
  ...axiosBase.defaults,
  baseURL: "https://filesharing-dev.ru/api/auth",
});

axiosBaseAuth.interceptors.response.use((config) => {
  return config;
}, JwtExpired);

axiosBaseAccount.interceptors.response.use((config) => {
  return config;
}, JwtExpired);

axiosBaseStorage.interceptors.response.use((config) => {
  return config;
}, JwtExpired);

axiosBaseSubscription.interceptors.response.use((config) => {
  return config;
}, JwtExpired);

axiosBasePayment.interceptors.response.use((config) => {
  return config;
}, JwtExpired);
