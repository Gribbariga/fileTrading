import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { TwoFAStyle } from "./TwoFAStyle.ts";
import { Callout, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const TwoFA = () => {
  const {
    register: registerInput,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      key: "",
    },
  });

  const [, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
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

  const error = errors.root?.message || errors.key?.message;

  return (
    <>
      <FormSC onSubmit={handleSubmit(handleRegister)}>
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
              {...registerInput("key", {
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
          <ButtonUI size={"2"} variant="solid" highContrast={false}>
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
