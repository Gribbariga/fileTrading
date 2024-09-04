import { Badge, Switch, Text } from "@radix-ui/themes";
import { DownloadProjectionStyle } from "./DownloadProjectionStyle.ts";
import { useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { toggleDownloadPassword } from "src/shared/API/storage/folderSetting/api.ts";
import { userSlice } from "src/entities/user/model/userSlice.ts";

export const DownloadProjection = () => {
  const { storage } = storageSlice((state) => state);

  const { token } = userSlice((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (storage) {
      setIsChecked(storage.download_password);
    }
  }, [storage]);

  const handleSwitch = () => {
    if (storage && token) {
      const currentValue = isChecked;
      setIsChecked((prev) => !prev);
      toggleDownloadPassword({ folder_id: storage?.folder_id }, token).catch(
        () => {
          setIsChecked(currentValue);
        }
      );
    }
  };

  return (
    <>
      <TopWrapperSC>
        <TitleWrapperSC>
          <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
            Защита при скачивании
          </Text>
          <Badge>Premium</Badge>
        </TitleWrapperSC>
        <Switch
          size={"3"}
          variant={"surface"}
          highContrast={false}
          checked={isChecked}
          onClick={handleSwitch}
        />
      </TopWrapperSC>
      <Text align={"left"} highContrast={false} size={"1"} weight={"regular"}>
        Скачанные файлы будут защищены паролем. Пароль будет показываться
        получателю один раз
      </Text>
    </>
  );
};

const { TopWrapperSC, TitleWrapperSC } = DownloadProjectionStyle();
