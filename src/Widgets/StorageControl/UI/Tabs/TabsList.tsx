import { storageSlice } from "src/entities/storage/modal/storageSlice.ts";
import { TabsListStyle } from "./TabsStyle.ts";

export const TabsList = () => {
  const { isGuest } = storageSlice((state) => state);

  return (
    <TabsWrapperSC>
      <ListSC size={"2"}>
        <TriggetSC $isGuest={isGuest} value="info">
          Инфо
        </TriggetSC>
        {!isGuest && (
          <>
            <TriggetSC $isGuest={isGuest} value="settings">
              Настройки
            </TriggetSC>
            <TriggetSC $isGuest={isGuest} value="link">
              Ссылка
            </TriggetSC>
          </>
        )}
      </ListSC>
    </TabsWrapperSC>
  );
};

const { ListSC, TriggetSC, TabsWrapperSC } = TabsListStyle();
