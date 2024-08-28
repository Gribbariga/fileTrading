import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { Button } from "@radix-ui/themes";
import { downLoadFolder } from "shared/API/storage/folder/api.ts";

export const DownloadAll = () => {
  const { storage } = storageSlice((state) => state);

  const handleDownload = () => {
    if (storage?.folder_id) {
      downLoadFolder({ folder_id: storage?.folder_id });
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
