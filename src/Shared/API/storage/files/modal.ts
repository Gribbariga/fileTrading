export interface IUploadFileArg {
  file: File;
  folder_id: string;
}

export interface IUploadFileResponse {
  download_link: string;
}
