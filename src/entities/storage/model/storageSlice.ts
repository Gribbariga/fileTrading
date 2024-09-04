import { create } from "zustand";
import { IStorageSlice } from "./StorageSliceType";
import { getFiles } from "shared/API/storage/folder/api";
import { AxiosError, isAxiosError } from "axios";

export const storageSlice = create<IStorageSlice>((set) => ({
  storage: undefined,
  isLoading: false,
  isNotFound: false,
  isPassword: false,
  isGuest: true,
  yourFolderId: "",
  description: undefined,
  downloadPassword: undefined,
  setDownloadPassword: (value) => {
    set((state) => ({ ...state, downloadPassword: value }));
  },
  setYourFolderId: (value) => {
    set((state) => ({ ...state, yourFolderId: value }));
  },
  setIsGuest: (value) => {
    set((state) => ({ ...state, isGuest: value }));
  },
  getStorage: (folder_id, view_password) => {
    set((state) => ({ ...state, isLoading: true }));
    getFiles({ folder_id: folder_id, view_password: view_password })
      .then(({ data }) => {
        console.log(data);
        set((state) => ({ ...state, storage: data, isLoading: false }));
      })
      .catch((error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          if (error.status === 404) {
            set((state) => ({ ...state, isNotFound: true, isLoading: false }));
          }
        }
      });
  },
  deleteFile: (id) => {
    set((state) => {
      if (state.storage) {
        return {
          ...state,
          storage: {
            ...state.storage,
            files: state.storage.files.filter((item) => item.id !== id),
          },
        };
      } else {
        return {
          ...state,
        };
      }
    });
  },
  setFolderId: (id) => {
    set((state) => ({ ...state, folderId: id }));
  },
}));
