import { create } from "zustand";
import { IStorageSlice } from "./StorageSliceType";
import { viewFolder } from "shared/API/storage/folder/api";
import { AxiosError, isAxiosError } from "axios";
import { IFiles } from "src/shared/API/storage/folder/model";
import { getCookie } from "src/shared/lib/helper/getCookie/getCookie";

export const storageSlice = create<IStorageSlice>((set) => ({
  storage: undefined,
  isLoading: false,
  isNotFound: false,
  isPassword: false,
  isSetPassword: false,
  isGuest: true,
  yourFolderId: "",
  description: undefined,
  downloadPassword: undefined,
  allFolder: [],

  setAllFolder: (folders) => {
    set((state) => {
      return {
        ...state,
        allFolder: folders,
      };
    });
  },
  setName: (name) => {
    set((state) => {
      if (state.storage) {
        return {
          ...state,
          storage: {
            ...state.storage,
            folder_name: name,
          },
        };
      } else {
        return {
          ...state,
        };
      }
    });
  },
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
    set((state) => ({ ...state, downloadPassword: value }));
  },
  setYourFolderId: (value) => {
    set((state) => ({ ...state, yourFolderId: value }));
  },
  setIsGuest: (value) => {
    set((state) => ({ ...state, isGuest: value }));
  },
  getStorage: (folder_id, view_password, isGuest) => {
    set((state) => ({ ...state, isLoading: true }));
    viewFolder({ folder_id: folder_id, view_password: view_password })
      .then(({ data }) => {
        if ("view_password" in data) {
          set((state) => ({
            ...state,
            isPassword: true,
            isLoading: false,
            isSetPassword: true,
          }));
        } else {
          set((state) => {
            //true
            const userId = getCookie("userId") || -1;

            return {
              ...state,
              storage: data,
              isLoading: false,
              isPassword: false,

              isGuest: +userId !== data && isGuest,
            };
          });
        }
      })
      .catch((error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          if (error.status === 404) {
            set((state) => ({ ...state, isNotFound: true, isLoading: false }));
          }
          if (error.status === 403) {
            set((state) => ({ ...state, isPassword: true, isLoading: false }));
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
