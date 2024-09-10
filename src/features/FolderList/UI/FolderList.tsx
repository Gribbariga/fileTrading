import { ScrollArea, Text } from "@radix-ui/themes";
import { FolderListStyle } from "./FolderListStyle.ts";
import { useEffect } from "react";
import { getAllFolder } from "src/shared/API/storage/folder/api.ts";

export const FolderList = () => {
  const headerText = ["Имя", "Размер", "Создано", "Срок хранения"];

  useEffect(() => {
    getAllFolder();
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
      <ScrollArea></ScrollArea>
    </>
  );
};

const { ListHeaderSC, ListHeaderSegmentWrapperSC } = FolderListStyle();
