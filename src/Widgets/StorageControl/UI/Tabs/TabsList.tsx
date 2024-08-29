import { TabsListStyle } from "./TabsStyle.ts";

export const TabsList = () => {
  return (
    <TabsWrapperSC>
      <ListSC size={"2"}>
        <TriggetSC value="info">Инфо</TriggetSC>
        <TriggetSC value="settings">Настройки</TriggetSC>
        <TriggetSC value="link">Ссылка</TriggetSC>
      </ListSC>
    </TabsWrapperSC>
  );
};

const { ListSC, TriggetSC, TabsWrapperSC } = TabsListStyle();
