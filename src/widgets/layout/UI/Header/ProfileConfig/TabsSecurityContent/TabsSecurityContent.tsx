import { Dialog, Text } from "@radix-ui/themes";
import { ChangeAccountPassword } from "src/features/ChangeAccountPassword/publicApi.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ConnectGoogleTwoFA } from "./ConnectGoogleTwoFA/ConnectGoogleTwoFA";
import { TabsSecurityContentStyle } from "./TabsSecurityContentStyle";
import { userSlice } from "src/entities/user/model/userSlice";
import { DeleteTwoFA } from "src/features/DeleteTwoFA/UI/DeleteTwoFA";

export const TabsSecurityContent = () => {
  const { two_fa } = userSlice();
  console.log(two_fa);
  return (
    <>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        Пароль
      </Text>
      <ChangeAccountPassword />

      <>
        <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
          Двухфакторная аутентификация
        </Text>
        {!two_fa && (
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
        )}
        {two_fa && <DeleteTwoFA />}
      </>
    </>
  );
};

const { DialogContentSC } = TabsSecurityContentStyle();
