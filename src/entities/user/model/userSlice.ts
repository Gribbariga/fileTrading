import { create } from "zustand";
import { IUser } from "./model";

export const subscriptionSlice = create<IUser>((set) => ({
  token: "",
  setToken: (newToken) => set((state) => ({ ...state, token: newToken })),
}));
