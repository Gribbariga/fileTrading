import { Dialog, Text } from "@radix-ui/themes";
import { TabsSecurityContentStyle } from "./TabsSecurityContentStyle.ts";
import { ChangeAccountPassword } from "src/features/ChangeAccountPassword/publicApi.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

export const TabsSecurityContent = () => {
  return (
    <>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        Пароль
      </Text>
      <ChangeAccountPassword />
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        Пароль
      </Text>
      <Dialog.Root>
        <Dialog.Trigger>
          <ButtonUI size={"3"} variant="surface" mb={"3"}>
            Подключить Google Authentificator
          </ButtonUI>
        </Dialog.Trigger>
        <Dialog.Content>
          <div style={{ width: "100px", height: "100px" }}>TEST</div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

const {} = TabsSecurityContentStyle();
