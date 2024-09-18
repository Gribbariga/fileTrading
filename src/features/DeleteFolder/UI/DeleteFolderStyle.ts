import styled from "styled-components";

import Trash from "../assets/Trash.svg?react";
import { Dialog } from "@radix-ui/themes";

const ButtonWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: var(--space-3);
`;

const TrashSC = styled(Trash)`
  & > path {
    stroke: #ce2c31;
  }
`;

const DialogContentSC = styled(Dialog.Content)`
  max-width: 400px;
`;

export const DeleteFolderStyle = () => ({
  TrashSC,
  ButtonWrapperSC,
  DialogContentSC,
});
