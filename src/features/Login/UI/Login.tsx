import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { Callout, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userSlice } from "src/entities/user/model/userSlice";
import { login } from "src/shared/API/user/auth/auth.ts";
import { AxiosError, isAxiosError } from "axios";
import { backendCodeError } from "src/shared/constant/backendCodeError.ts";
import { useForm } from "react-hook-form";
import { LoginStyle } from "./LoginStyle";

interface IData {
  login: string;
  password: string;
}

export const Login = () => {
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
    login(data)
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
            setError("root", {
              message: errorMessage[error.response?.data.error],
            });
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
              placeholder="Введите логин"
            />
          </InputWrapperSC>
          <InputWrapperSC>
            <PasswordTitleWrapperSC>
              <Text
                align={"left"}
                highContrast={true}
                size={"3"}
                weight={"medium"}
              >
                Введите пароль
              </Text>
              <Link href="/storage">Забыли пароль?</Link>
            </PasswordTitleWrapperSC>

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
            Создать аккаунт
          </ButtonUI>
          <ButtonUI
            size={"2"}
            variant="soft"
            highContrast={false}
            type="submit"
          >
            Войти
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
  PasswordTitleWrapperSC,
} = LoginStyle();
