import { Dialog } from "@radix-ui/themes";
import styled from "styled-components";

const TitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const DialogRootSC = styled(Dialog.Root)`
  z-index: ${1000000};
`;

const TabContentSC = styled("div")`
  height: 400px;
`;

export const ProfileConfigStyle = () => ({
  DialogRootSC,
  TabContentSC,
  TitleWrapperSC,
});
