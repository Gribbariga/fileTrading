import { axiosBase } from "../../../config/axiosConfig/axiosConfig";
import { IUploadFileArg, IUploadFileResponse } from "./modal";

export const uploadFile = async (arg: IUploadFileArg) => {
  return await axiosBase.post<IUploadFileResponse>(
    `/api/storage/file/upload`,
    arg
  );
};
