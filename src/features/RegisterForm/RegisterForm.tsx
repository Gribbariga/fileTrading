import { Button, Callout, Text } from "@radix-ui/themes";
import { RegisterFormStyle } from "./RegisterFormStyle.ts";
import { useForm } from "react-hook-form";
import { register } from "src/shared/API/user/auth/auth.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSlice } from "src/entities/user/model/userSlice.ts";
import { AxiosError, isAxiosError } from "axios";
import { backendCodeError } from "src/shared/constant/backendCodeError.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface IData {
  login: string;
  password: string;
}

export const RegisterForm = () => {
  const {
    register: registerInput,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const { setToken } = userSlice((state) => state);

  const [, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const handleRegister = (data: IData) => {
    setIsLoading(true);
    register(data)
      .then(({ data }) => {
        setIsLoading(false);
        setToken(data.token);
        navigation("/");
      })
      .catch((error: Error | AxiosError) => {
        setIsLoading(false);
        if (isAxiosError(error)) {
          const errorMessage = backendCodeError[error.status || 500];
          if (typeof errorMessage !== "string") {
            setError("root", { message: errorMessage[error.message] });
          } else {
            setError("root", { message: errorMessage });
          }
        }
      });
  };

  const error =
    errors.root?.message || errors.login?.message || errors.password?.message;

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
              Придумайте логин
            </Text>
            <TextFieldSC
              size={"3"}
              variant="surface"
              {...registerInput("login", {
                required: "Заполните все обязательные поля",
                maxLength: { value: 250, message: "Логин слишком длинный" },
              })}
              placeholder="Ваш логин"
            />
          </InputWrapperSC>
          <InputWrapperSC>
            <Text
              align={"left"}
              highContrast={true}
              size={"3"}
              weight={"medium"}
            >
              Задайте пароль
            </Text>
            <TextFieldSC
              size={"3"}
              variant="surface"
              {...registerInput("password", {
                required: "Заполните все обязательные поля",
                maxLength: { value: 250, message: "Пароль слишком длинный" },
              })}
              placeholder="Пароль"
            />
          </InputWrapperSC>
        </InputsWrapperSC>

        {error && (
          <>
            <CalloutSC size={"1"} variant="soft">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>{error}</Callout.Text>
            </CalloutSC>
          </>
        )}

        <ButtonsGroupSC>
          <Button size={"2"} variant="soft" highContrast={false}>
            Создать аккаунт
          </Button>
          <Button size={"2"} variant="solid" highContrast={false} type="submit">
            Войти
          </Button>
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
} = RegisterFormStyle();
