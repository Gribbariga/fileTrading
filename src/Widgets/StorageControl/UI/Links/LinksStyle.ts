import styled from "styled-components";

const SegmentWrapperSC = styled("div")`
  display: flex;
  padding: var(--space-4);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  align-self: stretch;
  border-radius: var(--radius-4);
  border: 1px solid var(--gray-a3);
  background: var(--color-panel-solid);
  margin-bottom: var(--space-4);
`;

export const LinksStyle = () => ({
  SegmentWrapperSC,
});
