export interface IUploadFileArg {
  file: File;
  folder_id: string;
}

export interface IUploadFileResponse {
  download_link: string;
}

export interface IDownloadFileArg {
  folder_id: string;
  file_db_id: number;
}

export interface IDeleteFileArg {
  folder_id: string;
  file_db_id: number;
}

export interface IPreviewImageArg {
  folder_id: string;
  file_id: string;
}
