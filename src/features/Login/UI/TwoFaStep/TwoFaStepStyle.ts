import styled from "styled-components";

import { Callout, TextField } from "@radix-ui/themes";

const InputWrapperSC = styled("div")``;

const ButtonsGroupSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: var(--space-3);
`;

const InputsWrapperSC = styled("div")`
  margin-bottom: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;

const CalloutSC = styled(Callout.Root)`
  width: 100%;
`;

const FormSC = styled("form")`
  width: 100%;
`;

const PasswordTitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-1);
`;

export const TwoFAStepStyle = () => ({
  FormSC,
  CalloutSC,
  TextFieldSC,
  InputWrapperSC,
  ButtonsGroupSC,
  InputsWrapperSC,
  PasswordTitleWrapperSC,
});
