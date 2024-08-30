import { ChangeEvent, useRef } from "react";
import { uploadFileHelper } from "shared/lib/helper/uploadFileHelper/uploadFileHelper";
import { storageSlice } from "src/entities/storage/modal/storageSlice";
import { subscriptionSlice } from "src/entities/subscription/modal/subcriptionSlice";
import { UploadsFileStyle } from "./UploadsFileStyle";
import { ButtonUI } from "shared/ButtonUI/ButtonUI";

export const UploadsFile = () => {
  const { storage } = storageSlice((state) => state);
  const { subscription_id, tariffs } = subscriptionSlice((state) => state);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFetchFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (tariffs && files && storage) {
      e.preventDefault();
      uploadFileHelper(files, tariffs[subscription_id], storage.folder_id);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <ButtonUI
        onClick={handleClick}
        size={"3"}
        variant="soft"
        highContrast={false}
        loading={false}
      >
        Добавить файлы
      </ButtonUI>
      <InputSC
        type="file"
        multiple={true}
        onChange={handleFetchFile}
        ref={inputRef}
      />
    </>
  );
};

const { InputSC } = UploadsFileStyle();
