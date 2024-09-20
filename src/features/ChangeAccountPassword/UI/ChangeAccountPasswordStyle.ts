import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const FormSC = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const TextFieldRootSC = styled(TextField.Root)`
  width: 100%;
`;

export const ChangeAccountPasswordStyle = () => ({ FormSC, TextFieldRootSC });
