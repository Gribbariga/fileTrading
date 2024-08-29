import styled from "styled-components";

const StorageHeaderSC = styled("div")`
  display: flex;
  height: 72px;
  padding: var(--space-3, 12px);
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  border-radius: var(--radius-4, 8px);
  border: 1px solid var(--gray-a6);
  background: var(--color-panel-solid, #fff);
  margin-bottom: var(--space-4);
`;

const InfoWrapperSC = styled("div")`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const TimeStorageSC = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StorageHeaderStyle = () => ({
  TimeStorageSC,
  InfoWrapperSC,
  StorageHeaderSC,
});
