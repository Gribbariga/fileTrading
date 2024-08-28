import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { Button } from "@radix-ui/themes";
import { downLoadFolder } from "shared/API/storage/folder/api.ts";

export const DownloadAll = () => {
  const { folderId } = storageSlice((state) => state);

  const handleDownload = () => {
    if (folderId) {
      downLoadFolder({ folder_id: folderId });
    }
  };

  return (
    <>
      <Button
        size={"3"}
        onClick={handleDownload}
        variant="outline"
        highContrast={false}
        loading={false}
      >
        Скачать все
      </Button>
    </>
  );
};
