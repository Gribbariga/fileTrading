import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const FormSC = styled("form")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const TextFieldRootSC = styled(TextField.Root)`
  max-width: 85.6%;
  width: 100%;
`;

const ErrorMessageWrapperSC = styled("div")`
  width: 100%;
`;

export const ChangeAccountPasswordStyle = () => ({ FormSC, TextFieldRoot });
