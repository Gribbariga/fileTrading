import { axiosBaseStorage } from "../../../config/axiosConfig/axiosConfig";
import {
  IDeleteFileArg,
  IDownloadFileArg,
  IPreviewImageArg,
  IUploadFileArg,
  IUploadFileResponse,
} from "./model";

export const uploadFile = async (arg: IUploadFileArg) => {
  const newFormData = new FormData();
  newFormData.append("file", arg.file);
  newFormData.append("folder_id", arg.folder_id);
  return await axiosBaseStorage.post<IUploadFileResponse>(
    `/file/upload`,
    newFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const downloadFile = async (arg: IDownloadFileArg) => {
  return await axiosBaseStorage.get(
    `/file/download/${arg.folder_id}/${arg.file_db_id}`,
    {
      responseType: "blob",
    }
  );
};
export const previewImage = async (arg: IPreviewImageArg) => {
  return await axiosBaseStorage.get(
    `/file/image/preview/${arg.folder_id}/${arg.file_id}`,
    {
      responseType: "stream",
    }
  );
};
// https://filesharing-st.ru/file/image/preview/{folder_id}/{file_id}
export const deleteFile = async (arg: IDeleteFileArg) => {
  return await axiosBaseStorage.delete<null>(
    `/file/delete/${arg.folder_id}/${arg.file_id}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
