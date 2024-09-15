import { create } from "zustand";
import { IUser } from "./model";

export const userSlice = create<IUser>((set) => ({
  userInfo: null,
  setInfo: (info) => {
    console.log(info);
    set((state) => ({ ...state, userInfo: info }));
  },
}));
