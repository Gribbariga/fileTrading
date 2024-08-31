import { uploadFile } from "shared/API/storage/files/api";
import { ITariffs } from "shared/API/subscription/modal";

export const uploadFileHelper = (
  files: FileList,
  currentTariff: ITariffs,
  folder_id: string
) => {
  for (let i = 0; i < files.length; i++) {
    const fileSizeInMB = files[i].size;
    console.log(files[i]);
    if (
      i < currentTariff.max_file_in_folder &&
      fileSizeInMB <= +currentTariff.max_file_size
    ) {
      uploadFile({ file: files[i], folder_id: folder_id });
    }
  }
};
