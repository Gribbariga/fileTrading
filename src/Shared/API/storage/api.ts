import { axiosBase } from "../../config/axiosConfig/axiosConfig";
import {
  IGetFilesArg,
  IGetFilesResponse,
  IGetOneTimesViewArg,
  IGetOneTimesViewResponse,
} from "./modal";

export const getFiles = (arg: IGetFilesArg) => {
  axiosBase.get<IGetFilesResponse>(`view/${arg.folderId}/${arg.viewPassword}`);
};

export const oneTimeView = (arg: IGetOneTimesViewArg) => {
  axiosBase.get<IGetOneTimesViewResponse>(
    `/view/one/${arg.oneTimeLink}/${arg.viewPassword}`
  );
};
