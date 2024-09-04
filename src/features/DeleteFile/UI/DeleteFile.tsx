import { Cross1Icon } from "@radix-ui/react-icons";
import { FC } from "react";
import { deleteFile as deleteFileFetch } from "shared/API/storage/files/api";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { userSlice } from "src/entities/user/model/userSlice";

interface IDeleteFileProps {
  fileDbId: number;
}

export const DeleteFile: FC<IDeleteFileProps> = ({ fileDbId }) => {
  const { storage, deleteFile } = storageSlice((state) => state);

  const { token } = userSlice((state) => state);

  const handleDeleteFile = () => {
    if (storage && token) {
      deleteFileFetch(
        {
          file_db_id: fileDbId,
          folder_id: storage.folder_id,
        },
        token
      ).then(() => {
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
