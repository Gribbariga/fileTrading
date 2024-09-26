import { Callout, Text } from "@radix-ui/themes";
import { RegisterStyle } from "./RegisterStyle.ts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSlice } from "src/entities/user/model/userSlice.ts";
import { AxiosError, isAxiosError } from "axios";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { subscriptionStatus } from "src/shared/API/subscription/subscription.ts";
import { subscriptionSlice } from "src/entities/subscription/model/subcriptionSlice.ts";
import { userCodeError } from "src/shared/constant/backendCodeError/User.ts";
import { setCookie } from "src/shared/lib/helper/setCookie/setCookie.ts";
import { getInfo, register } from "src/shared/API/account/account/account.ts";

interface IData {
  login: string;
  password: string;
}

export const Register = () => {
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
    register(data)
      .then(({ data }) => {
        setTimeout(() => {
          setCookie("account_id", `${data.user_id}`, { "max-age": 86400000 });
          subscriptionStatus().then(async ({ data }) => {
            getInfo().then(async (response) => {
              const userInfo = response.data;
              setIsLoading(false);
              await setSubscribeStatus(data);
              setInfo(userInfo);
            });
          });
          navigation("/");
        }, 3000);
      })
      .catch((error: Error | AxiosError) => {
        setIsLoading(false);
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.status;
          console.log(errorMessage, userCodeError.USER_NOT_FOUND);
          switch (errorMessage) {
            case userCodeError.USER_EXISTS:
              setError("root", {
                message: "Пользователь с таким логином уже существует",
              });
              break;
            default:
              setError("root", { message: "500. Внутренняя ошибка сервера" });
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
                required: "Заполните обязательное поле",
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
            onClick={() => navigation("/login")}
            type="button"
            size={"2"}
            variant="soft"
            highContrast={false}
          >
            Войти
          </ButtonUI>
          <ButtonUI
            type="submit"
            size={"2"}
            variant="solid"
            highContrast={false}
          >
            Создать аккаунт
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
} = RegisterStyle();
