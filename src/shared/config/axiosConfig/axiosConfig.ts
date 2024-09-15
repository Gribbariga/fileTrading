import axios, { AxiosError, isAxiosError } from "axios";
// import { userCodeError } from "src/shared/constant/backendCodeError/User";
// baseURL: "http://" + import.meta.env.VITE_DOMAIN,

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
      // if (error.response?.data.status === userCodeError.JWT_INVALID) {
      // }
      // у;
    }
    // if (
    //   error.response.status === 401 &&
    //   error.config &&
    //   !error.config._isRetry
    // ) {
    //   originalRequest._isRetry = true;
    //   try {
    //     const res = await updateToken();
    //     if (res.data && res.data.access_token) {
    //       setCookie("accessToken", res.data.access_token, { maxAge: 1800000 });
    //     }
    //     return AxiosToken.request(originalRequest);
    //   } catch {
    //     throw error;
    //   }
    // }
    throw error;
  }
);
