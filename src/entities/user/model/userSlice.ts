import { create } from "zustand";
import { IUser } from "./model";

export const userSlice = create<IUser>((set) => ({
  token: "",
  email: "",
  user_id: null,
  login: "",
  setInfo: (info) => {
    set((state) => ({ ...state, ...info }));
  },
}));
