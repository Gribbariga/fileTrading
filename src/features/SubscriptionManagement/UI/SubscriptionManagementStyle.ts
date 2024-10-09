import { SegmentedControl } from "@radix-ui/themes";
import styled from "styled-components";

const SegmentControlRootSC = styled(SegmentedControl.Root)`
  display: flex;
  width: 100%;
  max-width: 865px;
  height: 40px;
`;

const SegmentControlItemSC = styled(SegmentedControl.Item)`
  height: 100%;
  width: 25%;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const TariffListSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const SubscriptionManagementStyle = () => ({
  TariffListSC,
  SegmentControlRootSC,
  SegmentControlItemSC,
});
