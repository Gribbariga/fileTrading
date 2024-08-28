import { DownloadIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { FC } from "react";
import { downloadFile } from "shared/API/storage/files/api";
import { storageSlice } from "src/entities/storage/modal/storageSlice";

interface IDownloadFileProps {
  fileDbId: number;
}

export const DownloadFile: FC<IDownloadFileProps> = ({ fileDbId }) => {
  const { folderId } = storageSlice((state) => state);

  const handleDownloadFile = () => {
    if (folderId) {
      downloadFile({ folder_id: folderId, file_db_id: fileDbId });
    }
  };

  return (
    <IconButton
      size={"4"}
      variant="ghost"
      highContrast={false}
      loading={false}
      onClick={handleDownloadFile}
    >
      <DownloadIcon />
    </IconButton>
  );
};
