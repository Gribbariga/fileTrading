import styled from "styled-components";

const StorageListWrapperSC = styled("div")`
  max-width: 928px;
  width: 100%;
`;

const ListHeaderSC = styled("div")`
  display: flex;
  padding: 12px 0px 12px var(--space-2, 8px);

  align-items: center;
  border-radius: var(--Radius-3, 6px) var(--Radius-3-max, 6px)
    var(--radius-none, 0px) var(--radius-none, 0px);

  background: var(--gray-a3);
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
