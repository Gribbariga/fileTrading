import { create } from "zustand";
import { IUser } from "./model";

export const userSlice = create<IUser>((set) => ({
  email: "",
  user_id: null,
  login: "",
  setInfo: (info) => {
    set((state) => ({ ...state, ...info }));
  },
}));
