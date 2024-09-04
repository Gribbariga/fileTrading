import { axiosBase } from "src/shared/config/axiosConfig/axiosConfig";
import {
  ICreateDescriptionArg,
  ICreateDescriptionResponse,
  IEditDescriptionArg,
} from "./mode";

export const createDescription = (
  arg: ICreateDescriptionArg,
  token: string
) => {
  return axiosBase.post<ICreateDescriptionResponse>(
    "api/storage/folder/description/create",
    arg,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    }
  );
};

export const editDescription = (arg: IEditDescriptionArg, token: string) => {
  return axiosBase.patch("api/storage/folder/description/edit", arg, {
    headers: {
      "Content-Type": "multipart/form-data",
      token: token,
    },
  });
};
