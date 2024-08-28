import { create } from "zustand";
import { IStorageSlice } from "./StorageSliceType";

export const storageSlice = create<IStorageSlice>((set) => ({
  folderId: undefined,
  setFolderId: (id) => {
    set((state) => ({ ...state, folderId: id }));
  },
}));
