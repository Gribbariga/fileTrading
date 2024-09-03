import { Heading } from "@radix-ui/themes";
import { TwoFaFormStyle } from "./TwoFaFormStyle.ts";
import { TwoFA } from "src/features/TwoFA/publicApi.ts";

export const TwoFaForm = () => {
  return (
    <>
      <RegisterWrapperSC size={"3"} variant="surface">
        <Heading
          align={"left"}
          mb={"5"}
          highContrast={true}
          size={"5"}
          weight={"medium"}
        >
          Двухфакторная аутентификация
        </Heading>
        <TwoFA />
      </RegisterWrapperSC>
    </>
  );
};

const { RegisterWrapperSC } = TwoFaFormStyle();
