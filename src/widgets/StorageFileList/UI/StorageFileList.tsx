import { ScrollArea, Text } from "@radix-ui/themes";
import { StorageFileListStyle } from "./StorageFileListStyle.ts";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { FileItem } from "./FileItem/FileItem.tsx";

export const StorageFileList = () => {
  const { storage } = storageSlice((state) => state);

  return (
    <StorageListWrapperSC>
      <ListHeaderSC>
        <SegmentWrapperSC>
          <Text
            size={"2"}
            weight={"regular"}
            align={"left"}
            highContrast={false}
          >
            Имя
          </Text>
        </SegmentWrapperSC>
        <SegmentWrapperSC>
          <Text
            size={"2"}
            weight={"regular"}
            align={"left"}
            highContrast={false}
          >
            Размер
          </Text>
        </SegmentWrapperSC>
        <SegmentWrapperSC>
          <Text
            size={"2"}
            weight={"regular"}
            align={"left"}
            highContrast={false}
          >
            Загружен
          </Text>
        </SegmentWrapperSC>
      </ListHeaderSC>
      <ScrollArea>
        {storage?.files.map((item) => {
          return (
            <FileItem
              createAt={item.created_at}
              fileDbId={item.id}
              name={item.name}
              size={item.size}
              key={item.id}
            />
          );
        })}
      </ScrollArea>
    </StorageListWrapperSC>
  );
};

const { ListHeaderSC, SegmentWrapperSC, StorageListWrapperSC } =
  StorageFileListStyle();
