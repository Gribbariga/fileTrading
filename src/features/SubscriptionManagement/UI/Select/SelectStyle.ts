import { SegmentedControl } from "@radix-ui/themes";
import { IconButtonUI } from "src/shared/IconButtonUI/IconButtonUI";
import styled from "styled-components";

const WrapperSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SegmentControlRootSC = styled(SegmentedControl.Root)`
  display: flex;
  max-width: 395px;
  width: 100%;
  height: 40px;
`;

const SegmentControlItemSC = styled(SegmentedControl.Item)`
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 20%;
`;

const Test = styled(SegmentControlItemSC)`
  width: 208px;
`;

const TariffListSC = styled("div")`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: start;
`;

const SelectTariffWrapperSC = styled("div")`
  position: relative;
  max-width: 927px;
  max-height: 690px;
  padding: var(--space-6);
  border-radius: var(--radius-5);
  border: 1px solid var(--gray-a3);
  background: #fff;
  /* Shadows/shadow-6 */
  box-shadow: 0px 16px 36px -20px var(--gray-a7, rgba(0, 0, 0, 0.19)),
    0px 16px 64px 0px var(--gray-a2, rgba(0, 0, 0, 0.02)),
    0px 12px 60px 0px var(--black-a3, rgba(0, 0, 0, 0.15));
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButtonSC = styled(IconButtonUI)`
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
`;

const SwitchWrapper = styled("div")`
  display: flex;
  gap: 10px;
  margin-bottom: var(--space-8);
`;

export const SelectStyle = () => ({
  Test,
  WrapperSC,
  TariffListSC,
  IconButtonSC,
  SwitchWrapper,
  SegmentControlRootSC,
  SegmentControlItemSC,
  SelectTariffWrapperSC,
});
