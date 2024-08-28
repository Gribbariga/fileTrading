export interface IStorageSlice {
  folderId: string | undefined;
  setFolderId: (folderId: string) => void;
}
