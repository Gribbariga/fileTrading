import styled from "styled-components";

const WrapperSC = styled("div")`
  max-width: 401px;
  width: 100%;
`;

const TabsContentWRapperSC = styled("div")`
  width: 100%;
  display: flex;
  padding: var(--space-5, 24px);
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0px 0px var(--Radius-4-max, 8px) var(--Radius-4-max, 8px);
  background: white;
`;

export const StorageControlStyle = () => ({
  WrapperSC,
  InfoWrapperSC,
  TabsContentWRapperSC,
});
