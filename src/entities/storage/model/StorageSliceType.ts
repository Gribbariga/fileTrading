import {
  IFolder,
  IGetFilesResponse as IStorage,
} from "src/shared/API/storage/folder/model";

export interface IStorageSlice {
  isLoading: boolean;
  storage: IStorage | undefined;
  isNotFound: boolean;
  isPassword: boolean;
  isGuest: boolean;
  yourFolderId: string;
  description?: string;
  downloadPassword?: string;
  allFolder: IFolder[];
  setAllFolder: (folders: IFolder[]) => void;
  setName: (name: string) => void;
  addFiles: (files: FileList) => void;
  setDownloadPassword: (value: string | undefined) => void;
  setYourFolderId: (value: string) => void;
  setIsGuest: (value: boolean) => void;
  deleteFile: (id: number) => void;
  setFolderId: (folderId: string) => void;
  getStorage: (
    folder_id: string,
    view_password: string,
    isGuest: boolean
  ) => void;
}
