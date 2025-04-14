import { storageSlice } from "src/entities/storage/model/storageSlice.ts";
import { TabsListStyle } from "./TabsStyle.ts";
import { useResize } from "src/shared/lib/hooks/useResize/useResize.ts";

export const TabsList = () => {
  const { isMobile } = useResize();
  const { isGuest } = storageSlice((state) => state);

  return (
    <TabsWrapperSC>
      {!isMobile && (
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
      )}
    </TabsWrapperSC>
  );
};

const { ListSC, TriggetSC, TabsWrapperSC } = TabsListStyle();
