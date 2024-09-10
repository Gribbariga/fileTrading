import styled from "styled-components";

const ListHeaderSC = styled("div")`
  width: 100%;
  display: flex;
  padding: var(--space-3) var(--space-4);
  align-items: center;
  align-self: stretch;
  border-radius: var(--radius-3) var(--radius-3) 0px 0px;
  background: var(--gray-a2);
`;

const ListHeaderSegmentWrapperSC = styled("div")`
  width: 25%;
`;

export const FolderListStyle = () => ({
  ListHeaderSC,
  ListHeaderSegmentWrapperSC,
});
