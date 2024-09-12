import { Tabs } from "@radix-ui/themes";
import styled from "styled-components";

const ContentWrapperSC = styled("div")`
  width: 100%;
  padding: var(--space-5);
`;

const TitleWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-5);
`;

export const ProfileConfigStyle = () => ({
  TitleWrapperSC,
  ContentWrapperSC,
});
