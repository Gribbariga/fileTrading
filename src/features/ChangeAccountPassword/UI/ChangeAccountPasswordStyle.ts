import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const FormSC = styled("form")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const TextFieldRoot = styled(TextField.Root)`
  max-width: 85.6%;
  width: 60%;
`;

export const ChangeAccountPasswordStyle = () => ({ FormSC, TextFieldRoot });
