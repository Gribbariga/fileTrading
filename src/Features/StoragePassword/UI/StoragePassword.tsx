import { Badge, Switch, Text } from "@radix-ui/themes";
import { StoragePasswordStyle } from "./StoragePasswordStyle.ts";
import { useEffect, useState } from "react";
import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";

export const StoragePassword = () => {
  const { isPassword } = storageSlice((state) => state);

  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isPassword]);

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
      />
    </>
  );
};

const { TextFieldSC, TopWrapperSC, TitleWrapperSC } = StoragePasswordStyle();
