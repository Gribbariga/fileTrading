import { List, Trigger } from "@radix-ui/themes/src/components/tabs.js";
import { TabsListStyle } from "./TabsStyle.ts";

export const TabsList = () => {
  return (
    <TabsWrapperSC>
      <List>
        <Trigger value="info" />
        <Trigger value="settings" />
        <Trigger value="link" />
      </List>
    </TabsWrapperSC>
  );
};

const { TabsWrapperSC } = TabsListStyle();
