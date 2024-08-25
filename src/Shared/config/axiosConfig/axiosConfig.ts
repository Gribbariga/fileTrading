import axios from "axios";

export const axiosBase = axios.create({
  baseURL: process.env.VITE_DOMAIN,
});
