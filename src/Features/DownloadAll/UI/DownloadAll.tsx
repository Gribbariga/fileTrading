import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { downLoadFolder } from "shared/API/storage/folder/api.ts";
import { ButtonUI } from "shared/ButtonUI/ButtonUI";

export const DownloadAll = () => {
  const { storage } = storageSlice((state) => state);

  const handleDownload = () => {
    if (storage?.folder_id) {
      downLoadFolder({ folder_id: storage?.folder_id });
    }
  };

  return (
    <>
      <ButtonUI
        size={"3"}
        onClick={handleDownload}
        variant="outline"
        highContrast={false}
        loading={false}
      >
        Скачать все
      </ButtonUI>
    </>
  );
};
