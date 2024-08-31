import { storageSlice } from "src/entities/storage/model/storageSlice";
import { downLoadFolder } from "shared/API/storage/folder/api.ts";
import { ButtonUI } from "shared/ButtonUI/ButtonUI";

export const DownloadAll = () => {
  const { storage } = storageSlice((state) => state);

  const handleDownload = () => {
    if (storage?.folder_id) {
      downLoadFolder({ folder_id: storage?.folder_id }).then(({ data }) => {
        try {
          const url = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement("a");
          link.href = url;

          // Указываем имя файла
          link.setAttribute("download", `${storage.folder_id}.rar`); // Замените на нужное имя и расширение файла (например, file.pdf)

          // Добавляем ссылку в документ
          document.body.appendChild(link);
          link.click();
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        } catch {
          console.log("error download");
        }
      });
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
