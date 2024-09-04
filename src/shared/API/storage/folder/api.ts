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

export const createFolder = async (arg: ICreateFolderArg, token?: string) => {
  return await axiosBase.post<ICreateFolderResponse>(
    "api/storage/folder/create",
    arg,
    {
      headers: {
        token: token,
      },
    }
  );
};

export const renameFolder = async (arg: IRenameFolderArg, token?: string) => {
  return await axiosBase.patch<null>("/api/storage/folder/rename", arg, {
    headers: {
      token: token,
    },
  });
};

export const downLoadFolder = async (arg: IDownloadFolderArg) => {
  return await axiosBase.get(`/api/storage/folder/download/${arg.folder_id}`, {
    // responseType: "blob",
    responseType: "arraybuffer",
  });
};

export const deleteFolder = async (arg: IDeleteFolderArg, token?: string) => {
  return await axiosBase.delete<null>(
    `/api/storage/folder/delete/${arg.folder_id}`,
    {
      headers: {
        token: token,
      },
    }
  );
};

export const previewImage = async (arg: IPreviewImageArg) => {
  return await axiosBase.get<null>(
    `/api/storage/folder/view/image/${arg.folder_id}/${arg.file_db_id}`
  );
};

export const createOneTimeLink = async (
  arg: ICreateOneTimeLinkArg,
  token?: string
) => {
  return await axiosBase.post<ICreateOneTimeLinkResponse>(
    "/api/storage/folder/onetime/create",
    arg,
    {
      headers: {
        token: token,
      },
    }
  );
};
