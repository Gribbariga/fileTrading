import styled from "styled-components";

const StorageActionBarWrapperSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: var(--space-4);
`;

const ActionWrapperSC = styled("div")`
  max-width: 358px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StorageActionBarStyle = () => ({
  ActionWrapperSC,
  StorageActionBarWrapperSC,
});
