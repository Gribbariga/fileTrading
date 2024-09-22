import { axiosBaseStorage } from "src/shared/config/axiosConfig/axiosConfig";
import {
  IAddDescriptionArg,
  IAddDescriptionResponse,
  IEditDescriptionArg,
} from "./model";

export const addDescription = (arg: IAddDescriptionArg) => {
  const data = {
    name: arg.name,
    description: arg.description,
  };
  return axiosBaseStorage.post<IAddDescriptionResponse>(
    `/folder/description/add/${arg.folder_id}`,
    data
  );
};

export const editDescription = (arg: IEditDescriptionArg) => {
  const data = {
    new_description: arg.new_description,
  };

  return axiosBaseStorage.patch(
    `/folder/description/edit/${arg.folder_id}`,
    data
  );
};
