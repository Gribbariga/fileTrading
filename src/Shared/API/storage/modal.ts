export interface IGetFilesArg {
  folderId: string;
  viewPassword: string;
}

export interface IFiles {
  id: number;
  name: string;
  size: number;
  extension: string;
}

export interface IGetFilesResponse {
  file_count: number;
  folder_name: string;
  lifetime: number;
  folder_size: number;
  folder_id: string;
  files: IFiles[];
}
