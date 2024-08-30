import { IGetFilesResponse as IStorage } from "shared/API/storage/folder/modal";

export interface IStorageSlice {
  isLoading: boolean;
  storage: IStorage | undefined;
  isPassword: boolean;
  deleteFile: (id: number) => void;
  setFolderId: (folderId: string) => void;
  getStorage: (folder_id: string, view_password: string) => void;
}
