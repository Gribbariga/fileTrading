import { Button } from "@radix-ui/themes";
import { ChangeEvent, useRef } from "react";
import { uploadFileHelper } from "shared/lib/helper/uploadFileHelper/uploadFileHelper";
import { storageSlice } from "src/entities/storage/modal/storageSlice";
import { subscriptionSlice } from "src/entities/subscription/modal/subcriptionSlice";
import { UploadsFileStyle } from "./UploadsFileStyle";

export const UploadsFile = () => {
  const { folderId } = storageSlice((state) => state);
  const { subscription_id, tariffs } = subscriptionSlice((state) => state);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFetchFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (tariffs && files && folderId) {
      e.preventDefault();
      uploadFileHelper(files, tariffs[subscription_id], folderId);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        size={"3"}
        variant="soft"
        highContrast={false}
        loading={false}
      >
        Добавить файлы
      </Button>
      <InputSC onChange={handleFetchFile} ref={inputRef} />
    </>
  );
};

const { InputSC } = UploadsFileStyle();
