import { Callout, TextField } from "@radix-ui/themes";
import styled from "styled-components";

const FormSC = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ButtonWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const QrCodeWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const QrCodeImgSC = styled("img")`
  width: 224px;
  height: 224px;
  margin-bottom: var(--space-4);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
  margin-bottom: var(--space-3);
`;

const CalloutSC = styled(Callout.Root)`
  width: 100%;
`;

export const ConnectTwoFAStyle = () => ({
  FormSC,
  CalloutSC,
  QrCodeImgSC,
  TextFieldSC,
  QrCodeWrapperSC,
  ButtonWrapperSC,
});
