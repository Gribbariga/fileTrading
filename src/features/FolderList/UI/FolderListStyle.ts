import { Skeleton } from "@radix-ui/themes";
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

const SkeletonWrapperSC = styled("div")`
  height: 44px;
  margin-bottom: var(--space-3);
  display: flex;
  padding: var(--space-3);
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-a5, rgba(0, 0, 0, 0.15));
  background: #fff;
`;

const SkeletonSC = styled(Skeleton)`
  width: 100%;
  height: 20px;
`;

export const FolderListStyle = () => ({
  SkeletonSC,
  ListHeaderSC,
  SkeletonWrapperSC,
  ListHeaderSegmentWrapperSC,
});
