import { ButtonUI } from "src/shared/ButtonUI/ButtonUI.tsx";

import { Callout, Text } from "@radix-ui/themes";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { TwoFAStepStyle } from "src/features/Login/UI/TwoFaStep/TwoFaStepStyle.ts";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface ITwoFAStepProps {
  handleBack: () => void;
  error?: string;
  isLoading: boolean;
}

export const TwoFAStep: FC<ITwoFAStepProps> = ({
  handleBack,
  error,
  isLoading,
}) => {
  const { register } = useFormContext();

  return (
    <>
      <InputsWrapperSC>
        <InputWrapperSC>
          <Text align={"left"} highContrast={true} size={"3"} weight={"medium"}>
            Введите код из Google Authenticator
          </Text>
          <TextFieldSC
            size={"3"}
            variant="surface"
            {...register("two_fa_code", {
              required: "Заполните обязательное поле",
            })}
            placeholder="Защитный код"
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
          onClick={handleBack}
          size={"2"}
          variant="solid"
          highContrast={false}
        >
          Назад
        </ButtonUI>
        <ButtonUI
          loading={isLoading}
          size={"2"}
          variant="soft"
          highContrast={false}
          type="submit"
        >
          Продолжить
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
} = TwoFAStepStyle();
