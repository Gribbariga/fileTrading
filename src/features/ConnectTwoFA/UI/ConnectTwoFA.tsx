import { Callout, Dialog, Text } from "@radix-ui/themes";
import { ConnectTwoFAStyle } from "./ConnectTwoFAStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { createTwoFa, verifyTwoFa } from "src/shared/API/auth/2FA/2FA.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { AxiosError, isAxiosError } from "axios";

export const ConnectTwoFA = () => {
  const closeTrigget = useRef<HTMLButtonElement>(null);

  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    createTwoFa().then((response) => {
      const url = URL.createObjectURL(response.data);
      setImgUrl(url);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSend = () => {
    verifyTwoFa({ two_fa_code: value })
      .then(({ data }) => {
        if (data.verify) {
          closeTrigget.current?.click();
        } else {
          setError("Неверный код");
        }
      })
      .catch((error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          if (error.status === 500) {
            setError("500. Внутренняя ошибка сервера");
          } else {
            setError("Неверный код");
          }
        }
      });
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

      {error && (
        <>
          <CalloutSC color="red" size={"1"} mb={"5"} variant="soft">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{error}</Callout.Text>
          </CalloutSC>
        </>
      )}

      <ButtonWrapperSC>
        <Dialog.Close ref={closeTrigget}>
          <ButtonUI size={"3"} variant="soft">
            Отменить
          </ButtonUI>
        </Dialog.Close>

        <ButtonUI type="button" onClick={handleSend} size={"3"} variant="solid">
          Сохранить
        </ButtonUI>
      </ButtonWrapperSC>
    </FormSC>
  );
};

const {
  FormSC,
  CalloutSC,
  QrCodeImgSC,
  TextFieldSC,
  QrCodeWrapperSC,
  ButtonWrapperSC,
} = ConnectTwoFAStyle();
