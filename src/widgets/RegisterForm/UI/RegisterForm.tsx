import { Register } from "src/features/Register/publicApi.ts";
import { RegisterFormStyle } from "./RegisterFormStyle.ts";
import { Heading } from "@radix-ui/themes";

export const RegisterForm = () => {
  return (
    <RegisterWrapperSC size={"3"} variant="surface">
      <Heading
        align={"left"}
        mb={"5"}
        highContrast={true}
        size={"5"}
        weight={"medium"}
      >
        Войдите в аккаунт
      </Heading>
      <Register />
    </RegisterWrapperSC>
  );
};

const { RegisterWrapperSC } = RegisterFormStyle();
