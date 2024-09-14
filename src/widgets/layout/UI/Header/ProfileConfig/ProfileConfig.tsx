import { Dialog, Heading, Tabs } from "@radix-ui/themes";
import { ProfileConfigStyle } from "./ProfileConfigStyle.ts";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI.tsx";
import { Cross1Icon, PersonIcon } from "@radix-ui/react-icons";
import { TabsSecurityContent } from "./TabsSecurityContent/TabsSecurityContent.tsx";

export const ProfileConfig = () => {
  return (
    <>
      <DialogRootSC>
        <Dialog.Trigger>
          <IconButtonUI
            size={"3"}
            variant="outline"
            color="orange"
            highContrast={false}
            loading={false}
          >
            <PersonIcon />
          </IconButtonUI>
        </Dialog.Trigger>

        <Dialog.Content style={{ zIndex: 100000 }} size={"3"} maxWidth="400px">
          <TitleWrapperSC>
            <Heading weight={"medium"} size={"5"} align={"left"}>
              Настройки аккаунта
            </Heading>
            <Dialog.Close>
              <IconButtonUI size={"2"} variant="ghost">
                <Cross1Icon height={"16"} width={"16"} />
              </IconButtonUI>
            </Dialog.Close>
          </TitleWrapperSC>

          <Tabs.Root defaultValue="sec">
            <Tabs.List mb={"5"}>
              <Tabs.Trigger value="sec">Безопасность</Tabs.Trigger>
              <Tabs.Trigger value="sub">Подписка</Tabs.Trigger>
              <Tabs.Trigger value="paymentsHistory">
                История платежей
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="sec">
              <TabsSecurityContent />
            </Tabs.Content>

            <Tabs.Content value="sub"></Tabs.Content>

            <Tabs.Content value="paymentsHistory"></Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </DialogRootSC>
    </>
  );
};

const { DialogRootSC, TitleWrapperSC } = ProfileConfigStyle();