import { Card, TextField } from "@radix-ui/themes";
import styled from "styled-components";

const WrapperSC = styled(Card)`
  max-width: 444px;
  width: 32.72%;
`;

const InputsWrapperSC = styled("div")`
  margin-bottom: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;
const InputWrapperSC = styled("div")``;

const FormSC = styled("form")`
  width: 100%;
`;

const ButtonWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: var(--space-2);
`;

export const SubAccountItemStyle = () => ({
  FormSC,
  WrapperSC,
  TextFieldSC,
  InputWrapperSC,
  InputsWrapperSC,
  ButtonWrapperSC,
});
