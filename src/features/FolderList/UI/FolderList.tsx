import { ScrollArea, Text } from "@radix-ui/themes";
import { FolderListStyle } from "./FolderListStyle.ts";

export const FolderList = () => {
  const headerText = ["Имя", "Размер", "Создано", "Срок хранения"];

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
