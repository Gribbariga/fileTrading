import { Register } from "src/features/Register/publicApi.ts";
import { Heading } from "@radix-ui/themes";
import { LoginFormStyle } from "./LoginFormStyle";

export const LoginForm = () => {
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

const { RegisterWrapperSC } = LoginFormStyle();
