import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { InfoStyle } from "./InfoStyle.ts";
import { formattedData } from "shared/lib/helper/formattedData/formattedData.ts";

export const Info = () => {
  const { storage } = storageSlice((state) => state);

  storage;

  const result = [
    {
      name: "Создано",
      value: formattedData(storage?.created_at),
    },
    {
      name: "Изменено",
      value: "",
    },
    {
      name: "Автор",
      value: "",
    },
    {
      name: "Размер",
      value: "",
    },
    {
      name: "Скачано раз",
      value: "",
    },
    {
      name: "Просмотры",
      value: "",
    },
    {
      name: "Заполнено",
      value: "",
    },
  ];

  return (
    <>
      <InfoWrapperSC>{}</InfoWrapperSC>
    </>
  );
};

const { InfoWrapperSC, InfoItemSC } = InfoStyle();
