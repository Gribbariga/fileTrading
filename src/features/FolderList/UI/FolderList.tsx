import { ScrollArea, Text } from "@radix-ui/themes";
import { FolderListStyle } from "./FolderListStyle.ts";
import { useEffect } from "react";
import { getAllFolder } from "src/shared/API/storage/folder/api.ts";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { FolderItem } from "./FolderItem/FolderItem.tsx";

export const FolderList = () => {
  const { allFolder, setAllFolder } = storageSlice((state) => state);
  const headerText = ["Имя", "Размер", "Создано", "Срок хранения"];

  useEffect(() => {
    if (!allFolder.length) {
      getAllFolder().then(({ data }) => {
        setAllFolder(data.folders);
      });
    }
  }, []);

  return (
    <>
      <ListHeaderSC>
        {headerText.map((item) => {
          return (
            <>
              <ListHeaderSegmentWrapperSC>
                <Text
                  size={"2"}
                  weight={"regular"}
                  align={"left"}
                  highContrast={false}
                >
                  {item}
                </Text>
              </ListHeaderSegmentWrapperSC>
            </>
          );
        })}
      </ListHeaderSC>
      <ScrollArea>
        {allFolder.map((item) => {
          return (
            <FolderItem
              folderId={item.folder_id}
              key={item.folder_id}
              name={item.name}
              size={item.size}
              createAt={item.created_at}
              timeStorage={item.lifetime}
            />
          );
        })}
      </ScrollArea>
    </>
  );
};

const { ListHeaderSC, ListHeaderSegmentWrapperSC } = FolderListStyle();
