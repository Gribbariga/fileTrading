export interface IGetFilesArg {
  folder_id: string;
  view_password: string;
}

export interface IFiles {
  id: number;
  name: string;
  size: number;
  extension: string;
  created_at: string;
  updated_at: string;
}

export interface IGetFilesResponse {
  file_count: number;
  folder_name: string;
  lifetime: number;
  folder_size: number;
  owner_name: string;
  description_id: number;
  folder_id: string;
  owner_id: number;
  download_count: number;
  view_count: number;
  download_password: boolean;
  created_at: string;
  updated_at: string;
  files: IFiles[];
}

export interface IGetFilesResponsePassword {
  view_password: boolean;
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
  name?: string;
  view_password?: string;
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

export interface IPreviewImageArg {
  folder_id: string;
  file_db_id: number;
}

export interface ICreateOneTimeLinkArg {
  folder_id: string;
}

export interface ICreateOneTimeLinkResponse {
  onetime_link: string;
}

export interface IFolder {
  folder_id: string;
  user_id: number;
  owner_name: string;
  description_id: null | number;
  name: string;
  size: string;
  file_count: number;
  download_count: number;
  view_count: number;
  lifetime: number;
  view_password: null;
  download_password: boolean;
  edit_permissions: boolean;
  created_at: string;
  updated_at: string;
}
export interface IGetAllFolderResponse {
  folders: IFolder[];
}
