import styled from "styled-components";

export const ContainerSC = styled("div")<{ $maxWidth?: number }>`
  width: 100%;
  max-width: ${({ $maxWidth }) => `${$maxWidth ? $maxWidth : 1522}px`};
  margin: 0 auto;
`;
