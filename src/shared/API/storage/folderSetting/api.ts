import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IEditViewPasswordArg,
  IToggleDownloadPasswordArg,
  IUpdateLifeTimeArg,
} from "./model";

export const toggleDownloadPassword = (arg: IToggleDownloadPasswordArg) => {
  axiosBase.patch("/api/storage/folder/setting/download_password", arg);
};

export const editViewPassword = (arg: IEditViewPasswordArg) => {
  axiosBase.patch("api/storage/folder/setting/view_password", arg);
};

export const updateLifeTime = (arg: IUpdateLifeTimeArg) => {
  axiosBase.patch("api/storage/folder/setting/lifetime", arg);
};