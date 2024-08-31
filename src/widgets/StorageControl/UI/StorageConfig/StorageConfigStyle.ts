import styled from "styled-components";

const SegmentWrapperSC = styled("div")`
  display: flex;
  padding: var(--space-4, 16px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4, 16px);
  align-self: stretch;
  border-radius: var(--radius-4, 8px);
  border: 1px solid var(--gray-a5, rgba(0, 0, 0, 0.15));
  background: var(--color-panel-solid, #fff);
  margin-bottom: var(--space-4);
`;

const TitleWrapperSC = styled("div")`
  display: flex;
  gap: var(--space-2);
  align-items: center;
`;

export const StorageConfigStyle = () => ({
  TitleWrapperSC,
  SegmentWrapperSC,
});
