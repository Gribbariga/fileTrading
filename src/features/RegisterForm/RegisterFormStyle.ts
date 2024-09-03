import styled from "styled-components";

const InputWrapperSC = styled("div")``;

const ButtonsGroupSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: var(--space-3);
`;

export const RegisterFormStyle = () => ({ InputWrapperSC, ButtonsGroupSC });
