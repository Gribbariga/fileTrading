import { ChangeEvent, useRef } from "react";
import { uploadFileHelper } from "shared/lib/helper/uploadFileHelper/uploadFileHelper";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { UploadsFileStyle } from "./UploadsFileStyle";
import { ButtonUI } from "shared/ButtonUI/ButtonUI";
import { userSlice } from "src/entities/user/model/userSlice";

export const UploadsFile = () => {
  const { storage } = storageSlice((state) => state);
  const { tariffs, subscribeStatus } = subscriptionSlice((state) => state);

  const inputRef = useRef<HTMLInputElement>(null);
  const { token } = userSlice((state) => state);

  const handleFetchFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (tariffs && files && storage) {
      e.preventDefault();
      uploadFileHelper(
        files,
        tariffs[subscribeStatus?.subscription_id || 0],
        storage.folder_id,
        token
      );
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
