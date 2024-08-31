import styled from "styled-components";

const MainWrapperSC = styled("div")<{ $screenHeight: number }>`
  max-height: 796px;
  height: ${({ $screenHeight }) => `${$screenHeight}px`};
  padding-top: 40px;
  overflow: hidden;
`;

const TopWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-4);
`;

const MidWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  height: 72px;
  padding: var(--space-3, 12px);
  align-items: center;
  gap: var(--space-3, 12px);
  align-self: stretch;
  border-radius: var(--radius-4);
  border: 1px solid var(--gray-a6);
  background: var(--color-panel-solid);
  margin-bottom: var(--space-4);
`;

const BottomWrapperSC = styled("div")`
  width: 100%;
  height: 84%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const ListWrapperSC = styled("div")`
  max-width: 928px;
  width: 68%;
`;

const ListHeaderSC = styled("div")`
  display: flex;
  width: 100%;
  padding: 12px var(--space-3);
  align-items: center;
  border-radius: var(--radius-3) var(--radius-3) 0px 0px;
  background: var(--gray-a2);
  height: 44px;
`;

const ListItemSC = styled("div")`
  width: 100%;
  height: 48px;
  display: flex;

  padding: var(--space-3) 0px var(--space-3) var(--space-2);
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-a5);
  background: #fff;
`;

const ConfigWrapperSC = styled("div")`
  width: 29%;
  max-width: 401px;
`;

const ConfigHeaderSC = styled("div")`
  display: flex;
  height: 40px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: var(--radius-4) var(--radius-4) 0px 0px;
  background: var(--gray-a2, #f9f9f9);
  width: 100%;
`;

const ConfigListSC = styled("div")`
  display: flex;
  padding: var(--Spacing-5, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0px 0px var(--radius-4-max, 8px) var(--radius-4, 8px);
  background: #fff;
`;

export const StorageViewSkeletonStyle = () => ({
  ListItemSC,
  ConfigListSC,
  MidWrapperSC,
  TopWrapperSC,
  ListHeaderSC,
  MainWrapperSC,
  ListWrapperSC,
  ConfigHeaderSC,
  ConfigWrapperSC,
  BottomWrapperSC,
});
