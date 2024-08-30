import { StorageControlStyle } from "./StorageControlStyle.ts";
import { TabsList } from "./Tabs/TabsList.tsx";
import { Info } from "./Info/Info.tsx";
import { Tabs } from "@radix-ui/themes";
import { StorageConfig } from "./StorageConfig/StorageConfig.tsx";

export const StorageControl = () => {
  return (
    <WrapperSC>
      <Tabs.Root defaultValue={"info"}>
        <TabsList />
        <TabsContentWrapperSC>
          <TabsContent value="info">
            <Info />
          </TabsContent>
          <TabsContent value="settings">
            <StorageConfig />
          </TabsContent>
          <TabsContent value="link"></TabsContent>
        </TabsContentWrapperSC>
      </Tabs.Root>
      <></>
    </WrapperSC>
  );
};

const { WrapperSC, TabsContent, TabsContentWrapperSC } = StorageControlStyle();
