import { Heading, Text } from "@radix-ui/themes";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { StoragePasswordViewStyle } from "./StoragePasswordViewStyle.ts";
import { ChangeEvent, useState } from "react";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { useParams } from "react-router-dom";

export const StoragePasswordView = () => {
  const [value, setValue] = useState("");
  const { getStorage } = storageSlice((state) => state);
  const { storageLink } = useParams();
  const handleNext = () => {
    if (storageLink && value) {
      getStorage(storageLink, value);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <WrapperSC>
        <Heading>Хранилище защищено </Heading>
        <Text>Введите пароль для доступа к файлам</Text>
        <TextFieldSC
          onChange={handleChange}
          value={value}
          placeholder="Пароль"
        />
        <ButtonWrapperSC>
          <ButtonUI onClick={handleNext}>Продолжить</ButtonUI>
        </ButtonWrapperSC>
      </WrapperSC>
    </>
  );
};

const { ButtonWrapperSC, WrapperSC, TextFieldSC } = StoragePasswordViewStyle();
