import { ClockIcon } from "@radix-ui/react-icons";
import { StorageHeaderStyle } from "./StorageHeaderStyle.ts";
import { Text } from "@radix-ui/themes";
import { ExtendStorage } from "src/Features/ExtendStorage/publicApi.ts";
import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { useEffect, useState } from "react";

export const StorageHeader = () => {
  const { storage, isGuest } = storageSlice((state) => state);

  const [time, setTime] = useState("");

  useEffect(() => {
    const createAt = storage?.created_at || "";
    const date = new Date(createAt);
    setInterval(() => {
      const now = new Date();
      const elapsedTime = now.getTime() - date.getTime();

      // Переводим миллисекунды в секунды
      const totalSeconds = Math.floor(elapsedTime / 1000);

      // Вычисляем дни, часы, минуты и секунды
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      // Форматируем результат
      const formattedTime = `${days} дней ${String(hours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
      setTime(formattedTime);
    }, 1000);
  }, []);

  return (
    <StorageHeaderSC>
      <InfoWrapperSC>
        <ClockIcon width={25} height={25} color="orange" />
        <TimeStorageSC>
          <Text
            size={"1"}
            weight={"regular"}
            align={"left"}
            highContrast={false}
          >
            Срок хранения
          </Text>
          <Text size={"5"} weight={"medium"} align={"left"} highContrast={true}>
            {time}
          </Text>
        </TimeStorageSC>
      </InfoWrapperSC>
      {!isGuest && (
        <>
          <ExtendStorage />
        </>
      )}
    </StorageHeaderSC>
  );
};

const { TimeStorageSC, InfoWrapperSC, StorageHeaderSC } = StorageHeaderStyle();
