export interface IGetFilesArg {
  folder_id: string;
  view_password: string;
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

export interface IGetOneTimesViewArg {
  onetime_link: string;
  view_password: string;
}

export interface IGetOneTimesViewResponse {
  file_count: number;
  folder_name: string;
  lifetime: number;
  folder_size: number;
  folder_id: string;
  files: IFiles[];
}

export interface ICreateFolderArg {
  lifetime: number; //days
  name: string;
  view_password: string;
  download_password: boolean;
}

export interface ICreateFolderResponse {
  folder_id: string;
  view_link: string;
}

export interface IRenameFolderArg {
  folder_id: string;
  new_name: string;
}

export interface IDownloadFolderArg {
  folder_id: string;
}

export interface IDeleteFolderArg {
  folder_id: string;
}
export interface IPreviewImage {
  folder_id: string;
  file_db_id: number;
}
