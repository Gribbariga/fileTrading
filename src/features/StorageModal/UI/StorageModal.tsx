import { StorageModalStyle } from './StorageModalStyle';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { Dialog, Heading, Tabs } from "@radix-ui/themes";
import { StorageConfig } from 'src/widgets/StorageControl/UI/StorageConfig/StorageConfig';
import { Links } from 'src/widgets/StorageControl/UI/Links/Links';
import { Info } from 'src/widgets/StorageControl/UI/Info/Info';

export const StorageModal = () => {

  return (
    <>
      <DialogRootSC>
        <Dialog.Trigger>
            <Button
                size={"3"}
                variant='ghost'
                color="gray"
                loading={false}>
            <DotsVerticalIcon />
            </Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ zIndex: 100000 }} size={"3"} maxWidth="400px">
          <TitleWrapperSC>
            <Heading weight={"medium"} size={"5"} align={"left"}>
              Управление
            </Heading>
            <Dialog.Close>
              <Button size={"2"} variant="ghost"></Button>
            </Dialog.Close>
          </TitleWrapperSC>

          <Tabs.Root defaultValue="sec">
            <Tabs.List mb={"5"}>
              <Tabs.Trigger style={{ width: "33%" }} value="sec">
                Инфо
              </Tabs.Trigger>
              <Tabs.Trigger style={{ width: "33%" }} value="sub">
                Настройки
              </Tabs.Trigger>
              <Tabs.Trigger style={{ width: "33%" }} value="third">
                Ссылка
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="sec">
                <TabContentSC>
                    <Info/>
                </TabContentSC>
            </Tabs.Content>
            
            <Tabs.Content value="sub">
                <TabContentSC>
                    <StorageConfig/>
                </TabContentSC>
            </Tabs.Content>

            <Tabs.Content value="third">
                <TabContentSC>
                    <Links/>
                </TabContentSC>
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </DialogRootSC>
    </>
  );
};

    
const { 
    TabContentSC,
    DialogRootSC,
    TitleWrapperSC,
 } = StorageModalStyle();



