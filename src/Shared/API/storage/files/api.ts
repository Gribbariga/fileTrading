import { axiosBase } from "../../../config/axiosConfig/axiosConfig";
import {
  IDeleteFileArg,
  IDownloadFileArg,
  IUploadFileArg,
  IUploadFileResponse,
} from "./modal";

export const uploadFile = async (arg: IUploadFileArg) => {
  const newFormData = new FormData();
  newFormData.append("file", arg.file);
  newFormData.append("folder_id", arg.folder_id);
  return await axiosBase.post<IUploadFileResponse>(
    `/api/storage/file/upload`,
    newFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
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

export const deleteFile = async (arg: IDeleteFileArg) => {
  return await axiosBase.delete<null>(
    `/api/storage/file/delete/${arg.folder_id}/${arg.file_db_id}`
  );
};
