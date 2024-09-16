import { Dialog, Text } from "@radix-ui/themes";
import { ChangeAccountPassword } from "src/features/ChangeAccountPassword/publicApi.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ConnectGoogleTwoFA } from "./ConnectGoogleTwoFA/ConnectGoogleTwoFA";
import { TabsSecurityContentStyle } from "./TabsSecurityContentStyle";
import { userSlice } from "src/entities/user/model/userSlice";

export const TabsSecurityContent = () => {
  const { userInfo } = userSlice();

  return (
    <>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        Пароль
      </Text>
      <ChangeAccountPassword />

      {!userInfo?.two_fa && (
        <>
          <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
            Двухфакторная аутентификация
          </Text>
          <Dialog.Root>
            <Dialog.Trigger>
              <ButtonUI size={"3"} variant="surface" mb={"3"}>
                Подключить Google Authentificator
              </ButtonUI>
            </Dialog.Trigger>
            <DialogContentSC>
              <ConnectGoogleTwoFA />
            </DialogContentSC>
          </Dialog.Root>
          <Dialog.Root>
            <Dialog.Trigger>
              <ButtonUI size={"3"} variant="surface" mb={"3"}>
                Подключить почту
              </ButtonUI>
            </Dialog.Trigger>
            <Dialog.Content>
              <div style={{ width: "100px", height: "100px" }}>TEST2</div>
            </Dialog.Content>
          </Dialog.Root>
        </>
      )}
    </>
  );
};

const { DialogContentSC } = TabsSecurityContentStyle();
