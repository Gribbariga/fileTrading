import { axiosBase } from "../../../config/axiosConfig/axiosConfig";
import {
  IDeleteFileArg,
  IDownloadFileArg,
  IUploadFileArg,
  IUploadFileResponse,
} from "./modal";

export const uploadFile = async (arg: IUploadFileArg) => {
  return await axiosBase.post<IUploadFileResponse>(
    `/api/storage/file/upload`,
    arg
  );
};

export const downloadFile = async (arg: IDownloadFileArg) => {
  return await axiosBase.get<null>(
    `/api/storage/file/download/${arg.folder_id}/${arg.file_db_id}`
  );
};

export const deleteFile = async (arg: IDeleteFileArg) => {
  return await axiosBase.delete<null>(
    `/api/storage/file/delete/${arg.folder_id}/${arg.file_db_id}`
  );
};
