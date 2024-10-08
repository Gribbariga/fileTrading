import styled from "styled-components";

const InfoListSC = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: var(--space-4);
`;

const InfoItemWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TabsSubscribeContentStyle = () => ({
  InfoListSC,
  InfoItemWrapperSC,
});
