import { Tabs } from "@radix-ui/themes";
import styled from "styled-components";

const WrapperSC = styled("div")`
  max-width: 401px;
  width: 100%;
`;

const TabsContentWrapperSC = styled("div")`
  width: 100%;
  display: flex;
  padding: var(--space-5, 24px);
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0px 0px var(--radius-4, 8px) var(--radius-4, 8px);
  background: white;
`;

const TabsContent = styled(Tabs.Content)`
  width: 100%;
`;

export const StorageControlStyle = () => ({
  WrapperSC,
  TabsContent,
  TabsContentWrapperSC,
});
