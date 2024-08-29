import styled from "styled-components";

const InfoWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  padding: var(--space-4, 16px);
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-radius: var(--Radius-4, 8px);
  border: 1px solid var(----gray-a6, rgba(0, 0, 0, 0.15));
  background: var(--color-panel-solid, #fff);
  margin-bottom: var(--space-4);
`;

const InfoItemSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: justify-content;
`;

export const InfoStyle = () => ({ InfoWrapperSC, InfoItemSC });
