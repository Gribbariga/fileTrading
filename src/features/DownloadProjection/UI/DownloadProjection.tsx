import { Badge, Switch, Text } from "@radix-ui/themes";
import { DownloadProjectionStyle } from "./DownloadProjectionStyle.ts";
import { useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { toggleNeedPassword } from "src/shared/API/storage/folderSetting/api.ts";

export const DownloadProjection = () => {
  const { storage } = storageSlice((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (storage) {
      setIsChecked(storage.need_password);
    }
  }, [storage]);

  const handleSwitch = () => {
    if (storage) {
      const currentValue = isChecked;
      setIsChecked((prev) => !prev);
      toggleNeedPassword({ folder_id: storage?.folder_id }).catch(() => {
        setIsChecked(currentValue);
      });
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
