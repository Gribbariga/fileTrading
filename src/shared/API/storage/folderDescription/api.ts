import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  ICreateDescriptionArg,
  ICreateDescriptionResponse,
  IEditDescriptionArg,
} from "./mode";

export const createDescription = (arg: ICreateDescriptionArg) => {
  return axiosBase.post<ICreateDescriptionResponse>(
    "api/storage/folder/description/create",
    arg
  );
};

export const editDescription = (arg: IEditDescriptionArg) => {
  return axiosBase.patch("api/storage/folder/description/edit", arg);
};
