import { Avatar, Text } from "@radix-ui/themes";
import { FileItemStyle } from "./FileItemStyle.ts";
import { FC, useEffect, useState } from "react";
import { DownloadFile } from "src/features/DownloadFile/publicApi.ts";
import { DeleteFile } from "src/features/DeleteFile/UI/DeleteFile.tsx";
import { FileIcon } from "@radix-ui/react-icons";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { checkImg } from "src/shared/lib/helper/checkImg/checkImg.ts";
import { previewImage } from "src/shared/API/storage/files/api.ts";

interface IFileItemProps {
  fileDbId: number;
  name: string;
  size: number;
  createAt: string;
}

export const FileItem: FC<IFileItemProps> = ({
  createAt,
  fileDbId,
  name,
  size,
}) => {
  const { isGuest, storage } = storageSlice((state) => state);

  const [previewImg, setPreviewImg] = useState("");

  // const [setIsImg] = useState(false);

  const date = new Date(createAt.replace(" ", "T"));

  // Получаем день, месяц и год
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматируем дату в нужный формат
  const formattedDate = `${day}.${month}.${year}`;

  const test = async () => {
    const response = await fetch(
      `/api/api/storage/file/image/preview/${storage.folder_id}/${fileDbId}`,
      {
        method: "GET",
      }
    );
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;

    while (!done) {
      // Чтение данных из потока
      const { done: isDone, value } = await reader.read();
      done = isDone;

      // Декодирование и обработка полученных данных
      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        const t = URL.createObjectURL(chunk);
        setPreviewImg(chunk);
        let buffer = new TextEncoder().encode(chunk);
        // Преобразуем байты в строку (используя UTF-8)
        let binaryString = "";
        for (let i = 0; i < buffer.length; i++) {
          binaryString += String.fromCharCode(buffer[i]);
        }
        // Теперь используем btoa для кодирования
        // setPreviewImg(btoa(binaryString)); // Здесь вы можете обрабатывать данные по своему усмотрению
      }
    }
  };

  useEffect(() => {
    if (checkImg(name) && storage && fileDbId !== 0) {
      test();
      // previewImage({ folder_id: storage.folder_id, file_id: fileDbId }).then(
      //   ({ data }) => {
      //     data.on("data", (chunk) => {
      //       console.log(`Получен кусок данных: ${chunk.length} байт`);
      //     });
      //     data.on("end", () => {
      //       console.log("Передача данных завершена");
      //     });
      //     data.on("error", (err) => {
      //       console.error("Ошибка при получении данных:", err);
      //     });
      //   }
      // );
    }
  }, []);

  return (
    <ItemWrapperSC>
      <SegmentWrapperSC
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Avatar
          size={"4"}
          variant="soft"
          color="gray"
          highContrast={false}
          fallback={
            previewImg ? (
              <img src={`data:image/jpg;base64,${previewImg}`} />
            ) : (
              <FileIcon />
            )
          }
        />

        <Text
          style={{
            whiteSpace: "nowrap",
          }}
          size={"2"}
          weight={"medium"}
          align={"left"}
          highContrast={true}
        >
          {name}
        </Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text size={"2"} weight={"regular"} align={"left"} highContrast={false}>
          {(size / 1024 / 1024).toFixed(1)}MB
        </Text>
      </SegmentWrapperSC>
      <SegmentWrapperSC>
        <Text size={"2"} weight={"regular"} align={"left"} highContrast={false}>
          {formattedDate}
        </Text>
      </SegmentWrapperSC>
      <IconWrapperSC>
        <DownloadFile fileName={name} fileDbId={fileDbId} />
        {!isGuest && (
          <>
            <DeleteFile fileDbId={fileDbId} />
          </>
        )}
      </IconWrapperSC>
    </ItemWrapperSC>
  );
};

const { IconWrapperSC, ItemWrapperSC, SegmentWrapperSC } = FileItemStyle();
