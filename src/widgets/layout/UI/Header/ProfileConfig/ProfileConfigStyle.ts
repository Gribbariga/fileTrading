import { Dialog } from "@radix-ui/themes";
import styled from "styled-components";

const ContentWrapperSC = styled("div")`
  width: 100%;
  padding: var(--space-5);
`;

const TitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const DialogRootSC = styled(Dialog.Root)`
  z-index: ${1000000};
`;

export const ProfileConfigStyle = () => ({
  DialogRootSC,
  TitleWrapperSC,
  ContentWrapperSC,
});
