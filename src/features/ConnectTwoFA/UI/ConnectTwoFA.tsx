import { Text } from "@radix-ui/themes";
import { ConnectTwoFAStyle } from "./ConnectTwoFAStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { createKey2FA, verifyKey2FA } from "src/shared/API/user/2FA/2FA.ts";

export const ConnectTwoFA = () => {
  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    createKey2FA().then((response) => {
      const url = URL.createObjectURL(response.data);
      setImgUrl(url);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSend = () => {
    verifyKey2FA({ code_2fa: value });
  };

  return (
    <FormSC>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"4"}>
        1. Отсканируйте QR-код в Google Authenticator
      </Text>
      <QrCodeWrapperSC>
        <QrCodeImgSC src={imgUrl} />
      </QrCodeWrapperSC>
      <Text size={"3"} weight={"medium"} align={"left"} mb={"2"}>
        2. Введите код безопасности
      </Text>
      <TextFieldSC
        onChange={handleChange}
        value={value}
        size={"3"}
        variant="surface"
      />
      <ButtonWrapperSC>
        <ButtonUI size={"3"} variant="soft">
          Отменить
        </ButtonUI>
        <ButtonUI type="button" onClick={handleSend} size={"3"} variant="solid">
          Сохранить
        </ButtonUI>
      </ButtonWrapperSC>
    </FormSC>
  );
};

const { FormSC, QrCodeImgSC, TextFieldSC, QrCodeWrapperSC, ButtonWrapperSC } =
  ConnectTwoFAStyle();
