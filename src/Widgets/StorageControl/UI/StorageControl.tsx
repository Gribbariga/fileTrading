import { Content, Root } from "@radix-ui/themes/src/components/tabs.js";
import { StorageControlStyle } from "./StorageControlStyle.ts";
import { TabsList } from "./Tabs/TabsList.tsx";
import { Info } from "./Info/Info.tsx";

export const StorageControl = () => {
  return (
    <WrapperSC>
      <Root defaultValue={"info"}>
        <TabsList />
        <TabsContentWRapperSC>
          <Content value="info">
            <Info />
          </Content>
          <Content value="settings"></Content>
          <Content value="link"></Content>
        </TabsContentWRapperSC>
      </Root>
      <></>
    </WrapperSC>
  );
};

const { WrapperSC, TabsContentWRapperSC } = StorageControlStyle();
