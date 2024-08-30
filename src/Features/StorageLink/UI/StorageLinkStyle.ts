import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const LinkWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;

export const StorageLinkStyle = () => ({ TextFieldSC, LinkWrapperSC });
