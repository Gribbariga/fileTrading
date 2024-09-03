import { Heading } from "@radix-ui/themes";
import { TwoFaFormStyle } from "./TwoFaFormStyle.ts";

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
          Создайте аккаунт
        </Heading>
        <TwoFaForm />
      </RegisterWrapperSC>
    </>
  );
};

const { RegisterWrapperSC } = TwoFaFormStyle();
