import { create } from "zustand";
import { ISubcriptionSlice } from "./model";
import { getTarrifs } from "shared/API/subscription/subscription";

export const subscriptionSlice = create<ISubcriptionSlice>((set) => ({
  tariffs: null,
  subscription_id: 0,
  fetchTarrifs: () => {
    getTarrifs().then(({ data }) => {
      set((state) => ({ ...state, tariffs: data }));
    });
  },
}));
