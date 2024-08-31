import { axiosBase } from "../../../config/axiosConfig/axiosConfig";
import {
  ICreateFolderArg,
  ICreateFolderResponse,
  ICreateOneTimeLinkArg,
  ICreateOneTimeLinkResponse,
  IDeleteFolderArg,
  IDownloadFolderArg,
  IGetFilesArg,
  IGetFilesResponse,
  IGetOneTimesViewArg,
  IGetOneTimesViewResponse,
  IPreviewImageArg,
  IRenameFolderArg,
} from "./model";

export const getFiles = async (arg: IGetFilesArg) => {
  return await axiosBase.get<IGetFilesResponse>(
    `api/storage/folder/view/${arg.folder_id}/${arg.view_password}`
  );
};

export const oneTimeView = async (arg: IGetOneTimesViewArg) => {
  return await axiosBase.get<IGetOneTimesViewResponse>(
    `/view/one/${arg.onetime_link}/${arg.view_password}`
  );
};

export const createFolder = async (arg: ICreateFolderArg) => {
  return await axiosBase.post<ICreateFolderResponse>(
    "api/storage/folder/create",
    arg
  );
};

export const renameFolder = async (arg: IRenameFolderArg) => {
  return await axiosBase.patch<null>("/api/storage/folder/rename", arg);
};

export const downLoadFolder = async (arg: IDownloadFolderArg) => {
  return await axiosBase.get(`/api/storage/folder/download/${arg.folder_id}`, {
    responseType: "blob",
  });
};

export const deleteFolder = async (arg: IDeleteFolderArg) => {
  return await axiosBase.delete<null>(
    `/api/storage/folder/delete/${arg.folder_id}`
  );
};

export const previewImage = async (arg: IPreviewImageArg) => {
  return await axiosBase.get<null>(
    `/api/storage/folder/view/image/${arg.folder_id}/${arg.file_db_id}`
  );
};

export const createOneTimeLink = async (arg: ICreateOneTimeLinkArg) => {
  return await axiosBase.post<ICreateOneTimeLinkResponse>(
    "/api/storage/folder/onetime/create",
    arg
  );
};
