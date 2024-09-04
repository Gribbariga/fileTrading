import { axiosBase } from "../../../config/axiosConfig/axiosConfig";
import {
  IDeleteFileArg,
  IDownloadFileArg,
  IPreviewImageArg,
  IUploadFileArg,
  IUploadFileResponse,
} from "./model";

export const uploadFile = async (arg: IUploadFileArg, token?: string) => {
  const newFormData = new FormData();
  newFormData.append("file", arg.file);
  newFormData.append("folder_id", arg.folder_id);
  return await axiosBase.post<IUploadFileResponse>(
    `/api/storage/file/upload`,
    newFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    }
  );
};

export const downloadFile = async (arg: IDownloadFileArg) => {
  return await axiosBase.get(
    `/api/storage/file/download/${arg.folder_id}/${arg.file_db_id}`,
    {
      responseType: "blob",
    }
  );
};

export const previewImage = async (arg: IPreviewImageArg) => {
  return await axiosBase.get(
    `api/storage/folder/view/image/${arg.folder_id}/${arg.file_id}`
  );
};

export const deleteFile = async (arg: IDeleteFileArg, token: string) => {
  return await axiosBase.delete<null>(
    `/api/storage/file/delete/${arg.folder_id}/${arg.file_db_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    }
  );
};
