import { ScrollArea, Text } from "@radix-ui/themes";
import { FolderListStyle } from "./FolderListStyle.ts";
import { useEffect, useState } from "react";
import { getAllFolder } from "src/shared/API/storage/folder/api.ts";
import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { FolderItem } from "./FolderItem/FolderItem.tsx";

export const FolderList = () => {
  const { allFolder, setAllFolder } = storageSlice((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const headerText = ["Имя", "Размер", "Создано", "Срок хранения"];

  useEffect(() => {
    if (!allFolder.length) {
      setIsLoading(true);
      getAllFolder().then(({ data }) => {
        setIsLoading(false);
        setAllFolder(data.folders);
      });
    }
  }, []);

  const skeletonNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
        {true &&
          skeletonNumber.map((item) => {
            return (
              <SkeletonWrapperSC key={item}>
                <SkeletonSC />
              </SkeletonWrapperSC>
            );
          })}

        {false &&
          allFolder.map((item) => {
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

const {
  SkeletonSC,
  ListHeaderSC,
  SkeletonWrapperSC,
  ListHeaderSegmentWrapperSC,
} = FolderListStyle();
