import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const TopWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TitleWrapperSC = styled("div")`
  display: flex;
  gap: var(--space-2);
  align-items: center;
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;

export const StoragePasswordStyle = () => ({
  TextFieldSC,
  TopWrapperSC,
  TitleWrapperSC,
});
