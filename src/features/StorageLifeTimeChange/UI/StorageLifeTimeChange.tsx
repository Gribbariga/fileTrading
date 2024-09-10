import { RadioGroup } from "@radix-ui/themes";
import { useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice";
import { userSlice } from "src/entities/user/model/userSlice";
import { updateLifeTime } from "src/shared/API/storage/folderSetting/api";

export const StorageLifeTimeChange = () => {
  const [value, setValue] = useState("7");

  const { storage } = storageSlice((state) => state);

  const { token } = userSlice((state) => state);

  const handleChangeLife = (newValue: string) => {
    if (storage && token) {
      const currentValue = value;
      setValue(newValue);
      updateLifeTime(
        {
          folder_id: storage.folder_id,
          new_lifetime: +newValue,
        },
        token
      ).catch(() => {
        setValue(currentValue);
      });
    }
  };
  value;
  return (
    <>
      <RadioGroup.Root defaultValue="7" value={value}>
        <RadioGroup.Item onClick={() => handleChangeLife("7")} value="7">
          7 дней
        </RadioGroup.Item>
        <RadioGroup.Item onClick={() => handleChangeLife("30")} value="30">
          30 дней
        </RadioGroup.Item>
        <RadioGroup.Item onClick={() => handleChangeLife("90")} value="90">
          90 дней
        </RadioGroup.Item>
        <RadioGroup.Item onClick={() => handleChangeLife("365")} value="365">
          365 дней
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
};
