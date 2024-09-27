import { axiosBaseStorage } from "../../../config/axiosConfig/axiosConfig";
import {
  ICreateFolderArg,
  ICreateFolderResponse,
  ICreateOneTimeLinkArg,
  ICreateOneTimeLinkResponse,
  IDeleteFolderArg,
  IDownloadFolderArg,
  IGetAllFolderResponse,
  IViewFolderArg,
  IViewFolderResponse,
  IGetOneTimesViewArg,
  IGetOneTimesViewResponse,
  IRenameFolderArg,
  IViewFolderPassword,
} from "./model";

export const viewFolder = async (arg: IViewFolderArg) => {
  return await axiosBaseStorage.get<IViewFolderResponse | IViewFolderPassword>(
    `/folder/view/${arg.folder_id}/${arg.view_password}`
  );
};
export const oneTimeView = async (arg: IGetOneTimesViewArg) => {
  return await axiosBaseStorage.get<IGetOneTimesViewResponse>(
    `/view/one/${arg.onetime_link}/${arg.view_password}`
  );
};

export const createFolder = async (arg: ICreateFolderArg) => {
  return await axiosBaseStorage.post<ICreateFolderResponse>(
    "/folder/create",
    arg
  );
};
export const renameFolder = async (arg: IRenameFolderArg) => {
  const data = {
    new_name: arg.new_name,
  };
  return await axiosBaseStorage.patch<null>(
    `/folder/rename/${arg.folder_id}`,
    data
  );
};
export const downLoadFolder = async (arg: IDownloadFolderArg) => {
  return await axiosBaseStorage.get(`/folder/download/${arg.folder_id}`, {
    // responseType: "blob",
    responseType: "arraybuffer",
  });
};

export const deleteFolder = async (arg: IDeleteFolderArg) => {
  return await axiosBaseStorage.delete<null>(`/folder/delete/${arg.folder_id}`);
};

export const createOneTimeLink = async (arg: ICreateOneTimeLinkArg) => {
  return await axiosBaseStorage.post<ICreateOneTimeLinkResponse>(
    `/folder/onetime/create/${arg.folder_id}`
  );
};
export const getAllFolder = async () => {
  return await axiosBaseStorage.get<IGetAllFolderResponse>("/folder/all");
};
