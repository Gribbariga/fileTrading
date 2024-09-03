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

export const RegisterFormStyle = () => ({
  FormSC,
  CalloutSC,
  TextFieldSC,
  InputWrapperSC,
  ButtonsGroupSC,
  InputsWrapperSC,
});
