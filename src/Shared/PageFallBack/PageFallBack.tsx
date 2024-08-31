import { Text } from "@radix-ui/themes";
import { PageFallBackStyle } from "./PageFallBackStyle";
import { Spinner } from "@radix-ui/themes";

export const PageFallBack = () => {
  return (
    <>
      <WrapperSC>
        <ContentWrapperSC>
          <Text
            size={"3"}
            weight={"medium"}
            align={"center"}
            highContrast={true}
          >
            Загрузка
          </Text>
          <Spinner size={"1"} />
        </ContentWrapperSC>
      </WrapperSC>
    </>
  );
};

const { ContentWrapperSC, WrapperSC } = PageFallBackStyle();
