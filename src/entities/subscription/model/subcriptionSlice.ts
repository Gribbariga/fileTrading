import { create } from "zustand";
import { ISubcriptionSlice } from "./model";
import { getTarrifs } from "shared/API/subscription/subscription";

export const subscriptionSlice = create<ISubcriptionSlice>((set) => ({
  tariffs: null,
  subscribeStatus: null,
  setSubscribeStatus: (info) => {
    set((state) => ({ ...state, subscribeStatus: info }));
  },
  fetchTarrifs: () => {
    getTarrifs().then(({ data }) => {
      set((state) => ({ ...state, tariffs: data.tariffs }));
    });
  },
}));
