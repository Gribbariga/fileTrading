import { create } from "zustand";
import { IUser } from "./model";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie";

export const userSlice = create<IUser>((set) => ({
  userInfo: null,
  two_fa: getCookie("2FA") === "true" ? true : false,
  setInfo: (info) => {
    set((state) => ({ ...state, userInfo: info }));
  },
  setTwoFa: (value) => {
    set((state) => ({ ...state, two_fa: value }));
  },
}));
