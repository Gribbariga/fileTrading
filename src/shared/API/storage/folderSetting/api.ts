import { axiosBaseStorage } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IEditViewPasswordArg,
  IToggleNeedPasswordArg,
  IUpdateLifeTimeArg,
} from "./model";

export const toggleNeedPassword = (arg: IToggleNeedPasswordArg) => {
  return axiosBaseStorage.patch(
    `/folder/setting/need_password/${arg.folder_id}`
  );
};

export const editViewPassword = (arg: IEditViewPasswordArg) => {
  return axiosBaseStorage.patch(
    `/folder/setting/view_password/${arg.folder_id}`,
    arg
  );
};

export const updateLifeTime = (arg: IUpdateLifeTimeArg) => {
  return axiosBaseStorage.patch(
    `/folder/setting/lifetime/${arg.folder_id}/${arg.new_lifetime}`
  );
};
