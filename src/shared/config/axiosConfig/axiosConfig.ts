import axios from "axios";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie";
// baseURL: "http://" + import.meta.env.VITE_DOMAIN,

export const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
});

axiosBase.interceptors.request.use((config) => {
  const accessToken = getCookie("token");
  config.headers.token = accessToken || undefined;
  return config;
});
