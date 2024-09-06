import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IEditViewPasswordArg,
  IToggleDownloadPasswordArg,
  IUpdateLifeTimeArg,
} from "./model";

export const toggleDownloadPassword = (
  arg: IToggleDownloadPasswordArg,
  token: string
) => {
  return axiosBase.patch("/api/storage/folder/setting/download_password", arg, {
    headers: {
      token: token,
    },
  });
};

export const editViewPassword = (arg: IEditViewPasswordArg, token: string) => {
  return axiosBase.patch("/api/storage/folder/setting/view_password", arg, {
    headers: {
      token: token,
    },
  });
};

export const updateLifeTime = (arg: IUpdateLifeTimeArg, token: string) => {
  return axiosBase.patch("/api/storage/folder/setting/lifetime", arg, {
    headers: {
      token: token,
    },
  });
};
