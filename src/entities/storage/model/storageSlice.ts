import { create } from "zustand";
import { IStorageSlice } from "./StorageSliceType";
import { getFiles } from "shared/API/storage/folder/api";
import { AxiosError, isAxiosError } from "axios";
import { IFiles } from "src/shared/API/storage/folder/model";

export const storageSlice = create<IStorageSlice>((set) => ({
  storage: undefined,
  isLoading: false,
  isNotFound: false,
  isPassword: false,
  isGuest: true,
  yourFolderId: "",
  description: undefined,
  downloadPassword: undefined,
  addFiles: (files) => {
    const result: IFiles[] = [];
    const now = new Date();
    const pad = (num: number) => String(num).padStart(2, "0");

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1); // месяцы начинаются с 0
    const day = pad(now.getDate());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    for (let i = 0; i < files.length; i++) {
      result.push({
        created_at: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
        updated_at: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
        extension: "",
        id: i,
        name: files[i].name,
        size: files[i].size,
      });
    }
    set((state) => {
      if (state.storage?.files) {
        return {
          ...state,
          storage: {
            ...state.storage,
            files: [...state.storage.files, ...result],
          },
        };
      }
      return { ...state };
    });
  },
  setDownloadPassword: (value) => {
    console.log(value);
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
