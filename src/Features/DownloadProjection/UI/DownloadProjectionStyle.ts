import styled from "styled-components";

const TopWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-1);
`;

const TitleWrapperSC = styled("div")`
  display: flex;
  gap: var(--space-2);
`;

export const DownloadProjectionStyle = () => ({
  TopWrapperSC,
  TitleWrapperSC,
});
