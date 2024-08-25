import { axiosBase } from "../../config/axiosConfig/axiosConfig";
import {
  ICreateFolderArg,
  ICreateFolderResponse,
  IGetFilesArg,
  IGetFilesResponse,
  IGetOneTimesViewArg,
  IGetOneTimesViewResponse,
} from "./modal";

export const getFiles = async (arg: IGetFilesArg) => {
  return await axiosBase.get<IGetFilesResponse>(
    `view/${arg.folder_id}/${arg.view_password}`
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
