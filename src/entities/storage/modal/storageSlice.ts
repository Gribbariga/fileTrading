import { create } from "zustand";
import { IStorageSlice } from "./StorageSliceType";
import { getFiles } from "shared/API/storage/folder/api";

export const storageSlice = create<IStorageSlice>((set) => ({
  storage: undefined,
  isLoading: false,
  getStorage: (folder_id, view_password) => {
    set((state) => ({ ...state, isLoading: true }));
    getFiles({ folder_id: folder_id, view_password: view_password }).then(
      ({ data }) => {
        set((state) => ({ ...state, storage: data, isLoading: false }));
      }
    );
  },
  setFolderId: (id) => {
    set((state) => ({ ...state, folderId: id }));
  },
}));
