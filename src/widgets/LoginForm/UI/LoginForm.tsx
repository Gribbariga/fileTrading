import { Heading } from "@radix-ui/themes";
import { LoginFormStyle } from "./LoginFormStyle";
import { Login } from "src/features/Login/publicApi";

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
      <Login />
    </RegisterWrapperSC>
  );
};

const { RegisterWrapperSC } = LoginFormStyle();
