import axios from "axios";
// baseURL: "http://" + import.meta.env.VITE_DOMAIN,

export const axiosBase = axios.create({
  baseURL: "api",
});
