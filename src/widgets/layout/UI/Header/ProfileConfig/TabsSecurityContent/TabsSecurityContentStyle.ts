import { Dialog } from "@radix-ui/themes";
import { ButtonUI } from "src/shared/ButtonUI/ButtonUI";
import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import styled from "styled-components";

const DialogContentSC = styled(Dialog.Content)`
  max-width: 413px;
`;

const ButtonUISC = styled(ButtonUI)`
  ${mediaMaxQuery(389)} {
    width: 100%;
    font-size: 14px;
  }
`;

export const TabsSecurityContentStyle = () => ({ ButtonUISC, DialogContentSC });
