import { Cross1Icon } from "@radix-ui/react-icons";
import { FC } from "react";
import { deleteFile as deleteFileFetch } from "shared/API/storage/files/api";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";
import { storageSlice } from "src/entities/storage/model/storageSlice";

interface IDeleteFileProps {
  fileDbId: number;
}

export const DeleteFile: FC<IDeleteFileProps> = ({ fileDbId }) => {
  const { storage, deleteFile } = storageSlice((state) => state);

  const handleDeleteFile = () => {
    if (storage) {
      deleteFileFetch({
        file_id: fileDbId,
        folder_id: storage.folder_id,
      }).then(() => {
        deleteFile(fileDbId);
      });
    }
  };

  return (
    <IconButtonUI
      onClick={handleDeleteFile}
      size={"4"}
      variant="ghost"
      highContrast={false}
      loading={false}
    >
      <Cross1Icon />
    </IconButtonUI>
  );
};
