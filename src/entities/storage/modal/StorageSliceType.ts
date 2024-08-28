import { IGetFilesResponse as IStorage } from "shared/API/storage/folder/modal";

export interface IStorageSlice {
  isLoading: boolean;
  storage: IStorage | undefined;
  setFolderId: (folderId: string) => void;
  getStorage: (folder_id: string, view_password: string) => void;
}
