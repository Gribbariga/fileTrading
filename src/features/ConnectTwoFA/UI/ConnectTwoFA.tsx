import { Callout, Dialog, Text } from "@radix-ui/themes";
import { ConnectTwoFAStyle } from "./ConnectTwoFAStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { createTwoFa, setTwoFA } from "src/shared/API/auth/2FA/2FA.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { AxiosError, isAxiosError } from "axios";
import { userSlice } from "src/entities/user/model/userSlice.ts";
import { setCookie } from "src/shared/lib/helper/setCookie/setCookie.ts";

export const ConnectTwoFA = () => {
  const closeTrigget = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [twoFaKey, setTwoFaKey] = useState("");
  const { setTwoFa: setTwoFaStorage } = userSlice((state) => state);
  const [error, setError] = useState("");

  useEffect(() => {
    createTwoFa().then((response) => {
      const twoFaKey = response.headers["two-fa-key"];

      const byteArray = new Uint8Array(response.data);
      const base64 = btoa(
        byteArray.reduce((data, byte) => data + String.fromCharCode(byte), "")
      );

      setImgUrl(`data:image/png;base64,${base64}`);
      setTwoFaKey(twoFaKey);
    });
  }, []);
  console.log(imgUrl);
  console.log(twoFaKey);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSend = () => {
    setTwoFA({ two_fa_code: value, two_fa_key: twoFaKey })
      .then(({ data }) => {
        if (data.message === "Set Two FA success") {
          setTwoFaStorage(true);
          setCookie("2FA", true, {
            "max-age": import.meta.env.VITE_LOGIN_COOKIE_TIME,
          });
          const button = closeTrigget.current?.children[0] as HTMLButtonElement;
          if (button) {
            button.click();
          }
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
  console.log(imgUrl);

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

      <ButtonWrapperSC ref={closeTrigget}>
        <Dialog.Close>
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
