import styled from "styled-components";

const StorageListWrapperSC = styled("div")`
  max-width: 928px;
  height: 100%;
  width: 100%;
  border-radius: 0px 0px var(--radius-4) var(--radius-4);
  overflow: hidden;
`;

const ListHeaderSC = styled("div")`
  display: flex;
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);

  align-items: center;
  border-radius: var(--radius-3, 6px) var(--radius-3, 6px)
    var(--radius-none, 0px) var(--radius-none, 0px);

  background: var(--gray-a2);
`;

const SegmentWrapperSC = styled("div")`
  max-width: 275px;
  width: 28%;
`;

export const StorageFileListStyle = () => ({
  ListHeaderSC,
  SegmentWrapperSC,
  StorageListWrapperSC,
});
