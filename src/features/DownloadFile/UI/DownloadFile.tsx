import { DownloadIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { downloadFile } from "shared/API/storage/files/api";
import { IconButtonUI } from "shared/IconButtonUI/IconButtonUI";
import { storageSlice } from "src/entities/storage/model/storageSlice";

interface IDownloadFileProps {
  fileDbId: number;
  fileName: string;
}

export const DownloadFile: FC<IDownloadFileProps> = ({
  fileDbId,
  fileName,
}) => {
  const { storage } = storageSlice((state) => state);

  const handleDownloadFile = () => {
    if (storage) {
      downloadFile({
        folder_id: storage.folder_id,
        file_db_id: fileDbId,
      }).then(({ data }) => {
        try {
          const url = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement("a");
          link.href = url;

          // Указываем имя файла
          link.setAttribute("download", fileName); // Замените на нужное имя и расширение файла (например, file.pdf)

          // Добавляем ссылку в документ
          document.body.appendChild(link);
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        } catch {
          ("error download");
        }
      });
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
