import { Content, Root } from "@radix-ui/themes/src/components/tabs.js";
import { StorageControlStyle } from "./StorageControlStyle.ts";
import { TabsList } from "./Tabs/TabsList.tsx";

export const StorageControl = () => {
  return (
    <WrapperSC>
      <Root defaultValue={"info"}>
        <TabsList />
        <Content value="info"></Content>
        <Content value="settings"></Content>
        <Content value="link"></Content>
      </Root>
      <></>
    </WrapperSC>
  );
};

const { WrapperSC } = StorageControlStyle();
