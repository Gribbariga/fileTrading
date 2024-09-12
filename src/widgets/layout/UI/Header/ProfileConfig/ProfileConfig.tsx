import { Dialog, Heading, Tabs } from "@radix-ui/themes";
import { ProfileConfigStyle } from "./ProfileConfigStyle.ts";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI.tsx";
import { Cross1Icon, PersonIcon } from "@radix-ui/react-icons";

export const ProfileConfig = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Close>
          <IconButtonUI
            size={"3"}
            variant="outline"
            color="orange"
            highContrast={false}
            loading={false}
          >
            <PersonIcon />
          </IconButtonUI>
        </Dialog.Close>

        <Dialog.Content size={"3"} maxWidth="400px">
          <ContentWrapperSC>
            <TitleWrapperSC>
              <Heading weight={"medium"} size={"5"} align={"left"}>
                Настройки аккаунта
              </Heading>
              <Dialog.Trigger>
                <IconButtonUI size={"2"} variant="ghost">
                  <Cross1Icon height={"16"} width={"16"} />
                </IconButtonUI>
              </Dialog.Trigger>
            </TitleWrapperSC>

            <Tabs.Root mb={"5"} defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="sec">Безопасность</Tabs.Trigger>
                <Tabs.Trigger value="sub">Подписка</Tabs.Trigger>
                <Tabs.Trigger value="paymentsHistory">
                  История платежей
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="sec"></Tabs.Content>

              <Tabs.Content value="sub"></Tabs.Content>

              <Tabs.Content value="paymentsHistory"></Tabs.Content>
            </Tabs.Root>
          </ContentWrapperSC>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

const { TitleWrapperSC, ContentWrapperSC } = ProfileConfigStyle();
