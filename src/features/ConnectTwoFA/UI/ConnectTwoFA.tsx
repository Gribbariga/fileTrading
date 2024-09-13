import { Text } from "@radix-ui/themes";
import { ConnectTwoFAStyle } from "./ConnectTwoFAStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { useEffect } from "react";
import { createKey2FA } from "src/shared/API/user/2FA/2FA.ts";

export const ConnectTwoFA = () => {
  useEffect(() => {
    createKey2FA();
  }, []);

  return (
    <FormSC>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"4"}>
        1. Отсканируйте QR-код в Google Authenticator
      </Text>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        2. Введите код безопасности
      </Text>
      <TextFieldSC size={"3"} variant="surface" />
      <ButtonWrapperSC>
        <ButtonUI size={"3"} variant="soft">
          Отменить
        </ButtonUI>
        <ButtonUI size={"3"} variant="solid">
          Сохранить
        </ButtonUI>
      </ButtonWrapperSC>
    </FormSC>
  );
};

const { FormSC, TextFieldSC, ButtonWrapperSC } = ConnectTwoFAStyle();
