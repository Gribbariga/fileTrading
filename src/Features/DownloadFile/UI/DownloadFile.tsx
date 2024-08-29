import { DownloadIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { downloadFile } from "shared/API/storage/files/api";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";
import { storageSlice } from "src/entities/storage/modal/storageSlice";

interface IDownloadFileProps {
  fileDbId: number;
}

export const DownloadFile: FC<IDownloadFileProps> = ({ fileDbId }) => {
  const { storage } = storageSlice((state) => state);

  const handleDownloadFile = () => {
    if (storage) {
      downloadFile({ folder_id: storage.folder_id, file_db_id: fileDbId });
    }
  };

  return (
    <IconButtonUI
      size={"4"}
      variant="ghost"
      highContrast={false}
      loading={false}
      onClick={handleDownloadFile}
    >
      <DownloadIcon />
    </IconButtonUI>
  );
};
