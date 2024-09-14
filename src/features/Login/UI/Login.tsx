import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { Callout, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userSlice } from "src/entities/user/model/userSlice";
import { login } from "src/shared/API/user/auth/auth.ts";
import { AxiosError, isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { LoginStyle } from "./LoginStyle";
import { subscriptionStatus } from "src/shared/API/subscription/subscription";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice";
import { userCodeError } from "src/shared/constant/backendCodeError/User";

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
  const { setInfo } = userSlice((state) => state);

  const { setSubscribeStatus } = subscriptionSlice((state) => state);

  const [, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const handleRegister = (data: IData) => {
    setIsLoading(true);
    login(data)
      .then(({ data }) => {
        setInfo(data);
        subscriptionStatus({ user_id: data.user_id }).then(async ({ data }) => {
          setIsLoading(false);
          await setSubscribeStatus(data);
          navigation("/home");
        });
      })
      .catch((error: Error | AxiosError) => {
        setIsLoading(false);
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.status;
          console.log(errorMessage, userCodeError.USER_NOT_FOUND);
          switch (errorMessage) {
            case userCodeError.USER_NOT_FOUND:
              setError("root", { message: "Пользователь не найден" });
              break;
            case userCodeError.WRONG_PASSWORD:
              setError("root", { message: "Неверные данные" });
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
              Ваш логин
            </Text>
            <TextFieldSC
              size={"3"}
              variant="surface"
              {...registerInput("login", {
                required: "Заполните обязательное поле",
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
              <Link
                size={"2"}
                weight={"regular"}
                highContrast={false}
                href="/storage"
              >
                Забыли пароль?
              </Link>
            </PasswordTitleWrapperSC>

            <TextFieldSC
              size={"3"}
              variant="surface"
              {...registerInput("password", {
                required: "Заполните обязательное поле",
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
          <ButtonUI
            type="button"
            onClick={() => navigation("/register")}
            size={"2"}
            variant="soft"
            highContrast={false}
          >
            Создать аккаунт
          </ButtonUI>
          <ButtonUI
            size={"2"}
            variant="solid"
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
