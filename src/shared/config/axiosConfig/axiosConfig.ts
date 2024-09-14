import axios from "axios";
// baseURL: "http://" + import.meta.env.VITE_DOMAIN,

export const axiosBase = axios.create({
  baseURL: "http://" + import.meta.env.VITE_DOMAIN,
  withCredentials: true,
});

// axiosBase.interceptors.request.use((config) => {
//   const accessToken = getCookie("token");
//   config.headers.token = accessToken || undefined;
//   return config;
// });
