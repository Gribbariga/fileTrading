import { Card, TextField } from "@radix-ui/themes";
import { mediaMaxQuery } from "src/shared/lib/helper/mediaMaxQuery/mediaMaxQuery";
import { MOBILE } from "src/shared/constant/screenSize";
import styled from "styled-components";

const WrapperSC = styled(Card)`
  /* max-width: 444px; */
  flex: 0 0 32.64%;
  margin-bottom: 16px;
  ${mediaMaxQuery(800)} {
    flex: 0 0 49%;
  }
  /* ${mediaMaxQuery(630)} {
    flex: 0 0 100%;
  } */
  ${mediaMaxQuery(MOBILE)} {
    flex: 0 0 100%;
    height: 308px;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

const InputsWrapperSC = styled("div")`
  margin-bottom: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const TextFieldSC = styled(TextField.Root)`
  width: 100%;
`;
const InputWrapperSC = styled("div")``;

const FormSC = styled("form")`
  width: 100%;
`;

const ButtonWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: end;
  gap: var(--space-2);
`;

export const SubAccountItemStyle = () => ({
  FormSC,
  WrapperSC,
  TextFieldSC,
  InputWrapperSC,
  InputsWrapperSC,
  ButtonWrapperSC,
});
