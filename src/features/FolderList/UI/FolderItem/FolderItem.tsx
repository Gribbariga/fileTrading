import { Avatar, Text } from "@radix-ui/themes";
import { FolderItemStyle } from "./FolderItemStyle.ts";
import { ArchiveIcon } from "@radix-ui/react-icons";
import { FC, useEffect, useRef, useState } from "react";
import { formattedData } from "src/shared/lib/helper/formattedData/formattedData.ts";

interface FolderItemProps {
  name: string;
  size: string;
  folderId: string;
  createAt: string;
  timeStorage: number;
}

export const FolderItem: FC<FolderItemProps> = ({
  name,
  size,
  folderId,
  createAt,
  timeStorage,
}) => {
  const [time, setTime] = useState("");

  const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const date = new Date(createAt + "Z");

    // Задайте количество дней, через которое должно истечь время
    const daysToExpire = timeStorage; // например, 7 дней
    const expirationDate = new Date(
      date.getTime() + daysToExpire * 24 * 60 * 60 * 1000
    );

    intervalId.current = setInterval(() => {
      const now = new Date();
      const remainingTime = expirationDate.getTime() - now.getTime();
      // Если время истекло, остановите таймер
      if (remainingTime <= 0 && intervalId.current) {
        setTime("Время истекло");
        clearInterval(intervalId.current); // останавливает интервал
        return;
      }

      const totalSeconds = Math.floor(remainingTime / 1000);

      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

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
    <CardSC to={`/storage/${folderId}`}>
      <SegmentWrapperSC>
        <NameAndImgWrapperSC>
          <Avatar
            color="gray"
            size={"4"}
            variant="soft"
            fallback={<ArchiveIcon />}
          />
          <Text>Хранилище {name}</Text>
        </NameAndImgWrapperSC>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text>{(+size / 1024 / 1024).toFixed(2)} mb</Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text>{formattedData(createAt)}</Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text>{time}</Text>
      </SegmentWrapperSC>
    </CardSC>
  );
};

const { CardSC, SegmentWrapperSC, NameAndImgWrapperSC } = FolderItemStyle();
