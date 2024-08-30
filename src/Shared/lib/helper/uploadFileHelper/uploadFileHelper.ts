import { uploadFile } from "shared/API/storage/files/api";
import { ITariffs } from "shared/API/subscription/modal";

export const uploadFileHelper = (
  files: FileList,
  currentTariff: ITariffs,
  folder_id: string
) => {
  for (let i = 0; i < files.length; i++) {
    console.log("start");
    const fileSizeInMB = files[i].size;
    console.log(files[i]);
    if (i < 3 && fileSizeInMB <= +currentTariff.max_file_size) {
      return uploadFile({ file: files[i], folder_id: folder_id });
    }
  }
};
