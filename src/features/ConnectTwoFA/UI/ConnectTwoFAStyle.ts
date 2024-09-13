import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

const FormSC = styled("form")`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;

export const ConnectTwoFAStyle = () => ({
  FormSC,
  TextFieldSC,
  ButtonWrapperSC,
});
