import { createPortal } from "react-dom";
import { UploadWindowStyle } from "./UploadWindowStyle.ts";
import { Heading, Text } from "@radix-ui/themes";
import { UploadIcon } from "@radix-ui/react-icons";
import { ChangeEvent, DragEvent, useEffect, useRef } from "react";
import { createFolder } from "shared/API/storage/folder/api.ts";
import { uploadFile } from "shared/API/storage/files/api.ts";
import { useNavigate } from "react-router-dom";
import { setCookie } from "shared/lib/helper/setCookie/setCookie.ts";
import { getCookie } from "shared/lib/helper/getCookie/getCookie.ts";
import { subscriptionSlice } from "src/entities/subscription/modal/subcriptionSlice.ts";

export const UploadWindow = () => {
  const navigation = useNavigate();
  const { tariffs, subscription_id } = subscriptionSlice((state) => state);

  const inputUploadRef = useRef<HTMLInputElement>(null);

  const currentTariff = tariffs !== null ? tariffs[subscription_id] : null;

  const fetchFiles = (files: FileList) => {
    if (currentTariff) {
      createFolder({
        lifetime: currentTariff.max_lifetime,
        download_password: false,
      }).then(({ data }) => {
        setCookie("folderId", data.folder_id);
        console.log("?");

        console.log(files);
        for (let i = 0; i < files.length; i++) {
          console.log("start");
          const fileSizeInMB = files[i].size;
          console.log(files[i]);
          if (
            i < currentTariff.max_file_in_folder &&
            fileSizeInMB <= +currentTariff.max_file_size
          ) {
            uploadFile({ file: files[i], folder_id: data.folder_id });
          }
        }
        navigation("/");
      });
    }
  };

  const handleDropUploadFile = (event: DragEvent<HTMLDivElement>) => {
    const files = event.dataTransfer.files;
    fetchFiles(files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      fetchFiles(files);
    }
  };

  useEffect(() => {
    if (getCookie("folderId")) {
      // navigation("/124512512");
    }
  }, []);

  return (
    <UploadWrapperSC>
      {currentTariff && (
        <>
          {createPortal(
            <DropZoneSC onDrop={handleDropUploadFile}>
              <InputSC
                ref={inputUploadRef}
                multiple={true}
                type="file"
                onChange={handleFileChange}
              />
            </DropZoneSC>,
            document.body
          )}
          <WindowWrapperSC>
            <Heading
              size={"3"}
              weight={"bold"}
              align={"center"}
              highContrast={true}
            >
              Передавайте файлы одним касанием!
            </Heading>
            <FileUploadBaseSC onClick={() => inputUploadRef.current?.click()}>
              <DownloadSC>
                <UploadIcon />
              </DownloadSC>
              <Text size={"1"} color="gray" weight={"regular"} align={"center"}>
                <SpanSC>Нажмите «Загрузить»</SpanSC> или перетащите файлы в эту
                область
              </Text>
            </FileUploadBaseSC>
            <Text size={"1"} weight={"regular"} align={"center"} color="gray">
              Вы можете загрузить {currentTariff.max_file_at_time} файл до{" "}
              {(+currentTariff.max_file_size / (1024 * 1024)).toFixed(0)} МБ
            </Text>
          </WindowWrapperSC>
        </>
      )}
    </UploadWrapperSC>
  );
};

const {
  SpanSC,
  InputSC,
  DropZoneSC,
  DownloadSC,
  UploadWrapperSC,
  WindowWrapperSC,
  FileUploadBaseSC,
} = UploadWindowStyle();
