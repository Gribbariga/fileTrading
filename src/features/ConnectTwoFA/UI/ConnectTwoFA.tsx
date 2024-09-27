import { Callout, Dialog, Text } from "@radix-ui/themes";
import { ConnectTwoFAStyle } from "./ConnectTwoFAStyle.ts";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { createTwoFa, setTwoFA } from "src/shared/API/auth/2FA/2FA.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { AxiosError, isAxiosError } from "axios";

export const ConnectTwoFA = () => {
  const closeTrigget = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [twoFaKey, setTwoFaKey] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    createTwoFa().then(async (response) => {
      setTwoFaKey(response.headers["two-fa-key"]);
      setImgUrl(response.data);
      // console.log(response);
      // const binaryLen = response.data.length;
      // const bytes = new Uint8Array(binaryLen);
      // for (let i = 0; i < binaryLen; i++) {
      //   bytes[i] = response.data.charCodeAt(i);
      // }
      // // // Создаем Blob из массива
      // const blob = new Blob([bytes], { type: "image/png" }); // Указываем правильный MIME тип
      // // console.log(blob);
      // const url = URL.createObjectURL(blob);
      // setImgUrl(url);
      // let buffer = new TextEncoder().encode(response.data);
      // // Преобразуем байты в строку (используя UTF-8)
      // let binaryString = "";
      // for (let i = 0; i < buffer.length; i++) {
      //   binaryString += String.fromCharCode(buffer[i]);
      // }

      // const res = btoa(binaryString);

      // setImgUrl(res);
      // const binaryLen = response.data.length;
      // const bytes64 = new Uint8Array(binaryLen);
      // for (let i = 0; i < binaryLen; i++) {
      //   bytes64[i] = response.data.charCodeAt(i) & 0xff; // Преобразуем в 8-битные значения
      // }

      // // Преобразуем Uint8Array в строку Base64
      // const base64String = btoa(String.fromCharCode.apply(null, bytes64));

      // const binaryString = window.atob(base64String); // Декодируем Base64 в бинарную строку
      // const len = binaryString.length;
      // const bytes = new Uint8Array(len);

      // for (let i = 0; i < len; i++) {
      //   bytes[i] = binaryString.charCodeAt(i);
      // }

      // const blob = new Blob([bytes], { type: "application/octet-stream" }); //
      // console.log(blob);
      // const url = URL.createObjectURL(blob);
      // setImgUrl(url);
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
        <QrCodeImgSC src={`data:image/png;base64,${imgUrl}`} />
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
