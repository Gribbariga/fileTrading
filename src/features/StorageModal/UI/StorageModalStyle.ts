import { Dialog } from "@radix-ui/themes";
import styled from "styled-components";

const DialogRootSC = styled(Dialog.Root)`
  z-index: ${1000000};
`;

const TitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

const TabContentSC = styled("div")`
  height: 400px;
  overflow: auto;
`;

export const StorageModalStyle = () => ({
  TabContentSC,
  DialogRootSC,
  TitleWrapperSC,
});
