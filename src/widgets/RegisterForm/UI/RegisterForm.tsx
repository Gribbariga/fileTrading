import { Register } from "src/features/Register/publicApi.ts";
import { RegisterFormStyle } from "./RegisterFormStyle.ts";
import { Heading } from "@radix-ui/themes";

export const RegisterForm = () => {
  return (
    <RegisterWrapperSC>
      <Heading align={"left"} highContrast={true} size={"5"} weight={"medium"}>
        Войдите в аккаунт
      </Heading>
      <Register />
    </RegisterWrapperSC>
  );
};

const { RegisterWrapperSC } = RegisterFormStyle();
