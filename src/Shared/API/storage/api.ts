import { axiosBase } from "../../config/axiosConfig/axiosConfig";
import { IGetFilesArg, IGetFilesResponse } from "./modal";

export const getFiles = (arg: IGetFilesArg) => {
  axiosBase.get<IGetFilesResponse>(`view/${arg.folderId}/${arg.viewPassword}`);
};
