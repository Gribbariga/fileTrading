import { createPortal } from "react-dom";
import { UploadWindowStyle } from "./UploadWindowStyle.ts";
import { Heading, Text, Theme } from "@radix-ui/themes";
import { UploadIcon } from "@radix-ui/react-icons";
import { ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import { createFolder } from "shared/API/storage/folder/api.ts";
// import { useNavigate } from "react-router-dom";
import { setCookie } from "shared/lib/helper/setCookie/setCookie.ts";
import { getCookie } from "shared/lib/helper/getCookie/getCookie.ts";
import { subscriptionSlice } from "src/entities/subscription/modal/subcriptionSlice.ts";
import { useResize } from "shared/lib/hooks/useResize/useResize.ts";
import { uploadFileHelper } from "shared/lib/helper/uploadFileHelper/uploadFileHelper.ts";
import { useNavigate } from "react-router-dom";

export const UploadWindow = () => {
  const navigation = useNavigate();
  const { tariffs, subscription_id } = subscriptionSlice((state) => state);

  const { height, width } = useResize();

  const inputUploadRef = useRef<HTMLInputElement>(null);

  const currentTariff = tariffs !== null ? tariffs[subscription_id] : null;

  const fetchFiles = (files: FileList) => {
    if (currentTariff) {
      createFolder({
        lifetime: currentTariff.max_lifetime,
        download_password: false,
      }).then(async ({ data }) => {
        setCookie("folderId", data.folder_id, {
          "max-age": currentTariff.max_lifetime * 24 * 60 * 60 * 1000,
          maxAge: currentTariff.max_lifetime * 24 * 60 * 60 * 1000,
        });
        console.log("?");
        await uploadFileHelper(files, currentTariff, data.folder_id);
        navigation(`/storage/${data.folder_id}`);
      });
    }
  };

  // const handleDropUploadFile = (event: DragEvent<HTMLDivElement>) => {
  //   // const files = event.dataTransfer.files;
  //   // fetchFiles(files);
  // };

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

  const handleClick = (
    event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    // Запретить действие по умолчанию на клике
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <UploadWrapperSC $screenHeight={height}>
      {currentTariff && (
        <>
          {createPortal(
            <DropZoneSC
              $screenWidth={width}
              $screenHeight={height}
              // onDrop={handleDropUploadFile}
            >
              <InputSC
                $screenWidth={width}
                $screenHeight={height}
                ref={inputUploadRef}
                multiple={true}
                type="file"
                onClick={handleClick}
                onChange={handleFileChange}
              />
            </DropZoneSC>,
            document.body
          )}
          {createPortal(
            <Theme>
              <WindowWrapperSC>
                <Heading
                  size={"4"}
                  weight={"bold"}
                  align={"center"}
                  highContrast={true}
                >
                  Передавайте файлы одним касанием!
                </Heading>
                <FileUploadBaseSC
                  onClick={() => inputUploadRef.current?.click()}
                >
                  <FileUploadInputSC
                    multiple={true}
                    type="file"
                    onChange={handleFileChange}
                  />
                  <DownloadSC>
                    <UploadIcon />
                  </DownloadSC>
                  <Text
                    size={"3"}
                    color="gray"
                    weight={"regular"}
                    align={"center"}
                  >
                    <Text color="orange">Нажмите «Загрузить»</Text> или
                    перетащите файлы в эту область
                  </Text>
                </FileUploadBaseSC>
                <Text
                  size={"3"}
                  weight={"regular"}
                  align={"center"}
                  color="gray"
                >
                  Вы можете загрузить {currentTariff.max_file_at_time} файл до{" "}
                  {(+currentTariff.max_file_size / (1024 * 1024)).toFixed(0)} МБ
                </Text>
              </WindowWrapperSC>
            </Theme>,
            document.body
          )}
        </>
      )}
    </UploadWrapperSC>
  );
};

const {
  InputSC,
  DropZoneSC,
  DownloadSC,
  UploadWrapperSC,
  WindowWrapperSC,
  FileUploadBaseSC,
  FileUploadInputSC,
} = UploadWindowStyle();
