import { create } from "zustand";
import { IUser } from "./model";

export const userSlice = create<IUser>((set) => ({
  user_id: null,
  setInfo: (info) => {
    console.log(info);
    set((state) => ({ ...state, ...info }));
  },
}));
