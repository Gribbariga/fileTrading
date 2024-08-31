import styled from "styled-components";

const WrapperSC = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapperSC = styled("div")`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

export const PageFallBackStyle = () => ({ ContentWrapperSC, WrapperSC });
