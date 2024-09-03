import { Callout, TextField } from "@radix-ui/themes";
import styled from "styled-components";

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
  align-items: center;
`;

export const LoginStyle = () => ({
  FormSC,
  CalloutSC,
  TextFieldSC,
  InputWrapperSC,
  ButtonsGroupSC,
  InputsWrapperSC,
  PasswordTitleWrapperSC,
});
