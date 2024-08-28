import { createPortal } from "react-dom";
import { UploadWindowStyle } from "./UploadWindowStyle.ts";
import { Heading, Text } from "@radix-ui/themes";
import { UploadIcon } from "@radix-ui/react-icons";
import { ChangeEvent, DragEvent, useEffect } from "react";
import { createFolder } from "shared/API/storage/folder/api.ts";
import { uploadFile } from "shared/API/storage/files/api.ts";
import { useNavigate } from "react-router-dom";
import { setCookie } from "shared/lib/helper/setCookie/setCookie.ts";
import { getCookie } from "shared/lib/helper/getCookie/getCookie.ts";

export const UploadWindow = () => {
  const navigation = useNavigate();

  const handleUploadFile = (event: DragEvent<HTMLDivElement>) => {
    const files = event.dataTransfer.files;
    createFolder({
      lifetime: import.meta.env.VITE_GUEST_MAX_DAY_STORAGE,
      download_password: false,
    }).then(({ data }) => {
      setCookie("folderId", data.folder_id);
      console.log("?");

      console.log(files);
      for (let i = 0; i < files.length; i++) {
        console.log("start");
        const fileSizeInMB = files[i].size / (1024 * 1024);
        console.log(files[i]);
        if (
          i < import.meta.env.VITE_GUEST_MAX_COUNT_FILE &&
          fileSizeInMB <= import.meta.env.VITE_GUEST_MAX_SIZE_FILE
        ) {
          uploadFile({ file: files[i], folder_id: data.folder_id });
        }
      }
      navigation("/");
    });
    console.log(event.dataTransfer.files[0]);
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (getCookie("folderId")) {
      // navigation("/124512512");
    }
  }, []);

  return (
    <>
      {createPortal(
        <DropZoneSC onDrop={handleUploadFile}>
          <InputSC multiple={true} type="file" onChange={handleFileChange} />
        </DropZoneSC>,
        document.body
      )}
      <WindowWrapperSC>
        <Heading size={"2"} weight={"bold"} align={"left"} highContrast={true}>
          Передавайте файлы одним касанием!
        </Heading>
        <FileUploadBaseSC>
          <DownloadSC>
            <UploadIcon />
          </DownloadSC>
          <Text
            size={"1"}
            weight={"regular"}
            align={"left"}
            highContrast={true}
          >
            Нажмите «Загрузить» или перетащите файлы в эту область
          </Text>
        </FileUploadBaseSC>
        <Text
          size={"1"}
          weight={"regular"}
          align={"center"}
          highContrast={true}
        >
          Вы можете загрузить 1 файл до 100 МБ
        </Text>
      </WindowWrapperSC>
    </>
  );
};

const { InputSC, DropZoneSC, DownloadSC, WindowWrapperSC, FileUploadBaseSC } =
  UploadWindowStyle();
