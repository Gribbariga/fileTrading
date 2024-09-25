import { uploadFile } from "shared/API/storage/files/api";
import { ITariffs } from "src/shared/API/subscription/model";

export const uploadFileHelper = (
  files: FileList,
  currentTariff: ITariffs,
  folder_id: string
) => {
  for (let i = 0; i < files.length; i++) {
    const fileSizeInMB = files[i].size;
    console.log(i);
    console.log(currentTariff.max_file_in_folder);
    console.log(fileSizeInMB);
    console.log(+currentTariff.max_file_size);
    if (currentTariff.max_file_in_folder === -1) {
      if (fileSizeInMB <= +currentTariff.max_file_size) {
        uploadFile({ file: files[i], folder_id: folder_id });
      }
    } else {
      if (
        i < currentTariff.max_file_in_folder &&
        fileSizeInMB <= +currentTariff.max_file_size
      ) {
        uploadFile({ file: files[i], folder_id: folder_id });
      }
    }
  }
};
