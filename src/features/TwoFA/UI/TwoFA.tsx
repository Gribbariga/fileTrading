import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { TwoFAStyle } from "./TwoFAStyle.ts";
import { Callout, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ICheckData {
  two_fa_code: string;
}

export const TwoFA = () => {
  const {
    register: registerInput,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      two_fa_code: "",
    },
  });

  const navigation = useNavigate();

  const [, setIsLoading] = useState(false);

  const handleCheck = (data: ICheckData) => {
    setIsLoading(true);
    console.log(data);
    // verifyTwoFa(data)
    //   .then(({ data }) => {
    //     if (data.verify) {
    //       navigation("/");
    //     } else {
    //       setError("root", { message: "Неверный код" });
    //     }
    //   })
    //   .catch(() => {
    //     setError("root", { message: "500. Внутренняя ошибка сервера" });
    //   });
    // login(data)
    //   .then(({ data }) => {
    //     setIsLoading(false);
    //     setToken(data.token);
    //     navigation("/");
    //   })
    //   .catch((error: Error | AxiosError) => {
    //     setIsLoading(false);
    //     if (isAxiosError(error)) {
    //       const errorMessage = backendCodeError[error.status || 500];
    //       if (typeof errorMessage !== "string") {
    //         setError("root", { message: errorMessage[error.message] });
    //       } else {
    //         setError("root", { message: errorMessage });
    //       }
    //     }
    //   });
  };

  const handleBack = () => {
    navigation("/login");
  };

  const error = errors.root?.message || errors.two_fa_code?.message;

  return (
    <>
      <FormSC onSubmit={handleSubmit(handleCheck)}>
        <InputsWrapperSC>
          <InputWrapperSC>
            <Text
              align={"left"}
              highContrast={true}
              size={"3"}
              weight={"medium"}
            >
              Введите код из Google Authenticator
            </Text>
            <TextFieldSC
              size={"3"}
              variant="surface"
              {...registerInput("two_fa_code", {
                required: "Заполните обязательное поле",
              })}
              placeholder="Защитный код"
            />
          </InputWrapperSC>
        </InputsWrapperSC>

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

        <ButtonsGroupSC>
          <ButtonUI
            type="button"
            onClick={handleBack}
            size={"2"}
            variant="solid"
            highContrast={false}
          >
            Назад
          </ButtonUI>
          <ButtonUI
            size={"2"}
            variant="soft"
            highContrast={false}
            type="submit"
          >
            Продолжить
          </ButtonUI>
        </ButtonsGroupSC>
      </FormSC>
    </>
  );
};

const {
  FormSC,
  CalloutSC,
  TextFieldSC,
  InputWrapperSC,
  ButtonsGroupSC,
  InputsWrapperSC,
} = TwoFAStyle();
