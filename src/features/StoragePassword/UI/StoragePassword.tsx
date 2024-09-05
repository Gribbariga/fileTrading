import { Badge, Switch, Text } from "@radix-ui/themes";
import { StoragePasswordStyle } from "./StoragePasswordStyle.ts";
import { ChangeEvent, useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { editViewPassword } from "src/shared/API/storage/folderSetting/api.ts";
import { userSlice } from "src/entities/user/model/userSlice.ts";

export const StoragePassword = () => {
  const { isPassword } = storageSlice((state) => state);

  const [password, setPassword] = useState("");

  const { storage } = storageSlice((state) => state);

  const { token } = userSlice((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isPassword);
  }, [isPassword]);

  const handleUnFocus = () => {
    if (storage && token) {
      editViewPassword(
        { folder_id: storage?.folder_id, view_password: password },
        token
      );
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSwitch = () => {
    if (isChecked && storage && token && !!password) {
      editViewPassword(
        { folder_id: storage.folder_id, view_password: null },
        token
      )
        .then(() => {
          setIsChecked(false);
        })
        .catch(() => {
          setIsChecked(true);
        });
    } else if (storage && token && !!password) {
      editViewPassword(
        { folder_id: storage.folder_id, view_password: password },
        token
      )
        .then(() => {
          setIsChecked(true);
        })
        .catch(() => {
          setIsChecked(false);
        });
    }
  };

  return (
    <>
      <TopWrapperSC>
        <TitleWrapperSC>
          <Text mr={"2"}>Пароль хранилища</Text>
          <Badge size={"1"} variant="soft" highContrast={false}>
            Premium
          </Badge>
        </TitleWrapperSC>
        <Switch
          checked={isChecked}
          onClick={handleSwitch}
          size={"3"}
          variant="surface"
          highContrast={false}
        />
      </TopWrapperSC>
      <Text size={"1"} weight={"regular"} align={"left"} highContrast={false}>
        Установите пароль, который должен будет ввести получатель при открытии
        ссылки
      </Text>
      <TextFieldSC
        size={"3"}
        variant="surface"
        value={password}
        placeholder="От 4 символов"
        onBlur={handleUnFocus}
        onChange={handleOnChange}
      />
    </>
  );
};

const { TextFieldSC, TopWrapperSC, TitleWrapperSC } = StoragePasswordStyle();
