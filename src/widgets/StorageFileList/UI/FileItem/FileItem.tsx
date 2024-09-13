import { Avatar, Text } from "@radix-ui/themes";
import { FileItemStyle } from "./FileItemStyle.ts";
import { FC, useEffect } from "react";
import { DownloadFile } from "src/features/DownloadFile/publicApi.ts";
import { DeleteFile } from "src/features/DeleteFile/UI/DeleteFile.tsx";
import { FileIcon } from "@radix-ui/react-icons";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { checkImg } from "src/shared/lib/helper/checkImg/checkImg.ts";
import { previewImage } from "src/shared/API/storage/folder/api.ts";

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

  // const [setIsImg] = useState(false);

  const date = new Date(createAt.replace(" ", "T"));

  // Получаем день, месяц и год
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматируем дату в нужный формат
  const formattedDate = `${day}.${month}.${year}`;

  useEffect(() => {
    if (checkImg(name) && storage) {
      previewImage({ folder_id: storage.folder_id, file_db_id: fileDbId }).then(
        () => {
          // setIsImg(true);
        }
      );
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
          fallback={<FileIcon />}
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
