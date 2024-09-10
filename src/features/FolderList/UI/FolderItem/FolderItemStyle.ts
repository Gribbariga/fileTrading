import styled from "styled-components";

const CardSC = styled("div")`
  width: 100%;
  display: flex;
  padding: var(--space-3);
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-a6);
  background: #fff;
  height: 72px;
`;

const SegmentWrapperSC = styled("div")`
  width: 25%;
`;

const NameAndImgWrapperSC = styled("div")`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

export const FolderItemStyle = () => ({
  CardSC,
  SegmentWrapperSC,
  NameAndImgWrapperSC,
});
