import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "http://" + import.meta.env.VITE_DOMAIN,
});
