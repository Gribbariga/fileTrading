import { Description } from "@radix-ui/themes/src/components/alert-dialog.js";
import { PageFallBackStyle } from "./PageFallBackStyle";
import { Spinner } from "@radix-ui/themes";

export const PageFallBack = () => {
  return (
    <>
      <WrapperSC>
        <ContentWrapperSC>
          <Description
            size={"3"}
            weight={"medium"}
            align={"center"}
            highContrast={true}
          >
            Загрузка
          </Description>
          <Spinner size={"1"} />
        </ContentWrapperSC>
      </WrapperSC>
    </>
  );
};

const { ContentWrapperSC, WrapperSC } = PageFallBackStyle();
