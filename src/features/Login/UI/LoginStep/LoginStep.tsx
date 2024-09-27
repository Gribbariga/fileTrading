import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";
import { LoginStepStyle } from "./LoginStepStyle.ts";
import { Callout, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ILoginStepProps {
  error?: string;
  isLoading: boolean;
}

export const LoginStep: FC<ILoginStepProps> = ({ error, isLoading }) => {
  const navigation = useNavigate();

  const { register } = useFormContext();

  return (
    <>
      <InputsWrapperSC>
        <InputWrapperSC>
          <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
            Ваш логин
          </Text>
          <TextFieldSC
            size={"3"}
            variant="surface"
            {...register("login", {
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
            {...register("password", {
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
          loading={isLoading}
          size={"2"}
          variant="solid"
          highContrast={false}
          type="submit"
        >
          Войти
        </ButtonUI>
      </ButtonsGroupSC>
    </>
  );
};

const {
  CalloutSC,
  TextFieldSC,
  InputWrapperSC,
  ButtonsGroupSC,
  InputsWrapperSC,
  PasswordTitleWrapperSC,
} = LoginStepStyle();
