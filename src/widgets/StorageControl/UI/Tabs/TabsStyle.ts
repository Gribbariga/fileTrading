import { Tabs } from "@radix-ui/themes";
import styled from "styled-components";

const TabsWrapperSC = styled("div")`
  width: 100%;
  height: 40px;
  display: flex;
  height: var(--space-7, 40px);
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: var(--radius-4, 8px) var(--radius-4, 8px) 0px 0px;
  background: var(--gray-a2, #f9f9f9);
`;

const TriggetSC = styled(Tabs.Trigger)<{ $isGuest: boolean }>`
  width: ${({ $isGuest }) => ($isGuest ? "100%" : "33%")};
`;
const ListSC = styled(Tabs.List)`
  width: 100%;
`;

export const TabsListStyle = () => ({
  ListSC,
  TriggetSC,
  TabsWrapperSC,
});
